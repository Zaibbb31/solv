"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";
import FAQSection from "@/app/component/faq";
import CTASection from "@/app/component/cta";
import GhostFibers from "@/components/GhostFibers";
import CrystalizedBall from "@/components/CrystalizedBall";
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
    headline: "One strategy. Complete Resolution",
    description:
      "SOLV brings clarity to complex business, property and personal matters, helping businesses, individuals and families understand their options and identify a considered way forward.",
    primaryButtonText: "Explore Business Solutions",
    primaryButtonHref: "#services",
    secondaryButtonText: "For Individuals & Families",
  },
  personal: {
    headline: "Protect Your Interests. Plan Your Future.",
    description:
      "Considered support for individuals and families navigating property matters, inheritance, succession, asset planning and complex family-property concerns.",
    primaryButtonText: "Explore Personal & Family Solutions",
    primaryButtonHref: "#services",
    secondaryButtonText: "For Businesses & Enterprises",
  },
};

interface CtaPopupContent {
  title: string;
  description: string;
}

const ctaPopups: Record<"business" | "personal", CtaPopupContent> = {
  business: {
    title: "Navigate Complexity. Plan for Continuity.",
    description:
      "Strategic advisory for businesses, real-estate stakeholders and enterprises navigating restructuring, financial distress, succession and complex commercial challenges",
  },
  personal: {
    title: "Protect Your Interests. Plan Your Future.",
    description:
      "Considered support for individuals and families navigating property matters, inheritance, succession, asset planning and complex family-property concerns",
  },
};

const metrics = [
  { value: "Partner-Led", label: "Direct senior attention on every matter" },
  { value: "Cross-Domain", label: "Real estate, debt & succession integrated" },
  { value: "Total Discretion", label: "Rigorous confidentiality for sensitive assets" },
  { value: "Objective Strategy", label: "Considered roadmaps with expert coordination" },
];

const sectorLogos = [
  {
    name: "Commercial Real Estate",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22V18h6v4" />
        <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    name: "Enterprise Restructuring",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Family Property & Succession",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    name: "Private Capital & Family Offices",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className}>
        <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
        <path d="M2 9h20M10 3l2 6 2-6M7.5 9l4.5 12 4.5-12" />
      </svg>
    ),
  },
  {
    name: "Insolvency & Debt Resolution",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className}>
        <path d="M12 3v18M6 8l-3 6h6L6 8zm12 0l-3 6h6l-3-6z" />
        <path d="M4 3h16" />
      </svg>
    ),
  },
  {
    name: "NRI Asset Advisory",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

interface ServiceCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  buttonText: string;
  image?: string;
  tag: string;
}

const serviceCards: ServiceCard[] = [
  {
    number: "01",
    title: "Property & Real Estate Advisory",
    subtitle: "Make property decisions with greater clarity.",
    description:
      "Property is often a family's most significant asset. Buying, transferring, registering or protecting it calls for careful attention to documentation, ownership, costs and the applicable regulations.",
    points: [
      "Guidance for homebuyers, from shortlisting to registration",
      "Guidance on applicable regulations, including RERA where relevant",
      "Acquisition and transaction advisory",
      "Title and ownership due diligence",
      "Transfers by sale, gift, release or settlement",
      "Documentation and registration procedures",
      "Mutation and post-transfer formalities",
      "Stamp duty and transfer costs, worked through with your tax adviser",
      "Early identification of property risks",
      "Assessment of stalled or distressed real estate projects",
    ],
    buttonText: "Explore Property Advisory",
    image: "/service_real_estate.jpg",
    tag: "Real Estate",
  },
  {
    number: "02",
    title: "Business Restructuring & Insolvency Advisory",
    subtitle: "When the pressure is on, clarity matters most.",
    description:
      "Financial stress rarely announces itself. Cash flow tightens, lenders become anxious, a project stalls, and every option suddenly feels urgent. The earlier you get an objective view, the more choices you usually have. We help promoters, businesses, investors, homebuyer groups and other stakeholders understand where they stand, test their options and plan a realistic way forward, whether that is a turnaround, a negotiated settlement or a formal process.",
    points: [
      "Independent assessment of financial and commercial position",
      "Restructuring options and business viability reviews",
      "Support with lender and creditor negotiations, including one-time settlements",
      "Assessment of stalled and distressed real estate projects",
      "Guidance for stakeholders in insolvency processes under the IBC",
      "Coordination with registered insolvency professionals, advocates and valuers",
    ],
    buttonText: "Explore Restructuring Advisory",
    tag: "Enterprise",
  },
  {
    number: "03",
    title: "Wealth, Assets & Inheritance",
    subtitle: "Know what you own. Protect what matters.",
    description:
      "Over a lifetime, assets build up in many forms and in many names: property, investments, joint holdings and nominations made years ago. When it is time to plan or to inherit, the gaps show, and they can have lasting consequences for families and future generations. We help you understand your assets and the records behind them, the inheritance questions they raise, and the options available to protect your interests.",
    points: [
      "Inheritance guidance under applicable personal laws",
      "Property and asset transfer documentation",
      "Asset ownership and documentation reviews",
      "Family asset and property mapping",
      "Nomination and joint-holding reviews",
      "Gift and release arrangements",
      "Assessment of inherited and jointly held assets",
      "Identification of potential ownership and succession risks",
      "Coordination with legal, accounting and tax professionals where required",
    ],
    buttonText: "Explore Wealth, Assets & Inheritance",
    tag: "Private Client",
  },
  {
    number: "04",
    title: "Succession & Legacy Planning",
    subtitle: "Planning for the Next Chapter.",
    description:
      "Succession planning is not only about what happens after someone passes away. It is about the decisions you make during your lifetime: who owns and manages your assets, how they are transferred, and how your wishes are recorded. Whether you are planning the succession of family property, documenting your wishes, transferring assets during your lifetime or balancing the interests of different family members, each decision needs careful thought about the law, your circumstances and the long term. We approach succession and legacy planning with a focus on clarity and continuity. We help you understand what is involved, weigh your options and put the right arrangements in place.",
    points: [
      "Succession planning for individuals and families",
      "Identification of succession risks and potential complications",
      "Wills and estate planning, coordinated with your advocate",
      "Intergenerational asset-transfer planning",
      "Private family trust planning and coordination",
      "Guardianship planning for dependants",
      "Digital asset succession planning",
      "Coordination of property and succession documents",
      "Periodic review of succession arrangements as circumstances change",
    ],
    buttonText: "Explore Succession Planning",
    tag: "Legacy & Continuity",
  },
  {
    number: "05",
    title: "Senior Citizen & Retirement Advisory",
    subtitle: "Security, Dignity and Clarity in the Years That Matter.",
    description:
      "Retirement brings new priorities. Decisions about property, family assets, financial responsibilities and future arrangements matter more than ever as you plan for long-term security and peace of mind. For many senior citizens, these concerns go beyond money. They may involve protecting property built over a lifetime, understanding your rights in family assets, transferring property, planning succession, or dealing with situations where family arrangements become complicated. We help senior citizens deal with these matters calmly and confidently. We take time to understand your circumstances, explain the legal and procedural points that apply, and help you choose the options that best protect your interests.",
    points: [
      "Property and asset-related advisory for senior citizens",
      "Guidance on family property and transfer-related concerns",
      "Rights and remedies under senior citizen legislation, including maintenance",
      "Assessment of concerns about maintenance, property ownership or family arrangements",
      "Identification of appropriate avenues for addressing property-related concerns",
      "Retirement-related property and succession planning",
      "Property transfer and documentation considerations",
      "Wills and inheritance planning, coordinated with your advocate",
    ],
    buttonText: "Explore Senior Citizen Advisory",
    tag: "Senior Client",
  },
  {
    number: "06",
    title: "Family Property & Dispute Resolution",
    subtitle: "When family interests become complicated.",
    description:
      "Property and inheritance matters can become particularly complex when personal relationships intersect with questions of ownership, financial interests and competing expectations. Disagreements may arise over inherited property, jointly owned assets, the validity of property transfers, the distribution of an estate or the rights of different family members. What may begin as a difference in understanding can develop into a dispute involving documentation, succession rights, possession or the interpretation of legal instruments. These situations require a careful assessment of the facts, the interests involved and the legal framework applicable to the matter. We start by understanding the underlying issue and the rights and interests of everyone involved, then identify the most sensible path to resolution, whether that is preventive planning, a constructive conversation or formal dispute resolution.",
    points: [
      "Preliminary assessment of family property disputes",
      "Inheritance and succession-related disagreements",
      "Assessment of ownership and transfer-related concerns",
      "Evaluation of potential negotiation and resolution options",
      "Guidance on appropriate dispute-resolution mechanisms",
      "Coordination with qualified legal professionals where representation or other regulated legal services are required",
    ],
    buttonText: "Explore Dispute Resolution",
    tag: "Resolution",
  },
  {
    number: "07",
    title: "Life-Stage Planning",
    subtitle: "Aligning today's decisions with tomorrow's priorities.",
    description:
      "Each stage of life brings different responsibilities and priorities. A young professional may be buying a first home; an established professional may be protecting accumulated assets; someone nearing retirement may be focused on security and succession. These transitions involve decisions about property, asset transfers, inheritance and family responsibilities that affect your long-term interests. Seeing how they connect helps you make better choices and avoid surprises later. We take a structured, forward-looking approach. We help you set priorities, understand the legal and practical implications of major decisions, and bring clarity to choices about property, assets and succession.",
    points: [
      "Goal-oriented planning and decision support",
      "Property and asset planning for each stage of life",
      "Assessment of major financial and family decisions",
      "Joining up property, succession and other planning needs",
      "Identifying situations that require specialist financial, tax, legal or other professional advice",
    ],
    buttonText: "Explore Life-Stage Planning",
    tag: "Strategy",
  },
  {
    number: "08",
    title: "NRI Property & Asset Advisory",
    subtitle: "India-based assets. A clearer way to manage the details.",
    description:
      "Structured support for NRIs navigating India-based property, ownership documentation, transfers and inheritance questions. For non-resident Indians, property and asset matters in India can involve distance, documentation, coordination and different timelines. A structured view can help clarify what is known, what remains outstanding and which professionals or authorities may need to be involved. Our work begins by understanding the objective, organising available information, identifying open questions and outlining possible next steps. The scope is confirmed for each engagement.",
    points: [
      "Property ownership and record-related questions",
      "Purchase, sale, gift or transfer considerations",
      "Inheritance and succession-related matters",
      "Document and information checklists",
      "Coordination with local professionals",
      "Identifying questions requiring legal, tax or regulatory advice",
    ],
    buttonText: "Explore NRI Advisory",
    tag: "Global & NRI",
  },
  {
    number: "09",
    title: "Business & Family Enterprise Succession",
    subtitle: "Continuity for the business you have built.",
    description:
      "A family business carries more than a balance sheet. It carries relationships, expectations and often several generations of effort. Handing it over, whether to the next generation, a partner or a new owner, is one of the most important decisions a founder makes. We help founders and families plan ownership transitions, roles and continuity early, so that both the business and the family come through the change in good shape.",
    points: [
      "Ownership transition and continuity planning",
      "Mapping family-enterprise interests and expectations",
      "Succession planning for closely held businesses and partnerships",
      "Separating business and family assets",
      "Aligning business succession with personal succession plans",
      "Coordination with advocates, chartered accountants and valuers",
    ],
    buttonText: "Explore Family Enterprise Succession",
    tag: "Enterprise",
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
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Hero CTA popup state & relocation
  const [ctaPopupOpen, setCtaPopupOpen] = useState(false);
  const ctaTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCtaMouseEnter = () => {
    if (ctaTimeoutRef.current) clearTimeout(ctaTimeoutRef.current);
    setCtaPopupOpen(true);
  };

  const handleCtaMouseLeave = () => {
    ctaTimeoutRef.current = setTimeout(() => {
      setCtaPopupOpen(false);
    }, 250);
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isTouchOrMobile = window.innerWidth < 768 || window.matchMedia("(hover: none)").matches;
    if (isTouchOrMobile && !ctaPopupOpen) {
      e.preventDefault();
      setCtaPopupOpen(true);
      if (ctaTimeoutRef.current) clearTimeout(ctaTimeoutRef.current);
      ctaTimeoutRef.current = setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = "#services";
        }
        setCtaPopupOpen(false);
      }, 950);
      return;
    }

    e.preventDefault();
    if (ctaTimeoutRef.current) clearTimeout(ctaTimeoutRef.current);
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#services";
    }
    setCtaPopupOpen(false);
  };

  const handlePopupClick = () => {
    if (ctaTimeoutRef.current) clearTimeout(ctaTimeoutRef.current);
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#services";
    }
    setCtaPopupOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (!ctaPopupOpen) return;
      const target = e.target as HTMLElement;
      if (!target.closest(".hero-cta-container")) {
        setCtaPopupOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("touchstart", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("touchstart", handleOutsideClick);
      if (ctaTimeoutRef.current) clearTimeout(ctaTimeoutRef.current);
    };
  }, [ctaPopupOpen]);

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
  const whySolvCardsRef = useRef<HTMLDivElement>(null);
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
      const targetCards = whySolvCardsRef.current || whySolvSectionRef.current;
      if (targetCards) {
        const rect = targetCards.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardCenter = rect.top + rect.height / 2;
        // Start revealing with the scroll as the cards enter the lower viewport (95% of screen height)
        const startY = windowHeight * 0.95;
        // Fully done when the cards reach the middle of the screen (50% of screen height)
        const endY = windowHeight * 0.5;
        const progress = Math.min(1, Math.max(0, (startY - cardCenter) / (startY - endY)));
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
      {/* Sticky Fixed Navbar (backdrop blur on scroll below hero) */}
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
        <div id="hero" className="sticky top-0 h-screen w-full overflow-hidden z-10 flex flex-col justify-between bg-[#071A2E]">
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
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-8xl w-full mx-auto px-6 sm:px-10 lg:px-12 pt-2 sm:pt-6 pb-6 sm:pb-12 translate-y-14 sm:translate-y-0">
          {/* Main Content */}
          <main className="max-w-2xl flex flex-col items-start gap-5 sm:gap-7 justify-center mb-8 sm:mb-14 lg:mb-16">
            {/* Animated vertical roll container */}
            <div className={`flex flex-col items-start gap-6 sm:gap-7 w-full ${rollClasses}`}>
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.04] tracking-tight text-[#FFFFFF] font-heading">
                {current.headline}
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[#E9E8E3] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                {current.description}
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-2">
                {/* Main CTA with Popup on Hover / Touch */}
                <div
                  className="relative hero-cta-container"
                  onMouseEnter={handleCtaMouseEnter}
                  onMouseLeave={handleCtaMouseLeave}
                >
                  <Link
                    href={current.primaryButtonHref}
                    onClick={handleCtaClick}
                    className="inline-flex items-center gap-2 rounded-md bg-[#C89949] hover:bg-[#E0B669] px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-[15px] font-medium text-[#071A2E] transition-all duration-150 shadow-lg shadow-[#071A2E]/50 group cursor-pointer"
                  >
                    <span>{current.primaryButtonText}</span>
                    <HugeiconsIcon
                      icon={ChevronRightIcon}
                      size={16}
                      strokeWidth={2.5}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>

                  {/* Popup Content Below CTA Overlapping the Metrics */}
                  <div
                    onClick={handlePopupClick}
                    className={`absolute top-full left-0 mt-3 sm:mt-4 w-[calc(100vw-3rem)] sm:w-[440px] md:w-[480px] max-w-lg rounded-2xl bg-[#061729]/95 backdrop-blur-xl border border-[#C89949]/50 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-5 sm:p-6 z-40 transition-all duration-300 ease-out cursor-pointer group/popup ${
                      ctaPopupOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {/* Header badge & relocation cue */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] font-mono tracking-widest text-[#E0B669] uppercase bg-[#C89949]/15 border border-[#C89949]/30 px-2.5 py-0.5 rounded-full">
                        {mode === "business" ? "Business Advisory" : "Individual & Family"}
                      </span>
                      <span className="text-xs text-[#E9E8E3]/60 flex items-center gap-1 group-hover/popup:text-[#E0B669] transition-colors">
                        <span>Relocate to Services</span>
                        <span className="inline-block transition-transform group-hover/popup:translate-x-0.5">→</span>
                      </span>
                    </div>

                    {/* Headline */}
                    <h4 className="text-base sm:text-lg font-medium text-white font-heading leading-snug mb-2">
                      {ctaPopups[mode].title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#E9E8E3]/85 leading-relaxed font-normal">
                      {ctaPopups[mode].description}
                    </p>

                    {/* Footer bar */}
                    <div className="flex items-center justify-between pt-3 mt-3.5 border-t border-white/10 text-xs">
                      <span className="text-[#C89949] font-medium flex items-center gap-1.5 group-hover/popup:text-[#E0B669]">
                        <span>Explore all 9 advisory practices</span>
                        <span>→</span>
                      </span>
                      <span className="text-[11px] text-[#E9E8E3]/50">Tap / Click to view</span>
                    </div>
                  </div>
                </div>

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {metrics.map((item) => (
                <div
                  key={item.value}
                  className="border-l-2 border-[#B7873A] pl-4 sm:pl-5 group"
                >
                  <div className="text-lg sm:text-xl lg:text-[22px] font-normal text-[#FFFFFF] font-heading leading-tight group-hover:text-[#E0B669] transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#E9E8E3]/75 font-normal tracking-wide mt-1.5 leading-snug">
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

          {/* Editorial Headline: Big and Bold */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.2] sm:leading-[1.25] tracking-tight text-center text-[#FFFFFF] font-heading max-w-4xl mx-auto mb-6">
            Every decision today shapes tomorrow.
          </h2>

          {/* Supporting Statement: Justified and Smaller */}
          <p className="text-base sm:text-lg md:text-xl text-[#E9E8E3]/85 text-justify [text-align-last:center] max-w-2xl mx-auto leading-relaxed font-normal mb-8 sm:mb-10">
            We bring clarity, perspective, and considered strategy to complex property, restructuring, and succession challenges.
          </p>

          {/* Call to Action */}
          <div className="flex items-center justify-center">
            <Link
              href="/services"
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
        OUR STORY & IMPACT (JUST ABOVE SERVICES SECTION)
        =======================================================
      */}
      <section
        id="story"
        className="relative z-20 w-full bg-[#071A2E] text-white py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-12 border-b border-[#B7873A]/15 overflow-hidden"
      >
        <div className="max-w-8xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
            {/* Left Column: Narrative & Story */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B7873A]/30 bg-[#0a233d]/80 text-xs font-sans uppercase tracking-[0.2em] text-[#E0B669] mb-6 shadow-sm">
                <span className="w-4 h-4 rounded-full bg-[#E0B669]/20 text-[#E0B669] flex items-center justify-center text-xs font-bold leading-none">+</span>
                <span>OUR STORY</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] tracking-tight text-[#FFFFFF] font-heading mb-6 sm:mb-8">
                We built the firm we could not hire
              </h2>

              {/* Body Paragraph */}
              <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed text-[#E9E8E3]/80 font-normal mb-8 sm:mb-10 max-w-xl">
                SOLV started after years of watching capable leaders, asset owners and families receive fragmented advice—property in one silo, restructuring in another, and succession planning left unresolved. Important decisions demand more than a narrow view. We built a firm designed to connect the legal, financial, and strategic dots into a single, actionable path forward.
              </p>

              {/* CTA Button */}
              <Link
                href="/services"
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

            {/* Right Column: 2x2 Metric Cards & Bottom Logos Carousel */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 w-full">
              {/* 2x2 Grid of Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Metric 1 */}
                <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#C89949]/50 transition-all duration-300 group shadow-lg shadow-black/20">
                  <div className="text-4xl sm:text-5xl lg:text-[54px] font-normal text-white font-heading tracking-tight mb-4 flex items-baseline gap-1">
                    <span>200</span>
                    <span className="text-[#E0B669] font-light">+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9E8E3]/75 leading-relaxed">
                    Mandates delivered across commercial real estate, corporate restructuring and high-value succession.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#C89949]/50 transition-all duration-300 group shadow-lg shadow-black/20">
                  <div className="text-4xl sm:text-5xl lg:text-[54px] font-normal text-white font-heading tracking-tight mb-4 flex items-baseline gap-1">
                    <span>15</span>
                    <span className="text-[#E0B669] font-light">+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9E8E3]/75 leading-relaxed">
                    Years advising leadership teams, asset owners and families through high-stakes resolutions.
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#C89949]/50 transition-all duration-300 group shadow-lg shadow-black/20">
                  <div className="text-4xl sm:text-5xl lg:text-[54px] font-normal text-white font-heading tracking-tight mb-4 flex items-baseline gap-1">
                    <span>100</span>
                    <span className="text-[#E0B669] font-light">+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9E8E3]/75 leading-relaxed">
                    Boards, founders and family offices advised across Gurugram, Delhi NCR and key markets.
                  </p>
                </div>

                {/* Metric 4 */}
                <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#C89949]/50 transition-all duration-300 group shadow-lg shadow-black/20">
                  <div className="text-4xl sm:text-5xl lg:text-[54px] font-normal text-white font-heading tracking-tight mb-4 flex items-baseline gap-1">
                    <span>92</span>
                    <span className="text-[#E0B669] font-light">%</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9E8E3]/75 leading-relaxed">
                    Of clients extend past the initial term, and nine in ten return for subsequent strategic challenges.
                  </p>
                </div>
              </div>

              {/* Bottom Right: Sector Badges & Infinite Logos Carousel */}
              <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/70 backdrop-blur-md p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 overflow-hidden shadow-lg shadow-black/20">
                {/* Fixed Sector Title Pill */}
                <div className="shrink-0 px-4 py-2.5 rounded-xl bg-[#071A2E] border border-[#B7873A]/40 text-xs sm:text-[13px] font-heading font-medium text-[#E0B669] whitespace-nowrap shadow-inner flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E0B669] animate-pulse" />
                  <span>Trusted across six sectors</span>
                </div>

                {/* Marquee Ticker */}
                <div className="relative w-full overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
                    {[...sectorLogos, ...sectorLogos].map((sector, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#071A2E]/70 border border-white/10 hover:border-[#C89949]/40 text-white/80 hover:text-[#E0B669] transition-all whitespace-nowrap text-xs sm:text-sm shrink-0 shadow-sm"
                      >
                        <sector.icon className="w-4 h-4 text-[#E0B669]" />
                        <span className="font-medium tracking-wide">{sector.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        style={{ height: isDesktop ? "520vh" : "auto" }}
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
            {serviceCards.map((card) => {
              const isHovered = activeCard === card.number;
              return (
                <div
                  key={card.number}
                  onMouseEnter={() => setActiveCard(card.number)}
                  onMouseLeave={() => setActiveCard((prev) => (prev === card.number ? null : prev))}
                  onClick={() => setActiveCard((prev) => (prev === card.number ? null : card.number))}
                  className="w-full lg:w-[460px] h-[540px] sm:h-[580px] lg:h-[600px] lg:shrink-0 rounded-2xl border border-[#B7873A]/25 bg-[#0a233d]/70 backdrop-blur-md p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-[#C89949] transition-all duration-300 shadow-xl cursor-pointer"
                >
                  {/* Optional Background Image (Card 1) */}
                  {card.image && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 460px"
                        className="object-cover opacity-30 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E] via-[#071A2E]/85 to-transparent" />
                    </div>
                  )}

                  {/* RESTING STATE: Clean Minimal Editorial View */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* Top Watermark Number & Tag */}
                    <div className="flex items-start justify-between w-full">
                      <div className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white/20 group-hover:text-[#E0B669]/40 font-heading transition-colors duration-300 select-none">
                        {card.number}
                      </div>
                      <span className="text-[11px] font-sans tracking-widest text-[#B7873A] uppercase px-3 py-1 rounded-full border border-[#B7873A]/25 bg-[#071A2E]/80 backdrop-blur-sm">
                        {card.tag}
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div className="flex flex-col items-start gap-2.5 mt-8 sm:mt-12 lg:mt-0">
                      <h3 className="text-2xl sm:text-[28px] font-normal text-[#FFFFFF] font-heading leading-tight group-hover:text-[#E0B669] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-sm font-medium text-[#E0B669] italic">
                        {card.subtitle}
                      </p>
                      <p className="text-[#E9E8E3]/70 text-xs sm:text-sm leading-relaxed line-clamp-3 mt-1">
                        {card.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#C89949] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                        <span>Hover to explore scope</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>

                  {/* HOVER / ACTIVE REVEAL OVERLAY: Full Respective Content */}
                  <div
                    className={`absolute inset-0 z-20 rounded-2xl bg-[#061729]/95 backdrop-blur-xl border-2 border-[#C89949] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ease-out ${
                      isHovered
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-col gap-1.5 border-b border-white/10 pb-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#C89949] tracking-wider uppercase">
                          {card.tag} • {card.number}
                        </span>
                        <span className="text-[11px] text-[#E0B669] bg-[#B7873A]/15 border border-[#B7873A]/30 px-2 py-0.5 rounded-full">
                          Advisory Details
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-[22px] font-medium text-white font-heading leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] font-medium text-[#E0B669] italic">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Middle: Scrollable Content with custom scrollbar */}
                    <div className="flex-1 overflow-y-auto pr-1 my-3 space-y-3 custom-scrollbar text-left">
                      <p className="text-xs sm:text-[13px] text-[#E9E8E3]/85 leading-relaxed">
                        {card.description}
                      </p>

                      <div className="pt-2.5 border-t border-white/10">
                        <span className="text-[11px] uppercase tracking-wider text-[#C89949] font-medium block mb-2">
                          Key Advisory Scope & Support:
                        </span>
                        <ul className="space-y-1.5">
                          {card.points.map((pt, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#E9E8E3]/90 leading-tight"
                            >
                              <span className="text-[#C89949] shrink-0 mt-0.5">✦</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer: Action Button */}
                    <div className="pt-3 border-t border-white/10">
                      <Link
                        href="/contactus"
                        className="w-full inline-flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#C89949] hover:bg-[#E0B669] text-[#071A2E] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md group/btn"
                      >
                        <span>{card.buttonText}</span>
                        <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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
          <div
            ref={whySolvCardsRef}
            className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-0 relative"
          >
            {/* Left Column (2 Cards) - slides left on scroll */}
            <div
              className="flex flex-col gap-5 sm:gap-6 w-full max-w-md lg:w-[360px] xl:w-[400px] transition-transform duration-100 ease-out will-change-transform z-10"
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

            {/* Center CrystalizedBall Card - revealed as columns separate */}
            <div
              className="relative shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#B7873A]/30 shadow-2xl transition-all duration-100 ease-out will-change-transform z-20 my-4 lg:my-0 bg-[#071A2E]/70 backdrop-blur-md"
              style={
                isDesktop
                  ? {
                      width: `${whySolvProgress * 320}px`,
                      height: "460px",
                      opacity: whySolvProgress <= 0.01 ? 0 : Math.min(1, whySolvProgress * 1.2),
                      transform: `scale(${0.9 + whySolvProgress * 0.1})`,
                      marginLeft: `${whySolvProgress * 20}px`,
                      marginRight: `${whySolvProgress * 20}px`,
                      borderWidth: whySolvProgress <= 0.03 ? "0px" : "1px",
                    }
                  : {
                      width: "100%",
                      maxWidth: "340px",
                      height: "380px",
                      opacity: 1,
                    }
              }
            >
              <div className="relative w-full h-full min-w-[280px] flex items-center justify-center">
                <CrystalizedBall
                  preset="plasma"
                  color="#E0B669"
                  size={0.7}
                  crackle={0.85}
                  fill={0.5}
                  interactive
                  hoverStrength={0.7}
                  strands={6}
                  flares={0.65}
                  glow={0.9}
                  sparks={0.6}
                  particleCount={15000}
                  motion="rise"
                  particleShape="square"
                  depth={0.6}
                  sway={0.5}
                  twinkle={0.5}
                  haze={0.7}
                  dustSpeed={1}
                  speed={1}
                  intro
                  paused={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-4 right-4 text-center z-10 pointer-events-none">
                  <span className="text-[11px] font-sans tracking-widest text-[#E0B669] uppercase px-3 py-1 rounded-full border border-[#B7873A]/30 bg-[#071A2E]/80 backdrop-blur-sm whitespace-nowrap shadow-md">
                    One Strategy. Complete Resolution.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (2 Cards) - slides right on scroll */}
            <div
              className="flex flex-col gap-5 sm:gap-6 w-full max-w-md lg:w-[360px] xl:w-[400px] transition-transform duration-100 ease-out will-change-transform z-10"
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
              Thoughtful assessment lead to informed decisions.
            </h2>

            <p className="text-[#E9E8E3] text-base sm:text-lg leading-relaxed max-w-lg font-normal">
              We listen first, organise relevant information, identify issues and
              options, help shape a practical strategy and where appropriate
              coordinate with qualified professionals to support next steps.
            </p>

            <div className="pt-2">
              <Link
                href="/contactus"
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
        FAQ SECTION
        =======================================================
      */}
      <FAQSection />

      {/* 
        =======================================================
        CALL TO ACTION (CTA) SECTION WITH GRADIENT WAVES
        =======================================================
      */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
