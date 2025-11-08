import React from 'react';
import Navbar from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f7f3ff] to-[#f0eaff] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#d1bcff]/65 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#ffdff9]/60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-[3rem] bg-[#b798ff]/55 blur-2xl" />
      </div>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        <strong>Last updated:</strong> September 22, 2025
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1) Controller</h2>
      <p className="text-lg mb-4">
        Supacharge TS-TET is the data controller.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2) Data we collect</h2>
      <p className="text-lg mb-4">
        <strong>Account:</strong> name, email, phone (optional), password hash
      </p>
      <p className="text-lg mb-4">
        <strong>Usage:</strong> pages viewed, test attempts, device data, IP, event logs
      </p>
      <p className="text-lg mb-4">
        <strong>Payments:</strong> status and identifiers from payment partners (no full card data stored)
      </p>
      <p className="text-lg mb-4">
        <strong>Support:</strong> messages and attachments
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3) Purposes</h2>
      <p className="text-lg mb-4">
        Provide and improve the service, run tests and save progress, detect abuse and sharing, handle payments, send service notices, comply with law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4) Cookies</h2>
      <p className="text-lg mb-4">
        Used for login, preferences, analytics, and abuse prevention. Blocking cookies may break features.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5) Sharing with vendors</h2>
      <p className="text-lg mb-4">
        Hosting, analytics, support, and payments providers process data under our instructions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6) Security</h2>
      <p className="text-lg mb-4">
        Reasonable technical and organizational measures. No system is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7) Retention</h2>
      <p className="text-lg mb-4">
        Kept as needed for the purposes above, then deleted or anonymized unless law requires longer.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8) Your rights</h2>
      <p className="text-lg mb-4">
        Request access, correction, deletion, or portability where applicable. Contact support@supacharge.me
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9) Children</h2>
      <p className="text-lg mb-4">
        Service is for Adults only. We do not knowingly collect data from children under 13.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10) International transfers</h2>
      <p className="text-lg mb-4">
        Data may be processed outside your country with appropriate safeguards.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">11) Third-party links</h2>
      <p className="text-lg mb-4">
        External sites have their own policies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">12) Changes</h2>
      <p className="text-lg mb-4">
        We may update this policy. Updates apply from the posted date.
      </p>
      </div>
    </div>
  );
}