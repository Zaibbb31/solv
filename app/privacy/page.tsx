import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | SOLV",
  description:
    "Review SOLV's Privacy Policy regarding the collection, protection, and handling of personal data under applicable Indian data privacy regulations.",
  keywords: [
    "SOLV Privacy Policy",
    "Data Protection",
    "Privacy Practices SOLV",
    "Client Confidentiality",
    "Indian Data Privacy Compliance",
  ],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | SOLV",
    description:
      "Review SOLV's Privacy Policy regarding the collection, protection, and handling of personal data.",
    url: "https://solvpartners.in/privacy",
    siteName: "SOLV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SOLV",
    description:
      "Review SOLV's Privacy Policy regarding the collection, protection, and handling of personal data.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="relative w-full bg-[#071A2E] text-[#FFFFFF] selection:bg-[#C89949] selection:text-[#071A2E] overflow-x-clip min-h-screen flex flex-col justify-between">
      {/* Sticky Top Navbar */}
      <Navbar forceScrolled={true} />

      {/* Main Content */}
      <main className="flex-1 w-full pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B7873A]/30 bg-[#0a233d]/80 text-xs font-sans uppercase tracking-[0.24em] text-[#E0B669] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E0B669] animate-pulse" />
            <span>PRIVACY COMMITMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal tracking-tight text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-[#E0B669] font-normal mb-8">
            Your privacy and data protection are fundamental to our commitment to you
          </p>

          {/* Intro Card */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-8 mb-8 text-sm sm:text-base text-[#E9E8E3]/85 leading-relaxed">
            <p>
              <strong className="text-white">SOLV</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting any personal information that you may provide while using our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, as applicable in India.
            </p>
          </div>

          {/* Detailed Policy Sections */}
          <div className="space-y-6">
            {/* Section 1 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-white mb-1">Personal Information</h3>
                  <p>
                    When you fill out our contact form, subscribe to updates, or reach out for consultation, we may collect your name, email address, phone number, and any information voluntarily shared by you.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Automatic Data</h3>
                  <p>
                    We may collect certain non-personal information such as IP address, browser type, device details, and cookies for analytics and improving user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Use of Information
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed mb-3">
                We use your information to:
              </p>
              <ul className="space-y-2 text-sm sm:text-[15px] text-[#E9E8E3]/85 pl-5 list-disc marker:text-[#E0B669]">
                <li>Respond to your queries and provide legal services.</li>
                <li>Communicate with you regarding updates, scheduling, or legal notices.</li>
                <li>Improve our website&apos;s functionality and security.</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Disclosure of Information
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed mb-3">
                We do not sell, trade, or rent your personal data to third parties. Information may only be shared:
              </p>
              <ul className="space-y-2 text-sm sm:text-[15px] text-[#E9E8E3]/85 pl-5 list-disc marker:text-[#E0B669]">
                <li>With your consent.</li>
                <li>If required by law, court order, or regulatory authority.</li>
                <li>With trusted third-party service providers (such as website hosting/IT support) bound by confidentiality obligations.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Data Security
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                We adopt reasonable security measures to protect your information. However, no system is fully secure, and we cannot guarantee absolute data security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Cookies
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                Our website may use cookies to improve functionality and enhance user experience. You may disable cookies in your browser settings, though some features may not function properly.
              </p>
            </div>

            {/* Section 6 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Your Rights
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                You may request access to, correction of, or deletion of your personal data by contacting us at{" "}
                <a href="mailto:solvpartnersllp@gmail.com" className="text-[#E0B669] hover:underline font-medium">
                  solvpartnersllp@gmail.com
                </a>.
              </p>
            </div>

            {/* Section 7 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Changes to Privacy Policy
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                We may update this Privacy Policy periodically, and the revised version will be posted on this page with the updated date.
              </p>
            </div>

            {/* Section 8 - Contact */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/30 bg-[#0a233d]/70 backdrop-blur-md p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Contact
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed mb-4">
                For privacy-related concerns, please write to us at:
              </p>
              <div className="space-y-2 text-sm sm:text-[15px] text-[#E9E8E3]">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a href="mailto:solvpartnersllp@gmail.com" className="text-[#E0B669] hover:underline">
                    solvpartnersllp@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-white">Landline:</strong>{" "}
                  <a href="tel:01244892739" className="text-[#E0B669] hover:underline font-mono">
                    0124-4892739
                  </a>
                </p>
                <p>
                  <strong className="text-white">Address:</strong>{" "}
                  <span>6th Floor, M3M URBANA, Office space, 616A, Golf Course Extension Road, Sector 67, Gurugram, Haryana 122102</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="px-6 py-3 rounded-xl bg-[#C89949] hover:bg-[#E0B669] text-[#071A2E] font-semibold text-sm tracking-wide transition-all shadow-lg hover:shadow-[#C89949]/20"
                >
                  Return to Home
                </Link>
                <Link
                  href="/contactus"
                  className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all"
                >
                  Contact SOLV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
