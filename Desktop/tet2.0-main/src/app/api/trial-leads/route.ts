import { NextRequest, NextResponse } from "next/server";

import { supabaseServiceClient } from "@/lib/supabase/service";

const sanitizePhone = (phone: string) => phone.replace(/[^0-9+]/g, "");

const isValidPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
};

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const phone =
    typeof body === "object" && body !== null && "phone" in body
      ? String((body as { phone?: unknown }).phone ?? "").trim()
      : "";

  if (!phone) {
    return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
  }

  const sanitizedPhone = sanitizePhone(phone);

  if (!isValidPhone(sanitizedPhone)) {
    return NextResponse.json(
      {
        error:
          "Enter a valid phone number.",
      },
      { status: 400 }
    );
  }

  const supabase = supabaseServiceClient();

  const { error: insertError } = await supabase.from("trial_leads").insert({
    phone_number: phone,
    normalized_phone: sanitizedPhone,
  });

  if (insertError) {
    console.error("Failed to insert trial lead", insertError);
    return NextResponse.json({ error: "Failed to save phone number." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
