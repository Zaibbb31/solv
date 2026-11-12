"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";

export default function PrivacyPage() {
  // Ensure the page always loads at the top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

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
            <span>CONFIDENTIALITY &amp; PRIVACY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-[#E0B669]/90 font-medium mb-10 pb-6 border-b border-white/10">
            Our commitment to strict client discretion, confidentiality, and data protection.
          </p>

          {/* Policy Document Card */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/40 text-sm sm:text-base text-[#E9E8E3]/85 leading-relaxed space-y-6">
            <h2 className="text-xl font-heading font-normal text-white">1. Confidentiality by Design</h2>
            <p>
              At SOLV, we treat all communications, enquiries, and discussions with complete professional discretion. Any information shared with us in connection with potential or active advisory matters is held under strict confidentiality standards.
            </p>

            <h2 className="text-xl font-heading font-normal text-white pt-4">2. Collection of Information</h2>
            <p>
              We only collect information voluntarily provided by visitors through our contact form, direct email, telephone inquiries, or formal engagement meetings. This may include your name, contact details, organization, and the general nature of your legal or advisory query.
            </p>

            <h2 className="text-xl font-heading font-normal text-white pt-4">3. Use of Information</h2>
            <p>
              Information collected is used solely to respond to your specific inquiries, evaluate potential conflicts of interest, and deliver contracted advisory services. We do not sell, rent, trade, or distribute your personal details to third parties for marketing purposes.
            </p>

            <h2 className="text-xl font-heading font-normal text-white pt-4">4. Security &amp; Data Protection</h2>
            <p>
              We implement industry-standard physical, electronic, and procedural safeguards to protect your personal and confidential data from unauthorized access, misuse, alteration, or disclosure.
            </p>

            <h2 className="text-xl font-heading font-normal text-white pt-4">5. Contact Information</h2>
            <p>
              For any questions regarding our privacy practices or data handling, please contact us directly at{" "}
              <a href="mailto:solvpartnersllp@gmail.com" className="text-[#E0B669] hover:underline">
                solvpartnersllp@gmail.com
              </a>{" "}
              or call our office at 0124-4892739.
            </p>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
