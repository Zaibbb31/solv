"use client";

import { useEffect, useState, useRef, type UIEvent } from "react";
import Image from "next/image";

const STORAGE_KEY = "solv_disclaimer_accepted";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the user has already accepted the disclaimer in this session
    try {
      const accepted = sessionStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  // When modal is open, prevent background scroll
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleAgree = () => {
    if (!isChecked) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // sessionStorage unavailable, proceed anyway
    }
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  const handleExit = () => {
    // Attempt to close the window, or redirect to a neutral external page
    if (typeof window !== "undefined") {
      try {
        window.close();
      } catch {
        // window.close() blocked by browser security
      }
      // Fallback: navigate away from the website
      window.location.href = "https://www.google.com";
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#040D18]/90 backdrop-blur-xl animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl h-[85vh] sm:h-[80vh] max-h-[680px] flex flex-col rounded-2xl sm:rounded-3xl bg-[#071A2E] border border-[#B7873A]/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden text-white font-sans">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#C89949]/10 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="relative z-10 px-5 sm:px-8 pt-5 sm:pt-7 pb-4 border-b border-white/10 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative h-7 sm:h-8 w-24 sm:w-28">
              <Image
                src="/logogoo.svg"
                alt="SOLV"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <span className="text-white/20">|</span>
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.22em] text-[#E0B669] uppercase font-semibold">
              DISCLAIMER
            </span>
          </div>

          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#B7873A]/15 border border-[#B7873A]/30 text-[#E0B669]">
            Regulatory Notice
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}
          className="relative z-10 flex-1 overflow-y-auto min-h-0 px-5 sm:px-8 py-5 text-left text-xs sm:text-[13.5px] text-[#E9E8E3]/85 leading-relaxed space-y-4 focus:outline-none custom-scrollbar"
        >
          <div className="border-b border-white/10 pb-3">
            <h2
              id="disclaimer-title"
              className="text-lg sm:text-xl font-heading font-normal text-white mb-1"
            >
              IMPORTANT NOTICE
            </h2>
            <p className="text-xs text-[#E0B669]/90 font-medium">
              Please review the following terms before proceeding to access this website.
            </p>
          </div>

          <p className="text-[#E9E8E3]">
            The information available on this website is intended solely for general informational purposes.
          </p>

          <p>
            In accordance with the professional and ethical standards governing the legal profession in India, this website is not intended to advertise, solicit or induce any person to engage professional services.
          </p>

          <p className="font-medium text-white pt-1">
            By proceeding to access this website, you acknowledge and confirm that:
          </p>

          <ol className="space-y-3 pl-1 list-none">
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono text-xs mt-0.5 shrink-0">1.</span>
              <span>
                You are accessing this website voluntarily and on your own initiative, solely for your information.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono text-xs mt-0.5 shrink-0">2.</span>
              <span>
                The contents of this website do not constitute legal, financial, tax, accounting or other professional advice, nor should they be relied upon as a substitute for advice based on the specific facts and circumstances of a matter.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono text-xs mt-0.5 shrink-0">3.</span>
              <span>
                Accessing this website, browsing its contents or submitting an enquiry does not create an advocate-client relationship or any other professional or consultancy relationship with SOLV or any associated professional.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono text-xs mt-0.5 shrink-0">4.</span>
              <span>
                Any professional engagement shall arise only upon acceptance of the matter and confirmation of the scope, terms and responsibilities through a separate engagement, as applicable.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono text-xs mt-0.5 shrink-0">5.</span>
              <span>
                You are advised not to transmit confidential, privileged or sensitive documents or information through the website unless specifically requested through an appropriate channel.
              </span>
            </li>
          </ol>

          <p className="pt-2 text-[12px] sm:text-xs text-white/70 italic border-t border-white/10">
            By clicking <span className="text-[#E0B669] font-semibold">“I AGREE &amp; ENTER”</span>, you acknowledge that you have read and understood this notice.
          </p>

          {/* User Confirmation Checkbox inside scroll area */}
          <div className="pt-3 pb-1 border-t border-white/10">
            <label className="flex items-start gap-3 p-3 rounded-xl bg-[#0a233d]/70 border border-[#B7873A]/30 hover:border-[#C89949]/60 cursor-pointer transition-colors group">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-[#B7873A] bg-[#071A2E] text-[#C89949] accent-[#C89949] focus:ring-[#C89949] cursor-pointer"
              />
              <span className="text-xs sm:text-[13px] text-white/90 group-hover:text-white select-none leading-snug">
                I have read, understood, and accept the terms of this regulatory notice and confirm I am accessing this website voluntarily.
              </span>
            </label>
          </div>
        </div>

        {/* Modal Footer with Checkbox status & Action Buttons */}
        <div className="relative z-10 px-5 sm:px-8 py-4 sm:py-5 border-t border-white/10 bg-[#061729]/95 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shrink-0">
          <div className="text-[11.5px] font-medium w-full sm:w-auto">
            {!isChecked ? (
              <span className="text-[#E0B669] flex items-center gap-1.5">
                <span className="animate-pulse">●</span>
                <span>Please tick the checkbox above to confirm</span>
              </span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span>✓</span>
                <span>Confirmed. You may now enter.</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Exit Button */}
            <button
              type="button"
              onClick={handleExit}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
            >
              EXIT
            </button>

            {/* Agree Button (unlocked once user ticks checkbox) */}
            <button
              type="button"
              onClick={handleAgree}
              disabled={!isChecked}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-lg ${
                isChecked
                  ? "bg-[#C89949] hover:bg-[#E0B669] text-[#071A2E] shadow-[#C89949]/30 hover:scale-[1.02]"
                  : "bg-white/10 text-white/40 cursor-not-allowed opacity-60"
              }`}
            >
              I AGREE &amp; ENTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

