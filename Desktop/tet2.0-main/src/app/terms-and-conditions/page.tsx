import React from 'react';
import Navbar from "@/components/Navbar";

export default function TermsAndConditionsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f7f3ff] to-[#f0eaff] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#d1bcff]/65 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#ffdff9]/60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-[3rem] bg-[#b798ff]/55 blur-2xl" />
      </div>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
      <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-lg mb-4">
        <strong>Validity of pro access:</strong> 1 Year
      </p>
      <p className="text-lg mb-4">
        <strong>Last updated:</strong> September 22, 2025
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1) Acceptance</h2>
      <p className="text-lg mb-4">
        Using Supacharge TS-TET means you agree to these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2) Accounts</h2>
      <p className="text-lg mb-4">
        Keep credentials confidential. You are responsible for all activity on your account.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3) How we work</h2>
      <p className="text-lg mb-4">
        Unlimited access means individual use under our Fair Usage Policy.
        Account sharing is not allowed. Abuse can lead to suspension or ban.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4) Fair Usage</h2>
      <p className="text-lg mb-4">
        We may enforce technical limits (device caps, session limits, rate limits) to prevent misuse, scraping, or automation.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5) License and IP</h2>
      <p className="text-lg mb-4">
        Personal, non-transferable, revocable license to use the service. No copying, redistribution, mirroring, reverse engineering, or derivative works.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6) Payments</h2>
      <p className="text-lg mb-4">
        Pricing may change. Taxes may apply. See the Refund Policy for refund rules.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7) Prohibited Uses</h2>
      <p className="text-lg mb-4">
        No unlawful activity, infringement, interference, or attempts to bypass security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8) Service Changes</h2>
      <p className="text-lg mb-4">
        Features may change or be discontinued without notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9) Warranties and Liability</h2>
      <p className="text-lg mb-4">
        Service is provided as is. We disclaim all warranties to the maximum extent allowed by law. We are not liable for indirect or consequential losses.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10) Indemnity</h2>
      <p className="text-lg mb-4">
        You agree to indemnify us for claims arising from your misuse of the service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">11) Governing Law</h2>
      <p className="text-lg mb-4">
        Indian law governs. Exclusive jurisdiction: Hyderabad, Telangana.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">12) Changes</h2>
      <p className="text-lg mb-4">
        We may update these Terms. Continued use means acceptance of updates.
      </p>
      </div>
    </div>
  );
}
