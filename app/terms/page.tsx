import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | SOLV",
  description:
    "Review the terms and conditions governing access to and use of SOLV's strategic advisory website, intellectual property, disclaimers, and legal jurisdiction.",
  keywords: [
    "SOLV Terms and Conditions",
    "Terms of Service SOLV",
    "Legal Framework",
    "No Attorney Client Relationship",
    "Governing Law Delhi Gurugram",
  ],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | SOLV",
    description:
      "Review the terms and conditions governing access to and use of SOLV's strategic advisory website.",
    url: "https://solvpartners.in/terms",
    siteName: "SOLV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | SOLV",
    description:
      "Review the terms and conditions governing access to and use of SOLV's strategic advisory website.",
  },
};

export default function TermsPage() {
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
            <span>LEGAL FRAMEWORK</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal tracking-tight text-white mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-base sm:text-lg text-[#E0B669] font-normal mb-8">
            Understanding our terms of service and legal framework
          </p>

          {/* Intro Card */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-8 mb-8 text-sm sm:text-base text-[#E9E8E3]/85 leading-relaxed">
            <p>
              Welcome to <strong className="text-white">SOLV</strong>&apos;s website. By accessing or using our website, you agree to comply with and be bound by the following Terms &amp; Conditions (&ldquo;T&amp;C&rdquo;). If you do not agree, please refrain from using our website.
            </p>
          </div>

          {/* Detailed Terms Sections */}
          <div className="space-y-6">
            {/* Section 1 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  No Attorney&ndash;Client Relationship
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                Use of this website or contacting us via forms/emails does not create an attorney-client relationship. A formal engagement is only established once SOLV issues a written engagement letter or agreement and requisite fees are paid.
              </p>
            </div>

            {/* Section 2 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Use of Website Content
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                All content provided is for general informational purposes only and does not constitute legal advice. You must not reproduce, distribute, or use our content without prior written permission.
              </p>
            </div>

            {/* Section 3 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  User Conduct
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                You agree not to misuse this website, including attempts to hack, spam, or post defamatory/infringing material.
              </p>
            </div>

            {/* Section 4 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Fees &amp; Payments
                </h2>
              </div>
              <div className="space-y-2.5 text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed pl-5 list-disc marker:text-[#E0B669]">
                <p>
                  Any fees paid towards consultation, retainership, or legal services are non-refundable, unless otherwise expressly agreed in writing by SOLV.
                </p>
                <p>
                  Fee structures are communicated transparently prior to engagement.
                </p>
                <p>
                  All consultation fees paid in advance are non-refundable, regardless of whether the client chooses to proceed further with engagement or not.
                </p>
                <p>
                  Fees paid towards drafting, litigation, compliance, advisory, or any other professional legal service are also non-refundable once work has commenced.
                </p>
                <p>
                  In certain cases where no work has been initiated and cancellation is requested in writing within 24 hours of payment, partial refunds may be considered at the sole discretion of SOLV.
                </p>
                <p>
                  Retainership or monthly engagement fees are payable in advance and non-refundable. If a client wishes to discontinue, they must provide written notice at least 15 days prior to the next billing cycle.
                </p>
                <p>
                  Any approved refund will be processed within 15–21 business days, through the same mode of payment used by the client.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Force Majeure / Unforeseen Circumstances
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                In rare cases where SOLV is unable to provide the agreed service due to unforeseen circumstances (such as advocate unavailability, jurisdictional restrictions, or regulatory prohibitions), an alternate arrangement or proportional refund may be offered at our discretion.
              </p>
            </div>

            {/* Section 6 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                We strive for accuracy but do not guarantee completeness or suitability of website content. SOLV shall not be liable for any loss, damage, or reliance caused by using this website.
              </p>
            </div>

            {/* Section 7 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Third-Party Links
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                This website may contain links to third-party sites. We are not responsible for the content, privacy, or reliability of such websites.
              </p>
            </div>

            {/* Section 8 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Intellectual Property
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                All trademarks, logos, designs, and content on this website are the exclusive property of SOLV. Unauthorized use is prohibited.
              </p>
            </div>

            {/* Section 9 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Governing Law &amp; Jurisdiction
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts at New Delhi / Gurugram, Haryana, India.
              </p>
            </div>

            {/* Section 10 */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/20 bg-[#0a233d]/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#C89949]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Amendments
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed">
                We may revise these T&amp;C at any time, and such changes will be effective immediately upon posting on this website.
              </p>
            </div>

            {/* Section 11 - Contact */}
            <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/30 bg-[#0a233d]/70 backdrop-blur-md p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#C89949]/20 border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-mono text-xs font-bold">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-normal text-white">
                  Contact
                </h2>
              </div>
              <p className="text-sm sm:text-[15px] text-[#E9E8E3]/85 leading-relaxed mb-4">
                For clarifications regarding these Terms &amp; Conditions, please contact us at:
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

