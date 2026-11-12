"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";

export default function DisclaimerPage() {
  // Ensure the page always loads at the top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleOpenPopup = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-disclaimer-modal"));
    }
  };

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
            <span>REGULATORY NOTICE &amp; DISCLAIMER</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal tracking-tight text-white mb-4">
            IMPORTANT NOTICE
          </h1>
          <p className="text-sm sm:text-base text-[#E0B669]/90 font-medium mb-10 pb-6 border-b border-white/10">
            Please review the following regulatory terms governing access to this website.
          </p>

          {/* Legal Document Card */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/40 text-sm sm:text-base text-[#E9E8E3]/85 leading-relaxed space-y-6">
            <p className="text-white font-medium text-base sm:text-lg">
              The information available on this website is intended solely for general informational purposes.
            </p>

            <p>
              In accordance with the professional and ethical standards governing the legal profession in India, this website is not intended to advertise, solicit or induce any person to engage professional services.
            </p>

            <div className="pt-2">
              <p className="font-semibold text-white mb-4">
                By proceeding to access this website, you acknowledge and confirm that:
              </p>

              <ol className="space-y-4 pl-1 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-[#E0B669] font-mono font-semibold text-sm mt-0.5 shrink-0">1.</span>
                  <span>
                    You are accessing this website voluntarily and on your own initiative, solely for your information.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E0B669] font-mono font-semibold text-sm mt-0.5 shrink-0">2.</span>
                  <span>
                    The contents of this website do not constitute legal, financial, tax, accounting or other professional advice, nor should they be relied upon as a substitute for advice based on the specific facts and circumstances of a matter.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E0B669] font-mono font-semibold text-sm mt-0.5 shrink-0">3.</span>
                  <span>
                    Accessing this website, browsing its contents or submitting an enquiry does not create an advocate-client relationship or any other professional or consultancy relationship with SOLV or any associated professional.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E0B669] font-mono font-semibold text-sm mt-0.5 shrink-0">4.</span>
                  <span>
                    Any professional engagement shall arise only upon acceptance of the matter and confirmation of the scope, terms and responsibilities through a separate engagement, as applicable.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E0B669] font-mono font-semibold text-sm mt-0.5 shrink-0">5.</span>
                  <span>
                    You are advised not to transmit confidential, privileged or sensitive documents or information through the website unless specifically requested through an appropriate channel.
                  </span>
                </li>
              </ol>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs sm:text-sm text-white/70 italic">
              By clicking <span className="text-[#E0B669] font-semibold">“I AGREE &amp; ENTER”</span> on the opening prompt, you acknowledge that you have read, understood, and consented to this notice.
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-xl bg-[#C89949] hover:bg-[#E0B669] text-[#071A2E] font-semibold text-sm tracking-wide transition-all shadow-lg hover:shadow-[#C89949]/20"
              >
                Return to Home
              </Link>
              <button
                type="button"
                onClick={handleOpenPopup}
                className="px-6 py-3 rounded-xl border border-[#B7873A]/40 bg-[#0a233d] hover:bg-[#071A2E] text-[#E0B669] hover:text-white font-medium text-sm transition-all cursor-pointer"
              >
                View Popup Notice
              </button>
              <Link
                href="/contactus"
                className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all"
              >
                Contact SOLV
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
