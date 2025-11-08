"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-4 mt-4 rounded-full border border-slate-200/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 cursor-pointer focus:outline-none"
          onClick={() => router.push("/")}
        >
          <Image
            src="/Supacharge Logo.webp"
            alt="Supacharge TS-TET"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-[0.6rem] sm:text-lg font-medium uppercase tracking-[0.2em] text-slate-700">
            Supacharge TS-TET
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            className="!h-9 !px-3 border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-white sm:!h-10 sm:!px-4"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button
            className="!h-9 !px-3 bg-gradient-to-r from-[#6a3bff] via-[#8646ff] to-[#c06bff] text-white shadow-[0_10px_26px_rgba(134,70,255,0.28)] hover:shadow-[0_14px_36px_rgba(192,107,255,0.32)] sm:!h-10 sm:!px-4"
            onClick={() => window.open("https://payments.cashfree.com/forms/testt22", "_blank")}
          >
            Unlock Pro
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
