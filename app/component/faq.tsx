"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What does SOLV do?",
    answer:
      "SOLV is an advisory, restructuring and consultancy practice. We help individuals, asset owners, families and businesses structure complex questions about property, assets, succession and business challenges. The exact scope is confirmed for each engagement.",
  },
  {
    question: "Does SOLV provide legal representation?",
    answer:
      "No. SOLV is an advisory and consultancy practice, not a law firm. Where a matter needs legal advice, formal representation or court proceedings, it is handled by an appropriately qualified legal professional under a separate engagement.",
  },
  {
    question: "Can SOLV help with property matters in Gurugram and Delhi NCR?",
    answer:
      "Yes, within our confirmed service area and scope. Share a brief overview of your matter and we will let you know whether we are the right fit.",
  },
  {
    question: "Can NRIs contact SOLV about property in India?",
    answer:
      "Yes. Our NRI Property & Asset Advisory helps organise India-based property, documentation, transfer and inheritance questions, with specialist coordination where needed.",
  },
  {
    question: "Can SOLV advise on inheritance and succession?",
    answer:
      "We help structure the issues and planning questions. Formal legal advice, will drafting and other legal services are provided by an appropriately qualified professional.",
  },
  {
    question: "Does SOLV guarantee an outcome?",
    answer:
      "No. Outcomes depend on facts, documents, applicable law, third parties and other circumstances. SOLV does not guarantee a particular result.",
  },
  {
    question: "How does an engagement begin?",
    answer:
      "With an enquiry and a conversation. We aim to understand the issue, clarify the scope and the information needed, and decide whether SOLV or another qualified professional is best placed to help.",
  },
  {
    question: "How are fees determined?",
    answer:
      "Fees are confirmed once the scope, deliverables, timeline and any third-party involvement are understood. Engagement terms are provided in writing before work begins.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative z-30 w-full bg-[#071A2E] text-white py-20 sm:py-28 px-6 sm:px-10 lg:px-12 border-t border-[#B7873A]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Badge (Sticky on desktop, aligned flush with first FAQ tab) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start gap-3.5 lg:-translate-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B7873A]/30 bg-[#B7873A]/10 text-xs font-sans uppercase tracking-widest text-[#E0B669] leading-none">
            <span>FAQS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] text-[#FFFFFF] font-heading tracking-tight">
            Frequently asked questions
          </h2>

          <p className="text-[#E9E8E3]/75 text-base sm:text-lg leading-relaxed max-w-md font-normal mt-1">
            Clear answers about our advisory scope, legal boundaries, regional coverage, and how we work with clients.
          </p>
        </div>

        {/* Right Column: FAQ Accordion Stack */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#C89949]/60 bg-[#0a233d]/90 shadow-xl shadow-black/30"
                    : "border-[#B7873A]/25 bg-[#0a233d]/60 hover:border-[#C89949]/40 hover:bg-[#0a233d]/75"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-normal text-white font-heading leading-snug">
                    {faq.question}
                  </span>

                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#C89949]/20 text-[#E0B669]"
                        : "text-[#E9E8E3]/60 group-hover:text-white"
                    }`}
                  >
                    <HugeiconsIcon
                      icon={isOpen ? ArrowUp01Icon : ArrowRight01Icon}
                      size={20}
                      strokeWidth={2}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-white/5 animate-in fade-in duration-200">
                    <p className="text-[#E9E8E3]/85 text-sm sm:text-base leading-relaxed font-normal pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

