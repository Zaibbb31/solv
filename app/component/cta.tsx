"use client";

import Link from "next/link";
import GradientWaves from "@/components/GradientWaves";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronRightIcon } from "@hugeicons/core-free-icons";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-[580px] sm:min-h-[640px] py-16 sm:py-20 overflow-hidden bg-[#071A2E] flex items-center justify-center border-t border-[#B7873A]/15 scroll-mt-10"
    >
      {/* GradientWaves WebGL Background */}
      <div className="absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#071A2E"
          waveColor="#C89949"
          crestColor="#E0B669"
          backgroundColor="#071A2E"
          speed={0.35}
          amplitude={2.5}
          relief={1}
          lightAngle={120}
          mouseInteraction
          swellOnClick
          lightMode={false}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={64}
          zoom={1}
          height={5.5}
          fogDepth={15}
          sheen={0.4}
          brightness={1.1}
          opacity={1}
          grain={0.15}
          quality="medium"
          intro
          parallaxStrength={0.5}
          mouseStrength={0.6}
          paused={false}
        />
      </div>

      {/* Soft Vignettes for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E] via-transparent to-[#071A2E] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-black/25 pointer-events-none z-[1]" />

      {/* CTA Content Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 sm:px-10 flex flex-col items-center text-center">
        {/* Subtitle */}
        <span className="text-xs sm:text-[13px] font-sans font-medium uppercase tracking-[0.28em] text-[#E0B669] mb-4 sm:mb-5 drop-shadow-sm">
          GET STARTED TODAY
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[60px] font-normal leading-[1.1] tracking-tight text-[#FFFFFF] font-heading max-w-3xl mb-5 sm:mb-6">
          Move forward with a clearer plan
        </h2>

        {/* Supporting Copy */}
        <p className="text-[#E9E8E3]/85 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
          Tell us what you are working through. We will start by understanding your situation and identifying the most useful next step.
        </p>

        {/* Action Button */}
        <Link
          href="/contactus"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-lg bg-[#C89949] hover:bg-[#E0B669] text-[#071A2E] text-sm sm:text-base font-medium transition-all duration-200 shadow-xl shadow-black/40 group hover:shadow-[#C89949]/20 hover:scale-[1.02]"
        >
          <span>Contact SOLV</span>
          <HugeiconsIcon
            icon={ChevronRightIcon}
            size={16}
            strokeWidth={2.5}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}

