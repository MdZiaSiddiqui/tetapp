import React from 'react';
import Navbar from "@/components/Navbar";

export default function RefundPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f7f3ff] to-[#f0eaff] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#d1bcff]/65 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#ffdff9]/60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-[3rem] bg-[#b798ff]/55 blur-2xl" />
      </div>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
      <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>
      <p className="text-lg mb-4">
        <strong>Last updated:</strong> September 22, 2025
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1) Scope</h2>
      <p className="text-lg mb-4">
        Applies to purchases made directly on Supacharge TS-TET.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2) eBooks and digital downloads</h2>
      <p className="text-lg mb-4">
        Non-refundable.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3) Software access</h2>
      <p className="text-lg mb-4">
        100% refund on software access if canceled within 48 hours of purchase. After 48 hours, no refund.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4) Unlimited PRO Access (eBooks + Software)</h2>
      <p className="text-lg mb-4">
        Only the software access portion qualifies for a refund. eBooks are charged at 50% upon cancellation of Unlimited PRO Access.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5) How to request</h2>
      <p className="text-lg mb-4">
        To request a refund, please email us at support@supacharge.me or contact us on WhatsApp. Provide your registered email address or phone number, the date of purchase, and the reason for your request.
        Approved refunds are issued to the original payment method within 7–10 business days. Bank processing times may vary.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6) Abuse</h2>
      <p className="text-lg mb-4">
        Accounts flagged for sharing, scraping, fraud, or ToS violations may be denied refunds and restricted.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7) Changes</h2>
      <p className="text-lg mb-4">
        We may update this policy. Updates apply from the posted date.
      </p>
      </div>
    </div>
  );
}