"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "solv_disclaimer_accepted";

export default function DisclaimerModal() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check acceptance status on mount and trigger popup after 1.5 - 2 seconds
  useEffect(() => {
    setMounted(true);

    let timer: ReturnType<typeof setTimeout> | null = null;

    try {
      // Check if URL has #disclaimer-popup hash for quick preview/testing
      const hasHash = typeof window !== "undefined" && window.location.hash === "#disclaimer-popup";
      const accepted = sessionStorage.getItem(STORAGE_KEY);

      if (!accepted || hasHash) {
        // Delay popup appearance by 1.8 seconds (1.5 - 2 sec range) after page load
        timer = setTimeout(() => {
          setIsOpen(true);
        }, 1800);
      }
    } catch {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
    }

    // Allow re-opening via custom window event anywhere in app (instant when explicitly requested)
    const handleOpenModal = () => {
      setIsChecked(false);
      setIsOpen(true);
    };

    window.addEventListener("open-disclaimer-modal", handleOpenModal);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("open-disclaimer-modal", handleOpenModal);
    };
  }, []);

  // Lock background body scroll when modal is active
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Track scroll position to guide the user towards the bottom checkbox
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
    if (isAtBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
    }
  }, [hasScrolledToBottom]);

  const handleAgree = () => {
    if (!isChecked) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Storage unavailable, proceed anyway
    }
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  const handleExit = () => {
    if (typeof window !== "undefined") {
      try {
        if (window.history.length > 1) {
          window.history.back();
          return;
        }
      } catch {
        // Fallback navigation
      }
      window.location.href = "https://www.google.com";
    }
  };

  // Do not render if not mounted, not open, or user is already viewing the dedicated disclaimer page
  if (!mounted || !isOpen || pathname === "/disclaimer") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#040D18]/90 backdrop-blur-xl transition-all duration-300 animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl max-h-[90dvh] sm:max-h-[82vh] h-auto flex flex-col rounded-2xl sm:rounded-3xl bg-[#071A2E] border border-[#B7873A]/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden text-white font-sans transform transition-transform duration-300 scale-100">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#C89949]/12 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="relative z-10 px-5 sm:px-8 pt-4 sm:pt-6 pb-3.5 sm:pb-4 border-b border-white/10 flex items-center justify-between gap-4 shrink-0 bg-[#071A2E]/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/logogoo.svg"
              alt="SOLV Logo"
              width={120}
              height={96}
              priority
              className="h-7 sm:h-8 w-auto object-contain"
            />
            <span className="text-white/20 select-none">|</span>
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.22em] text-[#E0B669] uppercase font-semibold">
              DISCLAIMER
            </span>
          </div>

          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#B7873A]/15 border border-[#B7873A]/30 text-[#E0B669] shrink-0">
            Regulatory Notice
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          tabIndex={0}
          style={{
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y",
          }}
          className="relative z-10 flex-1 overflow-y-auto min-h-[220px] max-h-[58vh] px-5 sm:px-8 py-5 text-left text-xs sm:text-[13.5px] text-[#E9E8E3]/85 leading-relaxed space-y-4 focus:outline-none custom-scrollbar"
        >
          <div className="border-b border-white/10 pb-3">
            <h2
              id="disclaimer-title"
              className="text-lg sm:text-xl font-heading font-normal text-white mb-1"
            >
              IMPORTANT NOTICE
            </h2>
            <p className="text-xs text-[#E0B669]/90 font-medium">
              Please review the following regulatory terms before proceeding to access this website.
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

          <ol className="space-y-3.5 pl-1 list-none">
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono font-semibold text-xs mt-0.5 shrink-0">1.</span>
              <span>
                You are accessing this website voluntarily and on your own initiative, solely for your information.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono font-semibold text-xs mt-0.5 shrink-0">2.</span>
              <span>
                The contents of this website do not constitute legal, financial, tax, accounting or other professional advice, nor should they be relied upon as a substitute for advice based on the specific facts and circumstances of a matter.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono font-semibold text-xs mt-0.5 shrink-0">3.</span>
              <span>
                Accessing this website, browsing its contents or submitting an enquiry does not create an advocate-client relationship or any other professional or consultancy relationship with SOLV or any associated professional.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono font-semibold text-xs mt-0.5 shrink-0">4.</span>
              <span>
                Any professional engagement shall arise only upon acceptance of the matter and confirmation of the scope, terms and responsibilities through a separate engagement, as applicable.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#E0B669] font-mono font-semibold text-xs mt-0.5 shrink-0">5.</span>
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
            <label className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer select-none group ${
              isChecked
                ? "bg-[#0a233d] border-[#C89949] shadow-md shadow-[#C89949]/10"
                : "bg-[#0a233d]/70 border-[#B7873A]/30 hover:border-[#C89949]/60 hover:bg-[#0a233d]"
            }`}>
              <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="sr-only"
                  aria-label="Acknowledge and accept terms"
                />
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-150 ${
                  isChecked
                    ? "bg-[#C89949] border-[#E0B669] text-[#071A2E]"
                    : "bg-[#071A2E] border-[#B7873A]/60 group-hover:border-[#E0B669]"
                }`}>
                  {isChecked && (
                    <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-xs sm:text-[13px] text-white/90 group-hover:text-white leading-snug">
                I have read, understood, and accept the terms of this regulatory notice and confirm I am accessing this website voluntarily.
              </span>
            </label>
          </div>
        </div>

        {/* Modal Footer with Status Indicator & Action Buttons */}
        <div className="relative z-10 px-5 sm:px-8 py-3.5 sm:py-4 border-t border-white/10 bg-[#061729]/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shrink-0">
          <div className="text-[11.5px] font-medium w-full sm:w-auto">
            {!isChecked ? (
              <span className="text-[#E0B669] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E0B669] animate-pulse" />
                <span>Please tick the confirmation checkbox above to proceed</span>
              </span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="text-sm">✓</span>
                <span>Confirmed. You may now enter.</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Exit Button */}
            <button
              type="button"
              onClick={handleExit}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer active:scale-95"
            >
              EXIT
            </button>

            {/* Agree & Enter Button (Enabled when checkbox is ticked) */}
            <button
              type="button"
              onClick={handleAgree}
              disabled={!isChecked}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg ${
                isChecked
                  ? "bg-[#C89949] hover:bg-[#E0B669] text-[#071A2E] shadow-[#C89949]/30 hover:scale-[1.02] active:scale-98 cursor-pointer ring-2 ring-[#E0B669]/40"
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
