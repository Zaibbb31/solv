import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";
import FAQSection from "@/app/component/faq";
import CTASection from "@/app/component/cta";
import {
  Building2,
  Coins,
  ScrollText,
  Scale,
  HeartHandshake,
  RefreshCw,
  Globe2,
  Briefcase,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services Overview | SOLV Strategic Advisory",
  description:
    "Every matter has its own facts, priorities and constraints. Our service areas provide a starting point for understanding the kind of support that may be relevant.",
};

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  category: string;
  icon: typeof Building2;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Property & Real Estate Advisory",
    description:
      "Support with property decisions, title and documentation, transactions, stalled projects and related concerns.",
    category: "Real Estate & Land",
    icon: Building2,
  },
  {
    number: "02",
    title: "Wealth, Assets & Inheritance",
    description:
      "A clear map of your assets, ownership records and inheritance questions, so you can protect what matters.",
    category: "Private Wealth",
    icon: Coins,
  },
  {
    number: "03",
    title: "Succession & Legacy Planning",
    description:
      "Forward-looking planning around succession, intergenerational transfers, family assets and continuity, with specialist coordination where required.",
    category: "Legacy & Continuity",
    icon: ScrollText,
  },
  {
    number: "04",
    title: "Family Property & Dispute Resolution",
    description:
      "Help structuring complex family-property situations, identifying the issues and exploring negotiation or other resolution routes.",
    category: "Conflict & Resolution",
    icon: Scale,
  },
  {
    number: "05",
    title: "Senior Citizen & Retirement Advisory",
    description:
      "Calm, practical guidance on property, asset security, family arrangements and the long-term interests of senior citizens.",
    category: "Elder & Family Care",
    icon: HeartHandshake,
  },
  {
    number: "06",
    title: "Business Restructuring & Insolvency Advisory",
    description:
      "Strategic assessment and coordination for businesses and stakeholders evaluating distress, restructuring or insolvency-related pathways.",
    category: "Corporate & Debt",
    icon: RefreshCw,
  },
  {
    number: "07",
    title: "NRI Property & Asset Advisory",
    description:
      "Structured support for NRIs dealing with property, ownership records, transfers, inheritance and coordination of India-based matters.",
    category: "Cross-Border & NRI",
    icon: Globe2,
  },
  {
    number: "08",
    title: "Business & Family Enterprise Succession",
    description:
      "Planning for ownership transitions, continuity and family-enterprise interests in closely held businesses.",
    category: "Enterprise Succession",
    icon: Briefcase,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#071A2E] text-white selection:bg-[#C89949] selection:text-[#071A2E] overflow-x-clip">
      {/* Sticky Fixed Navbar */}
      <Navbar forceScrolled={true} />

      <main className="flex-1 w-full max-w-8xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28">
        {/* =========================================================================
            HEADER SECTION: Eyebrow, Heading, Description
            ========================================================================= */}
        <div className="flex flex-col items-start max-w-4xl mb-14 sm:mb-20">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B7873A]/30 bg-[#0a233d]/80 text-xs font-sans uppercase tracking-[0.24em] text-[#E0B669] mb-4 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E0B669] animate-pulse" />
            <span>SERVICES OVERVIEW</span>
          </div>

          {/* Main Editorial Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-[1.06] tracking-tight text-[#FFFFFF] font-heading mb-6 sm:mb-8">
            Our Advisory Practices
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-[#E9E8E3]/85 leading-relaxed font-normal max-w-3xl">
            Every matter has its own facts, priorities and constraints. Our service areas provide a starting point for understanding the kind of support that may be relevant. The scope of each engagement is confirmed after an initial discussion.
          </p>
        </div>

        {/* =========================================================================
            SERVICES GRID: 3 cards per row on desktop
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group relative flex flex-col justify-between bg-[#0a233d]/65 backdrop-blur-md rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#B7873A]/25 hover:border-[#C89949]/60 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-[#C89949]/10"
              >
                {/* Top Section: Number & Category Icon */}
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                    <span className="text-xs font-sans tracking-[0.2em] font-medium text-[#C89949]/80 uppercase">
                      {service.category}
                    </span>
                    <span className="text-sm font-sans font-semibold tracking-wider text-white/40 group-hover:text-[#E0B669] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#071A2E] border border-[#B7873A]/30 flex items-center justify-center shrink-0 text-[#E0B669] group-hover:border-[#E0B669] group-hover:scale-105 transition-all duration-300 shadow-inner">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-normal leading-snug text-white font-heading group-hover:text-[#F3E5C8] transition-colors">
                      {service.title}
                    </h2>
                  </div>

                  {/* Body description */}
                  <p className="text-sm sm:text-[15px] text-[#E9E8E3]/75 leading-relaxed font-normal mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-5 border-t border-white/10 mt-auto">
                  <Link
                    href={`/contactus?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center justify-between w-full text-xs font-sans font-semibold tracking-[0.16em] uppercase text-[#E0B669] hover:text-white transition-colors duration-200 group/cta"
                  >
                    <span>EXPLORE THIS SERVICE</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/cta:border-[#C89949] group-hover/cta:bg-[#C89949]/10 group-hover/cta:translate-x-1 transition-all">
                      <ArrowUpRight className="w-4 h-4 text-[#E0B669]" />
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            ENGAGEMENT PRINCIPLES BANNER
            ========================================================================= */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#0a233d]/90 to-[#071A2E]/90 border border-[#B7873A]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#C89949]/5 blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-8">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#E0B669] font-medium block mb-2">
              HOW WE WORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-normal text-white mb-3">
              Direct Senior Partner Engagement on Every Mandate
            </h3>
            <p className="text-sm sm:text-base text-[#E9E8E3]/75 leading-relaxed">
              We do not pass files down to junior teams. Every advisory engagement is led directly by senior practitioners with deep cross-disciplinary expertise across property, law, finance, and corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#E0B669] shrink-0" />
              <span className="text-white/90">Independent, unconflicted advice</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#E0B669] shrink-0" />
              <span className="text-white/90">Strict confidentiality protocols</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#E0B669] shrink-0" />
              <span className="text-white/90">Pan-India jurisdictional coverage</span>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <FAQSection />

      {/* Global CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

