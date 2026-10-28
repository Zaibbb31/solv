import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";
import CTASection from "@/app/component/cta";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import { INSIGHT_ARTICLES } from "@/data/insights";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export async function generateStaticParams() {
  return INSIGHT_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | SOLV",
    };
  }

  return {
    title: `${article.title} | SOLV Insights`,
    description: article.lead,
  };
}

export default async function InsightSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles (excluding current)
  const relatedArticles = INSIGHT_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#071A2E] text-white selection:bg-[#C89949] selection:text-[#071A2E] overflow-x-clip">
      {/* Sticky Top Navbar */}
      <Navbar forceScrolled={true} />

      <main className="flex-1 w-full pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28">
        {/* =========================================================================
            BREADCRUMBS & TOP NAVIGATION
            ========================================================================= */}
        <div className="max-w-4xl mx-auto px-6 sm:px-10 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E9E8E3]/65 font-sans">
            <Link href="/" className="hover:text-[#E0B669] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-[#E0B669] transition-colors">
              Insights
            </Link>
            <span>/</span>
            <span className="text-[#E0B669] truncate max-w-[200px] sm:max-w-xs">
              {article.title}
            </span>
          </div>
        </div>

        {/* =========================================================================
            ARTICLE HEADER: Category, Title, Lead, Author Meta
            ========================================================================= */}
        <article className="max-w-4xl mx-auto px-6 sm:px-10">
          <header className="mb-10 sm:mb-14">
            {/* Category & Read Time Row */}
            <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#E9E8E3]/75 mb-5 font-sans">
              <span className="px-3 py-1 rounded-md bg-[#0a233d] border border-[#B7873A]/40 text-[#E0B669] font-medium uppercase tracking-wider text-[11px]">
                {article.category}
              </span>
              <span className="text-white/30">•</span>
              <span>{article.date}</span>
              <span className="text-white/30">•</span>
              <span>{article.readTime}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-[1.1] tracking-tight text-[#FFFFFF] font-heading mb-6 sm:mb-8">
              {article.title}
            </h1>

            {/* Lead Paragraph */}
            <p className="text-lg sm:text-xl lg:text-[22px] leading-relaxed text-[#E9E8E3]/85 font-normal mb-8 pb-8 border-b border-white/10">
              {article.lead}
            </p>

            {/* Author Byline */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#0a233d] border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-heading font-semibold text-sm shadow-md shrink-0">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-[15px] font-medium text-white">
                  {article.author.name}
                </span>
                <span className="text-xs text-[#E9E8E3]/60">
                  {article.author.role} • SOLV Strategic Advisory
                </span>
              </div>
            </div>
          </header>

          {/* =========================================================================
              FEATURED HERO IMAGE
              ========================================================================= */}
          <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-12 sm:mb-16 border border-[#B7873A]/25 shadow-2xl bg-[#0a233d]/50">
            <Image
              src={article.imageSrc}
              alt={article.title}
              fill
              priority
              unoptimized
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* =========================================================================
              KEY TAKEAWAYS CALLOUT BOX
              ========================================================================= */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="rounded-2xl border border-[#B7873A]/35 bg-[#0a233d]/70 backdrop-blur-md p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl">
              <h2 className="text-xs sm:text-sm font-sans uppercase tracking-[0.24em] text-[#E0B669] font-semibold mb-4 flex items-center gap-2">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} />
                <span>EXECUTIVE SUMMARY & KEY TAKEAWAYS</span>
              </h2>
              <ul className="flex flex-col gap-3">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#E9E8E3]/90 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E0B669] mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* =========================================================================
              ARTICLE CONTENT SECTIONS
              ========================================================================= */}
          <div className="flex flex-col gap-10 sm:gap-12 text-[#E9E8E3]/85 leading-relaxed text-base sm:text-lg">
            {article.sections.map((section, idx) => (
              <section key={idx} className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-3xl font-normal text-white font-heading tracking-tight">
                  {section.heading}
                </h3>
                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {/* Blockquote if present */}
            {article.quote && (
              <blockquote className="my-6 p-6 sm:p-8 rounded-2xl bg-[#0a233d]/50 border-l-4 border-[#C89949] shadow-inner">
                <p className="text-lg sm:text-xl italic text-white font-heading leading-relaxed mb-3">
                  &ldquo;{article.quote.text}&rdquo;
                </p>
                <cite className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#E0B669] not-italic block">
                  — {article.quote.attribution}
                </cite>
              </blockquote>
            )}
          </div>

          {/* =========================================================================
              BACK TO INSIGHTS BUTTON
              ========================================================================= */}
          <div className="mt-14 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-[#E0B669] hover:text-white transition-colors group"
            >
              <HugeiconsIcon
                icon={ArrowLeft01Icon}
                size={16}
                strokeWidth={2}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span>Back to all Insights</span>
            </Link>

            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C89949] hover:bg-[#E0B669] text-[#071A2E] text-xs sm:text-sm font-semibold transition-all shadow-md group"
            >
              <span>Consult on Your Matter</span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={14}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </article>

        {/* =========================================================================
            RELATED ARTICLES
            ========================================================================= */}
        {relatedArticles.length > 0 && (
          <section className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-12 mt-24 sm:mt-32 pt-16 border-t border-white/10">
            <div className="flex flex-col items-start mb-10">
              <span className="text-xs uppercase tracking-[0.24em] text-[#E0B669] font-medium mb-2">
                MORE PERSPECTIVES
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal text-white font-heading">
                Related Advisory Insights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/insights/${rel.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-5 hover:border-[#C89949]/50 transition-all duration-300 shadow-lg"
                >
                  <div>
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#071A2E]">
                      <Image
                        src={rel.imageSrc}
                        alt={rel.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-[#E0B669] font-medium mb-2">
                      {rel.category}
                    </div>
                    <h3 className="text-lg font-normal text-white font-heading leading-snug group-hover:text-[#E0B669] transition-colors mb-2">
                      {rel.title}
                    </h3>
                  </div>
                  <div className="text-xs text-[#E9E8E3]/60 pt-3 border-t border-white/10 mt-4 flex items-center justify-between">
                    <span>{rel.readTime}</span>
                    <span className="text-[#E0B669] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

