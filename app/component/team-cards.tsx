import Image from "next/image";

export default function TeamCardsSection() {
  return (
    <section className="w-full bg-[#071A2E] py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-12 relative overflow-hidden border-b border-[#B7873A]/15">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C89949]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Header Block with Eyebrow Pill */}
        <div className="relative max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B7873A]/30 bg-[#0a233d]/80 text-xs font-sans uppercase tracking-[0.24em] text-[#E0B669] mb-4 sm:mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E0B669] animate-pulse" />
            <span>OUR LEADERSHIP</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.08] text-white">
            <span className="text-white/60">The people behind </span>
            <span className="text-[#E0B669] font-medium">the strategy</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#E9E8E3]/75 max-w-2xl mx-auto mt-4 sm:mt-5 font-normal leading-relaxed">
            Direct partner engagement on every engagement. Seasoned advisors bringing cross-disciplinary precision to property, legacy, and corporate restructurings.
          </p>
        </div>

        {/* Team Flip Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 justify-center">
          {/* Partner 1: Rohit Singhania */}
          <div className="flex flex-col group flip-card-perspective w-full">
            <div className="flip-card-inner aspect-[4/5] rounded-[28px] sm:rounded-[34px] md:rounded-[40px] cursor-pointer">
              {/* Front Side */}
              <div className="flip-card-front rounded-[28px] sm:rounded-[34px] md:rounded-[40px] bg-[#0a233d]/80 border border-[#B7873A]/30 overflow-hidden flex items-center justify-center shadow-2xl group-hover:border-[#C89949]/70 group-hover:shadow-[0_25px_50px_rgba(200,153,73,0.15)] transition-all duration-500">
                {/* Placeholder illustration in case image loads */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gradient-to-br from-[#0a233d] to-[#071A2E]">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#B7873A]/30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="64" height="64" rx="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="52" cy="28" r="3" fill="currentColor" />
                    <path d="M14 56L30 38C32.5 35.5 36.5 35.5 39 38L52 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44 46L49 40C51.5 37.5 55.5 37.5 58 40L66 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <Image
                  alt="Rohit Singhania"
                  src="/partner_rohit.jpg"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Gradient Overlay for Mood */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/90 via-transparent to-transparent pointer-events-none" />

                {/* Flip Hint Pill */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-[#071A2E]/85 backdrop-blur-md text-[#E0B669] text-[10px] sm:text-[11px] font-sans font-medium tracking-wider px-3.5 py-1.5 rounded-full border border-[#B7873A]/40 shadow-lg group-hover:opacity-0 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5">
                  <span>Hover to flip</span>
                  <span className="text-xs">↺</span>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back rounded-[28px] sm:rounded-[34px] md:rounded-[40px] bg-gradient-to-br from-[#0a233d] to-[#071A2E] text-white p-6 sm:p-7 md:p-8 flex flex-col justify-center overflow-hidden border border-[#B7873A]/40 shadow-[0_25px_50px_rgba(0,0,0,0.6)]">
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#E0B669] font-medium mb-3">
                  Senior Managing Partner
                </span>
                <p className="font-sans text-[#E9E8E3]/90 text-xs sm:text-[13px] md:text-[13.5px] lg:text-[14px] leading-relaxed font-normal">
                  With over two decades advising family enterprises, institutional stakeholders, and boards across India, Rohit specializes in high-stakes property resolutions, commercial title due diligence, and generational asset transitions. Having navigated complex restructuring proceedings under IBC alongside private trusts, he ensures mandates balance immediate legal clarity with multi-decade family harmony and asset continuity.
                </p>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#E0B669]/90 font-medium">
                  <span>Focus: Real Estate & IBC Restructuring</span>
                  <span>20+ Years</span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 sm:mt-5 text-left">
              <h3 className="font-heading text-xl sm:text-2xl md:text-[26px] text-white font-normal tracking-tight">
                Rohit Singhania
              </h3>
              <p className="font-sans text-[#E0B669] text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium tracking-wide">
                Senior Managing Partner • Real Estate & Restructuring
              </p>
            </div>
          </div>

          {/* Partner 2: Ananya Varma */}
          <div className="flex flex-col group flip-card-perspective w-full">
            <div className="flip-card-inner aspect-[4/5] rounded-[28px] sm:rounded-[34px] md:rounded-[40px] cursor-pointer">
              {/* Front Side */}
              <div className="flip-card-front rounded-[28px] sm:rounded-[34px] md:rounded-[40px] bg-[#0a233d]/80 border border-[#B7873A]/30 overflow-hidden flex items-center justify-center shadow-2xl group-hover:border-[#C89949]/70 group-hover:shadow-[0_25px_50px_rgba(200,153,73,0.15)] transition-all duration-500">
                {/* Placeholder illustration */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gradient-to-br from-[#0a233d] to-[#071A2E]">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#B7873A]/30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="64" height="64" rx="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="52" cy="28" r="3" fill="currentColor" />
                    <path d="M14 56L30 38C32.5 35.5 36.5 35.5 39 38L52 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M44 46L49 40C51.5 37.5 55.5 37.5 58 40L66 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <Image
                  alt="Ananya Varma"
                  src="/partner_ananya.jpg"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/90 via-transparent to-transparent pointer-events-none" />

                {/* Flip Hint Pill */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-[#071A2E]/85 backdrop-blur-md text-[#E0B669] text-[10px] sm:text-[11px] font-sans font-medium tracking-wider px-3.5 py-1.5 rounded-full border border-[#B7873A]/40 shadow-lg group-hover:opacity-0 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5">
                  <span>Hover to flip</span>
                  <span className="text-xs">↺</span>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back rounded-[28px] sm:rounded-[34px] md:rounded-[40px] bg-gradient-to-br from-[#0a233d] to-[#071A2E] text-white p-6 sm:p-7 md:p-8 flex flex-col justify-center overflow-hidden border border-[#B7873A]/40 shadow-[0_25px_50px_rgba(0,0,0,0.6)]">
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#E0B669] font-medium mb-3">
                  Partner • Private Wealth & Succession
                </span>
                <p className="font-sans text-[#E9E8E3]/90 text-xs sm:text-[13px] md:text-[13.5px] lg:text-[14px] leading-relaxed font-normal">
                  Ananya leads SOLV&apos;s Succession, Estate Planning, and NRI Advisory practice. Drawing on 18 years of advisory governance, cross-border inheritance mapping, and senior citizen asset protection, she structures solutions that preempt dispute and eliminate ambiguity. Her work brings calm, objective clarity to multi-jurisdiction assets and complex family trusts across India and overseas.
                </p>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#E0B669]/90 font-medium">
                  <span>Focus: Succession, NRI & Asset Mapping</span>
                  <span>18+ Years</span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 sm:mt-5 text-left">
              <h3 className="font-heading text-xl sm:text-2xl md:text-[26px] text-white font-normal tracking-tight">
                Ananya Varma
              </h3>
              <p className="font-sans text-[#E0B669] text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium tracking-wide">
                Partner • Wealth, Succession & NRI Advisory
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

