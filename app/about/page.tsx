import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";
import FAQSection from "@/app/component/faq";
import CTASection from "@/app/component/cta";
import Lightfall from "@/components/Lightfall";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChevronRightIcon,
  ViewIcon,
  Layers01Icon,
  Compass01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: "About SOLV | A Considered Approach to Complex Decisions",
  description:
    "SOLV was founded on a simple idea: important decisions deserve more than a narrow or fragmented view. Strategic guidance across property, assets, succession, and business challenges.",
};

export default function AboutPage() {
  return (
    <div className="relative w-full bg-[#071A2E] text-[#FFFFFF] selection:bg-[#C89949] selection:text-[#071A2E] overflow-x-clip min-h-screen flex flex-col justify-between">
      {/* Sticky Fixed Navbar with Frosted Blur on non-hero pages */}
      <Navbar forceScrolled={true} />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* 
          ======================================================
          HERO SECTION (A Considered Approach to Complex Decisions)
          ======================================================
        */}
        <section className="relative w-full pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-12 border-b border-[#B7873A]/15">
          <div className="max-w-8xl mx-auto">
            {/* Top Typography Block */}
            <div className="flex flex-col items-start max-w-5xl mb-12 sm:mb-16 lg:mb-20">
              <span className="text-xs sm:text-[13px] font-sans font-medium uppercase tracking-[0.28em] text-[#E0B669] mb-4 sm:mb-6">
                ABOUT SOLV
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-normal leading-[1.06] tracking-tight text-[#FFFFFF] font-heading max-w-5xl mb-6 sm:mb-8">
                A considered approach to complex decisions.
              </h1>

              <div className="flex flex-col gap-4 sm:gap-5 text-[#E9E8E3]/85 text-lg sm:text-xl lg:text-[22px] leading-relaxed max-w-4xl font-normal">
                <p>
                  SOLV was founded on a simple idea: important decisions deserve more than a narrow or fragmented view. Property, assets, succession and business challenges often overlap, and looking at one part without the others can leave important questions unanswered.
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-[#E9E8E3]/75">
                  Our work is grounded in careful assessment, structured thinking and a practical understanding of the decisions individuals, families, asset owners and businesses face. We bring the important issues into focus so you can weigh your options clearly.
                </p>
              </div>
            </div>

            {/* Interactive Lightfall WebGL Canvas */}
            <div className="relative w-full h-[400px] sm:h-[520px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#B7873A]/30 shadow-2xl bg-[#071A2E]">
              <Lightfall
                colors={["#E0B669", "#FFFFFF", "#C89949"]}
                backgroundColor="#071A2E"
                speed={0.35}
                streakCount={6}
                streakWidth={1.2}
                streakLength={1.4}
                twinkle={0.3}
                backgroundGlow={0}
                headGlow={0.8}
                bloom={0.35}
                mouseInteraction
                holdToWarp
                intro={false}
                density={0.7}
                glow={1.2}
                depth={0.5}
                zoom={2.5}
                mouseStrength={0.4}
                mouseRadius={0.45}
                lens={0.5}
                fade={0}
                lightMode={false}
              />

              {/* Glassmorphic Badge Indicator */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#071A2E]/85 backdrop-blur-md border border-[#B7873A]/35 shadow-xl text-xs sm:text-sm font-sans tracking-wide text-[#E9E8E3] pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E0B669] animate-pulse" />
                <span className="text-[#E0B669] font-medium">Direct Partner Attention</span>
                <span className="text-white/30 hidden sm:inline">•</span>
                <span className="text-white/80 hidden sm:inline">Gurugram & Delhi NCR</span>
              </div>
            </div>
          </div>
        </section>

        {/* 
          =======================================================
          WHAT GUIDES US (OUR APPROACH)
          =======================================================
        */}
        <section className="relative w-full py-20 sm:py-28 px-6 sm:px-10 lg:px-12 bg-[#071A2E] border-b border-[#B7873A]/15">
          <div className="max-w-8xl mx-auto">
            {/* Header Block */}
            <div className="flex flex-col items-start max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs sm:text-[13px] font-sans font-medium uppercase tracking-[0.28em] text-[#E0B669] mb-3 sm:mb-4">
                OUR APPROACH
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] text-[#FFFFFF] font-heading tracking-tight mb-4">
                What guides us
              </h2>

              <p className="text-[#E9E8E3]/75 text-base sm:text-lg leading-relaxed font-normal">
                Our work is built on structured evaluation, foresight, and disciplined coordination — ensuring every decision is measured, defensible, and aligned with lasting continuity.
              </p>
            </div>

            {/* 4 Cards in a Single Row on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {/* 1. Clarity before conclusions */}
              <div className="rounded-2xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#C89949]/50 transition-colors group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#071A2E]/80 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-5 shadow-sm group-hover:border-[#C89949]/60 group-hover:scale-105 transition-all">
                    <HugeiconsIcon icon={ViewIcon} size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-normal text-white font-heading mb-2.5 leading-snug">
                    Clarity before conclusions
                  </h3>
                </div>
                <p className="text-[#E9E8E3]/75 text-sm leading-relaxed mt-2">
                  Understand the facts, priorities and uncertainties.
                </p>
              </div>

              {/* 2. Strategy before action */}
              <div className="rounded-2xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#C89949]/50 transition-colors group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#071A2E]/80 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-5 shadow-sm group-hover:border-[#C89949]/60 group-hover:scale-105 transition-all">
                    <HugeiconsIcon icon={Compass01Icon} size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-normal text-white font-heading mb-2.5 leading-snug">
                    Strategy before action
                  </h3>
                </div>
                <p className="text-[#E9E8E3]/75 text-sm leading-relaxed mt-2">
                  Evaluate options and implications.
                </p>
              </div>

              {/* 3. Long-term perspective */}
              <div className="rounded-2xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#C89949]/50 transition-colors group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#071A2E]/80 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-5 shadow-sm group-hover:border-[#C89949]/60 group-hover:scale-105 transition-all">
                    <HugeiconsIcon icon={Layers01Icon} size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-normal text-white font-heading mb-2.5 leading-snug">
                    Long-term perspective
                  </h3>
                </div>
                <p className="text-[#E9E8E3]/75 text-sm leading-relaxed mt-2">
                  Consider how today’s decisions may affect future ownership, continuity or business outcomes.
                </p>
              </div>

              {/* 4. Appropriate expertise */}
              <div className="rounded-2xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#C89949]/50 transition-colors group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#071A2E]/80 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-5 shadow-sm group-hover:border-[#C89949]/60 group-hover:scale-105 transition-all">
                    <HugeiconsIcon icon={UserGroupIcon} size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-normal text-white font-heading mb-2.5 leading-snug">
                    Appropriate expertise
                  </h3>
                </div>
                <p className="text-[#E9E8E3]/75 text-sm leading-relaxed mt-2">
                  Recognise when a lawyer, accountant, insolvency professional, valuer, tax adviser or another specialist is required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 
          =======================================================
          OUR TEAM / LEADERSHIP SECTION (3D FLIP CARDS)
          Positioned directly below "What Guides Us" / Approach
          =======================================================
        */}
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

        {/* 
          =======================================================
          FREQUENTLY ASKED QUESTIONS (FAQ) SECTION
          =======================================================
        */}
        <FAQSection />

        {/* 
          =======================================================
          CALL TO ACTION (CTA) SECTION
          =======================================================
        */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

