export default function Home() {
  const faqs = [
    {
      q: "How do I import my recruiter messages?",
      a: "Upload a CSV export from LinkedIn Recruiter or use our Chrome extension to sync messages automatically in real time."
    },
    {
      q: "What metrics does RecruiterIQ track?",
      a: "Response rates by industry, role, seniority, and message length. AI scores each message and highlights what drives replies."
    },
    {
      q: "Is my data private and secure?",
      a: "Yes. All data is encrypted at rest and in transit. We never share or sell your outreach data to third parties."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Recruiting Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Why Candidates{" "}
          <span className="text-[#58a6ff]">Ignore</span> Your Messages
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          RecruiterIQ analyzes your LinkedIn outreach, benchmarks response rates by industry and role, and gives you AI suggestions to write messages that actually get replies.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Analyzing — $12/mo
        </a>
        <p className="text-xs text-[#6e7681] mt-3">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited message tracking",
              "AI response rate analysis",
              "Industry & role benchmarks",
              "Message optimization suggestions",
              "CSV upload + Chrome extension",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] mt-20">
        © {new Date().getFullYear()} RecruiterIQ. All rights reserved.
      </footer>
    </main>
  );
}
