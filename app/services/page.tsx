import type { Metadata } from "next";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";
import FAQSection from "@/app/component/faq";
import CTASection from "@/app/component/cta";
import ServicesList from "./ServicesList";

export const metadata: Metadata = {
  title: "Advisory Practices & Services | SOLV",
  description:
    "Comprehensive strategic advisory across Property & Real Estate, Wealth & Inheritance, Succession Planning, Family Property Resolution, Business Restructuring, and NRI Asset Advisory.",
  keywords: [
    "Property & Real Estate Advisory",
    "Wealth Assets & Inheritance",
    "Succession & Legacy Planning",
    "Family Property & Dispute Resolution",
    "Senior Citizen & Retirement Advisory",
    "Business Restructuring & Insolvency",
    "NRI Property & Asset Advisory",
    "Business & Family Enterprise Succession",
    "Legal Advisory Services Gurugram",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Advisory Practices & Services | SOLV",
    description:
      "Strategic advisory across real estate, wealth, succession, corporate restructuring, and NRI asset management.",
    url: "https://solvpartners.in/services",
    siteName: "SOLV",
    images: [
      {
        url: "/service_real_estate.jpg",
        width: 1200,
        height: 630,
        alt: "SOLV Advisory Services Overview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advisory Practices & Services | SOLV",
    description:
      "Strategic advisory across real estate, wealth, succession, corporate restructuring, and NRI asset management.",
    images: ["/service_real_estate.jpg"],
  },
};

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
            SERVICES GRID: 3 cards per row on desktop with interactive pointer reveal
            ========================================================================= */}
        <ServicesList />

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
              <span className="text-[#E0B669] shrink-0 font-bold">✓</span>
              <span className="text-white/90">Independent, unconflicted advice</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#E0B669] shrink-0 font-bold">✓</span>
              <span className="text-white/90">Strict confidentiality protocols</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#E0B669] shrink-0 font-bold">✓</span>
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
