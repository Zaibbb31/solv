"use client";

import { useState } from "react";
import Link from "next/link";
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
  ChevronDown,
} from "lucide-react";

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  icon: typeof Building2;
  points: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Property & Real Estate Advisory",
    subtitle: "Make property decisions with greater clarity.",
    description:
      "Support with property decisions, title and documentation, transactions, stalled projects and related concerns.",
    category: "Real Estate & Land",
    icon: Building2,
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
  },
  {
    number: "02",
    title: "Wealth, Assets & Inheritance",
    subtitle: "Know what you own. Protect what matters.",
    description:
      "A clear map of your assets, ownership records and inheritance questions, so you can protect what matters.",
    category: "Private Wealth",
    icon: Coins,
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
  },
  {
    number: "03",
    title: "Succession & Legacy Planning",
    subtitle: "Planning for the Next Chapter.",
    description:
      "Forward-looking planning around succession, intergenerational transfers, family assets and continuity, with specialist coordination where required.",
    category: "Legacy & Continuity",
    icon: ScrollText,
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
  },
  {
    number: "04",
    title: "Family Property & Dispute Resolution",
    subtitle: "When family interests become complicated.",
    description:
      "Help structuring complex family-property situations, identifying the issues and exploring negotiation or other resolution routes.",
    category: "Conflict & Resolution",
    icon: Scale,
    points: [
      "Preliminary assessment of family property disputes",
      "Inheritance and succession-related disagreements",
      "Assessment of ownership and transfer-related concerns",
      "Evaluation of potential negotiation and resolution options",
      "Guidance on appropriate dispute-resolution mechanisms",
      "Coordination with qualified legal professionals where representation or other regulated legal services are required",
    ],
  },
  {
    number: "05",
    title: "Senior Citizen & Retirement Advisory",
    subtitle: "Security, Dignity and Clarity in the Years That Matter.",
    description:
      "Calm, practical guidance on property, asset security, family arrangements and the long-term interests of senior citizens.",
    category: "Elder & Family Care",
    icon: HeartHandshake,
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
  },
  {
    number: "06",
    title: "Business Restructuring & Insolvency Advisory",
    subtitle: "When the pressure is on, clarity matters most.",
    description:
      "Strategic assessment and coordination for businesses and stakeholders evaluating distress, restructuring or insolvency-related pathways.",
    category: "Corporate & Debt",
    icon: RefreshCw,
    points: [
      "Independent assessment of financial and commercial position",
      "Restructuring options and business viability reviews",
      "Support with lender and creditor negotiations, including one-time settlements",
      "Assessment of stalled and distressed real estate projects",
      "Guidance for stakeholders in insolvency processes under the IBC",
      "Coordination with registered insolvency professionals, advocates and valuers",
    ],
  },
  {
    number: "07",
    title: "NRI Property & Asset Advisory",
    subtitle: "India-based assets. A clearer way to manage the details.",
    description:
      "Structured support for NRIs dealing with property, ownership records, transfers, inheritance and coordination of India-based matters.",
    category: "Cross-Border & NRI",
    icon: Globe2,
    points: [
      "Property ownership and record-related questions",
      "Purchase, sale, gift or transfer considerations",
      "Inheritance and succession-related matters",
      "Document and information checklists",
      "Coordination with local professionals",
      "Identifying questions requiring legal, tax or regulatory advice",
    ],
  },
  {
    number: "08",
    title: "Business & Family Enterprise Succession",
    subtitle: "Continuity for the business you have built.",
    description:
      "Planning for ownership transitions, continuity and family-enterprise interests in closely held businesses.",
    category: "Enterprise Succession",
    icon: Briefcase,
    points: [
      "Ownership transition and continuity planning",
      "Mapping family-enterprise interests and expectations",
      "Succession planning for closely held businesses and partnerships",
      "Separating business and family assets",
      "Aligning business succession with personal succession plans",
      "Coordination with advocates, chartered accountants and valuers",
    ],
  },
];

export default function ServicesList() {
  // Mobile accordion state for click-to-expand
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 items-stretch">
      {SERVICES_DATA.map((service, index) => {
        const Icon = service.icon;
        const isExpanded = expandedIndex === index;

        return (
          <div
            key={service.number}
            onClick={() => toggleExpand(index)}
            className="group relative flex flex-col justify-between h-full bg-[#0a233d]/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 border border-[#B7873A]/25 hover:border-[#C89949]/70 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-[#C89949]/15 cursor-pointer md:cursor-default"
          >
            {/* Top Section: Number, Icon, Title, Description & Scope */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-5">
                <span className="text-xs font-sans tracking-[0.2em] font-medium text-[#C89949]/90 uppercase">
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
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-normal leading-snug text-white font-heading group-hover:text-[#F3E5C8] transition-colors">
                    {service.title}
                  </h2>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] font-medium text-[#E0B669] italic mb-3">
                {service.subtitle}
              </p>

              {/* Body description */}
              <p className="text-sm sm:text-[14.5px] text-[#E9E8E3]/80 leading-relaxed font-normal mb-5">
                {service.description}
              </p>

              {/* Mobile trigger indicator (visible only on mobile) */}
              <div className="flex md:hidden items-center justify-between py-2 text-xs text-[#E0B669] font-medium border-t border-white/10 mb-3">
                <span>{isExpanded ? "Hide key advisory scope" : "Tap to view key advisory scope"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* 
                ===========================================================
                POINTERS SECTION:
                - Desktop (md+): Always visible by default (expanded initially, no hover needed)
                - Mobile (<md): Collapsed initially, expands on tap via isExpanded state
                ===========================================================
              */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out md:max-h-none md:opacity-100 md:my-4 flex-1 flex flex-col ${
                  isExpanded
                    ? "max-h-[600px] opacity-100 my-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-3 border-t border-white/15 bg-[#071A2E]/60 rounded-xl p-4 border border-[#B7873A]/20 shadow-inner h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#C89949] font-semibold">
                      Key Advisory Scope & Support:
                    </span>
                    <span className="text-[10px] text-[#E0B669]/70 font-mono">
                      {service.points.length} focus areas
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {service.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-[12.5px] text-[#E9E8E3]/90 leading-snug"
                      >
                        <span className="text-[#C89949] shrink-0 text-xs mt-0.5 font-bold">✦</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-5 border-t border-white/10 mt-4">
              <Link
                href={`/contactus?service=${encodeURIComponent(service.title)}`}
                onClick={(e) => e.stopPropagation()}
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
  );
}

