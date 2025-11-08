import { Suspense } from "react";
import Image from "next/image";

import LoginForm from "./LoginForm";
import NavbarNoLogin from "@/components/NavbarNoLogin";

const LoginPage = () => (
  <>
    <NavbarNoLogin />
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-[#f7f3ff] to-[#f0eaff] px-4 pt-24 pb-16">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-[#d1bcff]/60 blur-3xl" />
      <div className="absolute -bottom-24 -right-12 h-80 w-80 rounded-full bg-[#ffdff9]/50 blur-3xl" />
    </div>

    <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_30px_80px_rgba(134,70,255,0.18)] backdrop-blur-xl">
      <div className="mb-8 text-center">
        <div className="mb-2 text-xs font-black uppercase tracking-[0.5em] text-[#8f4eff]/80">
          <span className="bg-gradient-to-r from-yellow-700 via-yellow-500 to-purple-600 bg-clip-text text-transparent font-black">
            Pro Users
          </span>
        </div>
        <p className="text-lg font-medium bg-gradient-to-r from-[#6a3bff] via-[#8646ff] to-[#c06bff] bg-clip-text text-transparent">
          Login using your pro credentials
        </p>
      </div>

      <Suspense fallback={<div className="py-8 text-center text-sm text-slate-500">Loading login form...</div>}>
        <LoginForm />
      </Suspense>

      <div className="mt-8 text-center justify-center flex flex-col items-center">
        <p className="text-xs text-black">Need Help?</p>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B916304102415&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 mx-auto block"
        >
          <Image
            src="/Whatsapp Icons (2).png"
            alt="WhatsApp"
            width={48}
            height={48}
            className="h-12 w-12"
          />
        </a>
        <a
          href="mailto:support@supacharge.me"
          className="mt-2 pt-4 mx-auto block text-sm text-[#8f4eff] hover:underline"
        >
          support@supacharge.me
        </a>
      </div>
    </div>
  </div>
  </>
);

export default LoginPage;
