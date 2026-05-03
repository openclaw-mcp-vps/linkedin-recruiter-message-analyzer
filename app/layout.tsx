import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecruiterIQ – Analyze LinkedIn Recruiter Message Effectiveness",
  description: "Track recruiter outreach performance, analyze response rates by industry and role, and get AI-powered message optimization suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="86a81fcf-2467-4550-a501-e40b4fe2a235"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
