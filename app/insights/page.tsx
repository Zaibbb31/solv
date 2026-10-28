import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";
import FAQSection from "@/app/component/faq";
import CTASection from "@/app/component/cta";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { INSIGHT_ARTICLES } from "@/data/insights";

export const metadata: Metadata = {
  title: "News & Insights | SOLV Strategic Advisory",
  description:
    "Considered strategic perspectives, restructuring benchmarks, property succession frameworks, and asset governance insights from SOLV.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#071A2E] text-white selection:bg-[#C89949] selection:text-[#071A2E] overflow-x-clip">
      {/* Sticky Top Navbar */}
      <Navbar forceScrolled={true} />

      <main className="flex-1 w-full max-w-8xl mx-auto px-6 sm:px-10 lg:px-12 pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28">
        {/* =========================================================================
            HERO HEADER: Pill, Editorial Heading, Subheading (SOLV Brand)
            ========================================================================= */}
        <div className="flex flex-col items-start max-w-4xl mb-14 sm:mb-20">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B7873A]/30 bg-[#0a233d]/80 text-xs font-sans uppercase tracking-[0.24em] text-[#E0B669] mb-4 sm:mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E0B669] animate-pulse" />
            <span>BLOG</span>
          </div>

          {/* Main Editorial Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-[1.06] tracking-tight text-[#FFFFFF] font-heading mb-5 sm:mb-6">
            News & Insights
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-[#E9E8E3]/80 leading-relaxed font-normal max-w-3xl">
            Considered perspectives on <span className="text-white font-medium">commercial real estate, corporate restructuring, generational succession, and asset continuity</span> from SOLV&apos;s senior advisory practice.
          </p>
        </div>

        {/* =========================================================================
            CARDS GRID: 3-column layout matching reference screenshot
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {INSIGHT_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="flex flex-col justify-between group bg-[#0a233d]/65 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#B7873A]/25 hover:border-[#C89949]/50 transition-all duration-300 shadow-xl shadow-black/25 hover:shadow-[#C89949]/10"
            >
              <div>
                {/* Image Banner */}
                <Link href={`/insights/${article.slug}`} className="block">
                  <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden mb-5 bg-[#071A2E] border border-white/10 shadow-sm">
                    <Image
                      src={article.imageSrc}
                      alt={article.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </Link>

                {/* Category & Date Row */}
                <div className="flex items-center gap-2.5 text-xs text-[#E9E8E3]/75 mb-3 font-sans">
                  <span className="px-2.5 py-1 rounded-md bg-[#071A2E]/90 border border-[#B7873A]/30 text-[#E0B669] font-medium text-[11px] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-[#E9E8E3]/70">{article.date}</span>
                </div>

                {/* Article Title */}
                <h2 className="text-xl sm:text-[22px] font-normal leading-[1.25] text-[#FFFFFF] font-heading mb-3 group-hover:text-[#E0B669] transition-colors">
                  <Link href={`/insights/${article.slug}`} className="hover:underline decoration-[#C89949]/50 underline-offset-4">
                    {article.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-[#E9E8E3]/75 leading-relaxed mb-6 line-clamp-3">
                  {article.lead}
                </p>
              </div>

              {/* Bottom Row: Read Time & Arrow Button */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                <span className="text-xs text-[#E9E8E3]/60 font-medium">
                  {article.readTime}
                </span>

                <Link
                  href={`/insights/${article.slug}`}
                  className="w-10 h-10 rounded-full border border-[#B7873A]/30 bg-[#071A2E]/80 flex items-center justify-center text-[#E0B669] group-hover:bg-[#C89949] group-hover:text-[#071A2E] group-hover:border-[#C89949] transition-all duration-200 shadow-md"
                  aria-label={`Read article: ${article.title}`}
                >
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    strokeWidth={2}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

