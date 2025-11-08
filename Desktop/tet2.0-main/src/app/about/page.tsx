import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f7f3ff] to-[#f0eaff] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#d1bcff]/65 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#ffdff9]/60 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-[3rem] bg-[#b798ff]/55 blur-2xl" />
      </div>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
      <h1 className="text-4xl font-bold mb-6">About Supacharge TS-TET</h1>
      <p className="text-lg mb-4">
        <strong>Last updated:</strong> September 22, 2025
      </p>
      <p className="text-lg mb-4">
        Supacharge TS-TET helps Telangana teachers prepare efficiently with smart practice, exam-style mocks, and clear explanations.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">What we offer</h2>
      <ul className="list-disc pl-6 text-lg space-y-2">
        <li>Smart Practice Mode with instant feedback</li>
        <li>TS-TET-like mock tests</li>
        <li>Analytics</li>
        <li>Smart Feedback & Insights</li>
        <li>Curated eBooks</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Independence</h2>
      <p className="text-lg mb-4">
        Supacharge TS-TET is not affiliated with the Government of Telangana or the TS-TET exam body.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
      <p className="text-lg">
        support@supacharge.me
      </p>
      </div>
    </div>
  );
}
