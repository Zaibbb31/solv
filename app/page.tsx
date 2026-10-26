"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";
import GhostFibers from "@/components/GhostFibers";
import GradientWaves from "@/components/GradientWaves";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChevronRightIcon,
  ViewIcon,
  Layers01Icon,
  Compass01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

interface HeroContent {
  headline: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
}

const heroModes: Record<"business" | "personal", HeroContent> = {
  business: {
    headline: "Navigate Complexity. Plan for Continuity.",
    description:
      "Strategic advisory for businesses, real-estate stakeholders and enterprises navigating restructuring, financial distress, succession and complex commercial challenges.",
    primaryButtonText: "Explore Business Solutions",
    primaryButtonHref: "#opportunity",
    secondaryButtonText: "For Individuals & Families",
  },
  personal: {
    headline: "Protect Your Interests. Plan Your Future.",
    description:
      "Considered support for individuals and families navigating property matters, inheritance, succession, asset planning and complex family-property concerns.",
    primaryButtonText: "Explore Personal & Family Solutions",
    primaryButtonHref: "#opportunity",
    secondaryButtonText: "For Businesses & Enterprises",
  },
};

const metrics = [
  { value: "$1.2B", label: "Capital deployed" },
  { value: "25+", label: "Years track record" },
  { value: "150+", label: "Strategic transactions" },
  { value: "98%", label: "Client retention" },
];

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  image?: string;
  tag: string;
}

const serviceCards: ServiceCard[] = [
  {
    number: "01",
    title: "Growth Strategy",
    description:
      "Find the biggest growth constraints, prioritize the right opportunities, and build a clearer path to scalable revenue.",
    tag: "Strategy",
  },
  {
    number: "02",
    title: "Property & Asset Advisory",
    description:
      "Advising developers, lenders, and portfolio owners through stalled developments, debt workouts, and strategic asset positioning.",
    image: "/service_real_estate.jpg",
    tag: "Real Estate",
  },
  {
    number: "03",
    title: "Restructuring & Turnaround",
    description:
      "Navigating financial distress, operational realignments, and multi-stakeholder negotiations with disciplined execution.",
    tag: "Enterprise",
  },
  {
    number: "04",
    title: "Succession & Continuity",
    description:
      "Discreet guidance for multi-generational wealth, inheritance transitions, and complex family-property matters.",
    tag: "Private Client",
  },
];

interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

const approachSteps: ApproachStep[] = [
  {
    number: "1",
    title: "Understand",
    description:
      "We begin by understanding your circumstances, concerns, priorities and objectives.",
  },
  {
    number: "2",
    title: "Assess",
    description:
      "We map the property, family, financial and regulatory issues involved.",
  },
  {
    number: "3",
    title: "Evaluate",
    description:
      "We lay out the available options and flag questions that need specialist advice.",
  },
  {
    number: "4",
    title: "Plan",
    description:
      "We help you agree a clear approach that fits your circumstances and objectives.",
  },
  {
    number: "5",
    title: "Navigate",
    description:
      "Where you would like us to, and within the agreed scope, we support the next steps and coordinate with the relevant professionals.",
  },
];

export default function Home() {
  const [mode, setMode] = useState<"business" | "personal">("business");
  const [rollState, setRollState] = useState<"idle" | "exiting" | "entering">("idle");
  const [isRolling, setIsRolling] = useState(false);

  // Scroll detection: fade in content once the blue background reaches the top of viewport
  const [contentFadeIn, setContentFadeIn] = useState(false);
  const nextSectionRef = useRef<HTMLElement>(null);

  // Horizontal scroll sticky pinning for Services section
  const servicesSectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Scroll detection for Why SOLV dual-column split reveal
  const whySolvSectionRef = useRef<HTMLElement>(null);
  const [whySolvProgress, setWhySolvProgress] = useState(0);

  // Scroll detection for Our Approach illuminated winding string
  const approachSectionRef = useRef<HTMLElement>(null);
  const [approachProgress, setApproachProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      // 1. About section fade-in check
      if (nextSectionRef.current) {
        const rect = nextSectionRef.current.getBoundingClientRect();
        if (rect.top <= 80) {
          setContentFadeIn(true);
        } else {
          setContentFadeIn(false);
        }
      }

      // 2. Services section horizontal scroll calculation (Desktop only)
      if (desktop && servicesSectionRef.current && trackRef.current) {
        const rect = servicesSectionRef.current.getBoundingClientRect();
        const totalScrollable = servicesSectionRef.current.offsetHeight - window.innerHeight;

        if (totalScrollable > 0) {
          const scrolled = -rect.top;
          const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));

          const trackWidth = trackRef.current.scrollWidth;
          const viewportWidth = window.innerWidth;
          const maxTranslate = Math.max(0, trackWidth - viewportWidth + 80);

          setHorizontalOffset(progress * maxTranslate);
        }
      } else {
        setHorizontalOffset(0);
      }

      // 3. Why SOLV dual-column split reveal calculation
      if (whySolvSectionRef.current) {
        const rect = whySolvSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Start splitting when top of section reaches 85% of screen height
        // Fully separated by the time it reaches 25% of screen height
        const startY = windowHeight * 0.85;
        const endY = windowHeight * 0.25;
        const progress = Math.min(1, Math.max(0, (startY - rect.top) / (startY - endY)));
        setWhySolvProgress(progress);
      }

      // 4. Approach section illuminated winding string calculation
      if (approachSectionRef.current) {
        const rect = approachSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalDistance = approachSectionRef.current.offsetHeight;
        const scrolled = windowHeight * 0.65 - rect.top;
        const progress = Math.min(1, Math.max(0, scrolled / totalDistance));
        setApproachProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    if (isRolling) return;
    setIsRolling(true);
    setRollState("exiting");

    setTimeout(() => {
      setMode((prev) => (prev === "business" ? "personal" : "business"));
      setRollState("entering");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setRollState("idle");
          setIsRolling(false);
        });
      });
    }, 220);
  };

  const current = heroModes[mode];

  // Dynamic vertical roll transition classes
  const rollClasses =
    rollState === "exiting"
      ? "-translate-y-7 opacity-0 blur-[2px] transition-all duration-200 ease-in"
      : rollState === "entering"
      ? "translate-y-7 opacity-0 blur-[2px] transition-none"
      : "translate-y-0 opacity-100 blur-0 transition-all duration-350 ease-out";

  return (
    <div className="relative w-full bg-[#071A2E] text-[#FFFFFF] selection:bg-[#C89949] selection:text-[#071A2E] overflow-x-clip">
      {/* Sticky Fixed Navbar (turns white with dark text on scroll) */}
      <Navbar />

      {/* 
        =======================================================
        HERO & ABOUT CURTAIN CONTAINER
        Encapsulates the Hero sticky hold so that once About
        scrolls past, the Hero unpins and scrolls away completely.
        =======================================================
      */}
      <div className="relative w-full">
        {/* HERO SECTION (Pinned Sticky at top) */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-10 flex flex-col justify-between bg-[#071A2E]">
        {/* GhostFibers Background with #071A2E Brand Navy */}
        <div className="absolute inset-0 z-0 bg-[#071A2E]">
          <GhostFibers
            glowColor="#E0B669"
            layers={3}
            twist={1.2}
            threads={72}
            fiberStyle="dots"
            depthOfField={0.85}
            hoverEffect="focus"
            intro
            mouseInteraction
            lineColor="#E0B669"
            secondaryColor="#C89949"
            gradient="depth"
            waves={1}
            volume={0.7}
            spread={1}
            scale={1}
            rotation={18}
            perspective={0.65}
            density={1}
            thickness={1}
            tips={0}
            foldGlow={1}
            speed={0.5}
            flow={0.4}
            rollSpeed={0.15}
            focusDepth={0}
            particles={0.5}
            sparkle={0.5}
            glow={0.8}
            brightness={1}
            vignette={0.3}
            grain={0.06}
            mouseStrength={1}
            pulseOnClick
            lightMode={false}
          />
        </div>

        {/* Subtle Gradient for Hero Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/85 via-[#071A2E]/40 to-transparent z-[1] pointer-events-none" />

        {/* Top Spacer for Navbar */}
        <div className="h-16 sm:h-20 w-full relative z-20" />

        {/* Hero Section Content & Metrics Unified Container */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-8xl w-full mx-auto px-6 sm:px-10 lg:px-12 pt-4 sm:pt-6 pb-8 sm:pb-12 translate-y-30 sm:translate-y-0">
          {/* Main Content */}
          <main className="max-w-2xl flex flex-col items-start gap-6 sm:gap-7 justify-center mb-12 sm:mb-14 lg:mb-16">
            {/* Animated vertical roll container */}
            <div className={`flex flex-col items-start gap-6 sm:gap-7 w-full ${rollClasses}`}>
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.04] tracking-tight text-[#FFFFFF] font-heading">
                {current.headline}
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[#E9E8E3] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                {current.description}
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-2">
                <Link
                  href={current.primaryButtonHref}
                  className="inline-flex items-center gap-2 rounded-md bg-[#C89949] hover:bg-[#E0B669] px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-[15px] font-medium text-[#071A2E] transition-all duration-150 shadow-lg shadow-[#071A2E]/50 group"
                >
                  <span>{current.primaryButtonText}</span>
                  <HugeiconsIcon
                    icon={ChevronRightIcon}
                    size={16}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>

                {/* Secondary button toggles vertical roll */}
                <button
                  type="button"
                  onClick={handleToggle}
                  disabled={isRolling}
                  className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-medium text-[#E9E8E3] hover:text-[#E0B669] transition-colors duration-150 group cursor-pointer focus:outline-none"
                  aria-label={`Switch view to ${current.secondaryButtonText}`}
                >
                  <span>{current.secondaryButtonText}</span>
                  <HugeiconsIcon
                    icon={ChevronRightIcon}
                    size={16}
                    strokeWidth={2}
                    className="text-[#C89949] transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </main>

          {/* Metrics / Stats Row */}
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-[#B7873A] pl-4 sm:pl-5"
                >
                  <div className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#FFFFFF] font-heading leading-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#E9E8E3]/80 font-normal tracking-wide mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 
        =======================================================
        SECTION DIRECTLY BELOW HERO (Introducing SOLV)
        Slides up over the pinned hero like a curtain.
        When this background reaches the top, the 3-liner
        and CTA fade in seamlessly.
        =======================================================
      */}
      <section
        ref={nextSectionRef}
        id="about"
        className="relative z-20 min-h-screen w-full bg-[#071A2E] text-white shadow-[0_-25px_60px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16"
      >
        <div
          className={`max-w-4xl w-full mx-auto flex flex-col items-center text-center py-24 sm:py-32 transition-all duration-1000 ease-out ${
            contentFadeIn
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12 pointer-events-none"
          }`}
        >
          {/* Centered 8-Pointed Star Icon */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="currentColor"
            className="w-8 h-8 sm:w-9 sm:h-9 text-[#E0B669] mb-8"
            aria-hidden="true"
          >
            <path d="M18 1 L19.3 14.8 L25.8 10.2 L21.2 16.7 L35 18 L21.2 19.3 L25.8 25.8 L19.3 21.2 L18 35 L16.7 21.2 L10.2 25.8 L14.8 19.3 L1 18 L14.8 16.7 L10.2 10.2 L16.7 14.8 Z" />
          </svg>

          {/* Large 3-Liner Editorial Statement in Instrument Serif */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-[1.3] sm:leading-[1.35] tracking-tight text-center text-[#E9E8E3]/90 font-heading max-w-4xl mx-auto mb-8 sm:mb-10">
            Every decision today shapes tomorrow.<br className="hidden sm:inline" />{" "}
            We bring clarity, perspective, and considered strategy to<br className="hidden sm:inline" />{" "}
            complex property, restructuring, and succession challenges.
          </h2>

          {/* Call to Action */}
          <div className="flex items-center justify-center">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-md bg-[#C89949] hover:bg-[#E0B669] px-6 py-3.5 text-sm sm:text-[15px] font-medium text-[#071A2E] transition-all duration-150 shadow-lg shadow-[#071A2E]/50 group cursor-pointer"
            >
              <span>Explore Our Services</span>
              <HugeiconsIcon
                icon={ChevronRightIcon}
                size={16}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
      </div>

      {/* 
        =======================================================
        OUR SERVICES (HORIZONTAL SCROLL PINNED ON DESKTOP,
        SINGLE COLUMN VERTICAL STACK ON MOBILE)
        =======================================================
      */}
      <section
        ref={servicesSectionRef}
        id="services"
        className="relative z-30 w-full bg-[#071A2E] text-white py-16 sm:py-24 lg:py-0 overflow-x-clip"
        style={{ height: isDesktop ? "300vh" : "auto" }}
      >
        <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen w-full overflow-hidden flex items-center bg-[#071A2E] z-30 px-6 sm:px-10 lg:px-0">
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 w-full lg:w-auto will-change-transform lg:transition-transform duration-75 ease-out max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:pl-20 lg:pr-24"
            style={
              isDesktop
                ? {
                    transform: `translateX(-${horizontalOffset}px)`,
                  }
                : undefined
            }
          >
            {/* Main Heading & Intro Content */}
            <div className="w-full lg:w-[500px] lg:shrink-0 flex flex-col items-start gap-4 sm:gap-5 mb-2 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B7873A]/30 bg-[#B7873A]/10 text-xs font-sans uppercase tracking-widest text-[#E0B669]">
                <span>Our Services</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-[1.08] text-[#FFFFFF] font-heading">
                Strategic support for growth-focused teams
              </h2>

              <p className="text-[#E9E8E3]/75 text-sm sm:text-base leading-relaxed">
                Tailored advisory and hands-on execution for enterprises and asset
                holders facing pivotal turning points.
              </p>

              <div className="hidden lg:flex items-center gap-2 text-xs font-sans text-[#B7873A] mt-2 tracking-wider uppercase">
                <span>Scroll to explore</span>
                <span className="animate-pulse">→</span>
              </div>
            </div>

            {/* Service Cards (Single Column Vertical Stack on Mobile, Horizontal Row on Desktop) */}
            {serviceCards.map((card) => (
              <div
                key={card.number}
                className="w-full lg:w-[440px] h-auto min-h-[340px] sm:min-h-[400px] lg:h-[520px] lg:shrink-0 rounded-2xl border border-[#B7873A]/25 bg-[#0a233d]/70 backdrop-blur-md p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#C89949]/50 transition-colors duration-300"
              >
                {/* Optional Background Image (Card 2) */}
                {card.image && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 440px"
                      className="object-cover opacity-35 group-hover:opacity-45 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E] via-[#071A2E]/80 to-transparent" />
                  </div>
                )}

                {/* Top Watermark Number & Tag */}
                <div className="relative z-10 flex items-start justify-between w-full">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white/20 group-hover:text-[#E0B669]/40 font-heading transition-colors duration-300 select-none">
                    {card.number}
                  </div>
                  <span className="text-[11px] font-sans tracking-widest text-[#B7873A] uppercase px-3 py-1 rounded-full border border-[#B7873A]/25 bg-[#071A2E]/60 backdrop-blur-sm">
                    {card.tag}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 flex flex-col items-start gap-3 mt-8 sm:mt-12 lg:mt-0">
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#FFFFFF] font-heading leading-tight group-hover:text-[#E0B669] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#E9E8E3]/75 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        =======================================================
        WHY SOLV SECTION (DUAL-COLUMN SMOOTH SPLIT REVEAL)
        Left & right columns start centered next to each other.
        As the user scrolls down, the columns smoothly separate
        outwards to the left and right, revealing the central 
        portrait image in the middle with a seamless transition.
        =======================================================
      */}
      <section
        ref={whySolvSectionRef}
        id="why-solv"
        className="relative z-30 w-full bg-[#071A2E] text-white py-24 sm:py-32 lg:py-36 px-6 sm:px-10 lg:px-12 overflow-x-clip"
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
          {/* Header Content */}
          <div className="flex flex-col items-center text-center max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#B7873A]/30 bg-[#B7873A]/10 text-xs font-sans uppercase tracking-widest text-[#E0B669] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89949]" />
              <span>Why SOLV</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] text-[#FFFFFF] font-heading tracking-tight mb-4">
              Because Every Decision Has a Bigger Picture
            </h2>

            <p className="text-[#E9E8E3]/75 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
              Every significant decision carries financial, commercial, and personal consequences. When problems are addressed in isolation, the bigger picture gets lost. SOLV brings joined-up clarity and structured purpose.
            </p>
          </div>

          {/* Interactive Split Columns Container with Center Reveal */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-0 relative">
            {/* Left Column (2 Cards) - slides left on scroll */}
            <div
              className="flex flex-col gap-5 sm:gap-6 w-full max-w-md lg:w-[360px] xl:w-[400px] transition-transform duration-300 ease-out will-change-transform z-10"
              style={
                isDesktop
                  ? {
                      transform: `translateX(-${whySolvProgress * 28}px)`,
                    }
                  : undefined
              }
            >
              {/* Card 1 */}
              <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/70 backdrop-blur-md p-6 sm:p-8 flex flex-col items-start relative overflow-hidden group hover:border-[#C89949]/50 transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#071A2E]/80 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-5 shadow-sm">
                  <HugeiconsIcon icon={ViewIcon} size={20} strokeWidth={2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#FFFFFF] font-heading leading-tight mb-2 group-hover:text-[#E0B669] transition-colors duration-300">
                  See Beyond the Immediate
                </h3>
                <p className="text-[#E9E8E3]/75 text-sm sm:text-[15px] leading-relaxed">
                  Understand wider circumstances, interdependent assets, and long-term consequences before committing to a path.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/70 backdrop-blur-md p-6 sm:p-8 flex flex-col items-start relative overflow-hidden group hover:border-[#C89949]/50 transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#071A2E]/80 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-5 shadow-sm">
                  <HugeiconsIcon icon={Layers01Icon} size={20} strokeWidth={2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#FFFFFF] font-heading leading-tight mb-2 group-hover:text-[#E0B669] transition-colors duration-300">
                  Bring Complexity into Focus
                </h3>
                <p className="text-[#E9E8E3]/75 text-sm sm:text-[15px] leading-relaxed">
                  Organise disparate information, identify hidden gaps, and frame the pivotal questions that demand clear answers.
                </p>
              </div>
            </div>

            {/* Center Portrait Image Card - revealed as columns separate */}
            <div
              className="relative shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#B7873A]/30 shadow-2xl transition-all duration-300 ease-out will-change-transform z-20 my-4 lg:my-0"
              style={
                isDesktop
                  ? {
                      width: `${whySolvProgress * 300}px`,
                      height: "440px",
                      opacity: Math.min(1, whySolvProgress * 1.3),
                      transform: `scale(${0.9 + whySolvProgress * 0.1})`,
                      marginLeft: `${whySolvProgress * 20}px`,
                      marginRight: `${whySolvProgress * 20}px`,
                    }
                  : {
                      width: "100%",
                      maxWidth: "340px",
                      height: "360px",
                      opacity: 1,
                    }
              }
            >
              <div className="relative w-full h-full min-w-[280px]">
                <Image
                  src="/why_solv_portrait.jpg"
                  alt="Strategic Advisory Leadership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-5 left-4 right-4 text-center">
                  <span className="text-[11px] font-sans tracking-widest text-[#E0B669] uppercase px-3 py-1 rounded-full border border-[#B7873A]/30 bg-[#071A2E]/80 backdrop-blur-sm whitespace-nowrap">
                    One Strategy. Complete Resolution.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (2 Cards) - slides right on scroll */}
            <div
              className="flex flex-col gap-5 sm:gap-6 w-full max-w-md lg:w-[360px] xl:w-[400px] transition-transform duration-300 ease-out will-change-transform z-10"
              style={
                isDesktop
                  ? {
                      transform: `translateX(${whySolvProgress * 28}px)`,
                    }
                  : undefined
              }
            >
              {/* Card 3 */}
              <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/70 backdrop-blur-md p-6 sm:p-8 flex flex-col items-start relative overflow-hidden group hover:border-[#C89949]/50 transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#071A2E]/80 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-5 shadow-sm">
                  <HugeiconsIcon icon={Compass01Icon} size={20} strokeWidth={2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#FFFFFF] font-heading leading-tight mb-2 group-hover:text-[#E0B669] transition-colors duration-300">
                  Turn Uncertainty into Direction
                </h3>
                <p className="text-[#E9E8E3]/75 text-sm sm:text-[15px] leading-relaxed">
                  Compare viable options objectively and build a structured, actionable way forward tailored to your objectives.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/70 backdrop-blur-md p-6 sm:p-8 flex flex-col items-start relative overflow-hidden group hover:border-[#C89949]/50 transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#071A2E]/80 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-5 shadow-sm">
                  <HugeiconsIcon icon={UserGroupIcon} size={20} strokeWidth={2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#FFFFFF] font-heading leading-tight mb-2 group-hover:text-[#E0B669] transition-colors duration-300">
                  Connect Qualified Expertise
                </h3>
                <p className="text-[#E9E8E3]/75 text-sm sm:text-[15px] leading-relaxed">
                  Coordinate seamlessly with qualified legal, property, and tax professionals when specialist input is needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================
        OUR APPROACH SECTION
        Features sticky pinned left overview and 5 steps on the 
        right with a winding sinusoidal string line that gains 
        opacity & draws from top to bottom as user scrolls.
        =======================================================
      */}
      <section
        ref={approachSectionRef}
        id="approach"
        className="relative z-30 w-full bg-[#071A2E] text-white py-8 sm:py-16 px-6 sm:px-10 lg:px-12 overflow-x-clip"
      > 
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Sticky Pinned Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 xl:top-32 flex flex-col items-start gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-normal leading-[1.08] text-[#FFFFFF] font-heading">
              Thoughtful Assessment.<br />
              Informed Decisions.
            </h2>

            <p className="text-[#E9E8E3] text-base sm:text-lg leading-relaxed max-w-lg font-normal">
              We listen first, organise relevant information, identify issues and
              options, help shape a practical strategy and where appropriate
              coordinate with qualified professionals to support next steps.
            </p>

            <div className="pt-2">
              <Link
                href="#opportunity"
                className="inline-flex items-center gap-2 rounded-md bg-[#C89949] hover:bg-[#E0B669] px-6 py-3.5 text-sm sm:text-[15px] font-medium text-[#071A2E] transition-all duration-150 shadow-lg shadow-[#071A2E]/50 group cursor-pointer"
              >
                <span>Discuss Your Situation</span>
                <HugeiconsIcon
                  icon={ChevronRightIcon}
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Sequential Steps with Winding String Line */}
          <div className="lg:col-span-7 relative">
            {/* Elegant Winding String SVG passing directly through the serial number badges */}
            <div className="absolute left-0 top-4 bottom-6 w-9 pointer-events-none">
              <svg
                viewBox="0 0 36 1000"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  <linearGradient id="goldStringGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#E0B669" />
                    <stop offset="50%" stopColor="#C89949" />
                    <stop offset="100%" stopColor="#B7873A" />
                  </linearGradient>
                </defs>

                {/* Subtle background curly guide path */}
                <path
                  d="M 18 18 C 34 80, 34 130, 18 134 C 2 138, 2 188, 18 250 C 34 315, 34 365, 18 375 C 2 385, 2 435, 18 500 C 34 565, 34 615, 18 625 C 2 635, 2 685, 18 750 C 34 815, 34 865, 18 865 C 2 875, 2 925, 18 980"
                  fill="none"
                  stroke="#B7873A"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                />

                {/* Illuminated progressive curly path */}
                <path
                  d="M 18 18 C 34 80, 34 130, 18 134 C 2 138, 2 188, 18 250 C 34 315, 34 365, 18 375 C 2 385, 2 435, 18 500 C 34 565, 34 615, 18 625 C 2 635, 2 685, 18 750 C 34 815, 34 865, 18 865 C 2 875, 2 925, 18 980"
                  fill="none"
                  stroke="url(#goldStringGradient)"
                  strokeWidth="2.5"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={1 - approachProgress}
                  style={{
                    opacity: Math.max(0.2, approachProgress),
                    filter: "drop-shadow(0 0 6px rgba(200, 153, 73, 0.45))",
                    transition: "stroke-dashoffset 0.12s ease-out, opacity 0.2s ease-out",
                  }}
                />
              </svg>
            </div>

            {/* Steps List */}
            <div className="flex flex-col gap-16 sm:gap-20">
              {approachSteps.map((step, index) => {
                const stepThreshold = index / (approachSteps.length - 1);
                const isActive = approachProgress >= stepThreshold * 0.85;

                return (
                  <div
                    key={step.number}
                    className="flex items-start gap-5 sm:gap-7 group transition-all duration-300"
                  >
                    {/* Serial number badge centered directly on the string, to the left of text */}
                    <div
                      className={`relative z-10 shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-sans font-medium transition-all duration-500 ${
                        isActive
                          ? "bg-[#C89949] text-[#071A2E] font-semibold ring-4 ring-[#C89949]/20 shadow-lg shadow-[#C89949]/30 scale-105"
                          : "bg-[#071A2E] text-[#E0B669]/70 border border-[#B7873A]/40"
                      }`}
                    >
                      0{step.number}
                    </div>

                    {/* Step Card / Content */}
                    <div className="flex flex-col items-start gap-2 pt-0.5">
                      <h3
                        className={`text-2xl sm:text-3xl font-normal font-heading tracking-tight transition-colors duration-300 ${
                          isActive ? "text-[#FFFFFF]" : "text-[#FFFFFF]/75"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`text-base sm:text-lg leading-relaxed max-w-xl transition-colors duration-300 ${
                          isActive ? "text-[#E9E8E3]" : "text-[#E9E8E3]/65"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 
        =======================================================
        CALL TO ACTION (CTA) SECTION WITH GRADIENT WAVES
        =======================================================
      */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] py-16 sm:py-20 overflow-hidden bg-[#071A2E] flex items-center justify-center border-t border-[#B7873A]/15">
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
            href="/contact"
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
