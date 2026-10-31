"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import Footer from "@/app/component/footer";
import FAQSection from "@/app/component/faq";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Message01Icon,
  Call02Icon,
  MapsLocation01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <div className="relative w-full bg-[#071A2E] text-[#FFFFFF] selection:bg-[#C89949] selection:text-[#071A2E] overflow-x-clip min-h-screen flex flex-col justify-between">
      {/* Sticky Top Navbar */}
      <Navbar forceScrolled={true} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
        {/* Contact Section Container */}
        <section className="relative w-full px-6 sm:px-10 lg:px-12 max-w-8xl mx-auto">
          {/* Ambient Subtle Glows */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C89949]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#0a233d]/70 rounded-full blur-3xl pointer-events-none" />

          {/* 2-Column Main Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
            {/* 
              =======================================================
              LEFT COLUMN: Headings, Quick Contact Cards & Hours Card
              =======================================================
            */}
            <div className="lg:col-span-6 flex flex-col gap-8 sm:gap-10">
              {/* Heading & Subtitle Block */}
              <div className="flex flex-col items-start gap-4">
                <span className="text-xs sm:text-[13px] font-sans font-medium uppercase tracking-[0.28em] text-[#E0B669]">
                  CONTACT SOLV
                </span>

                <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-[1.08] text-[#FFFFFF] font-heading tracking-tight">
                  Get in Touch with Our Experts
                </h1>

                <p className="text-[#E9E8E3]/75 text-base sm:text-lg leading-relaxed max-w-xl font-normal mt-1">
                  Whether you need clarity, strategy, or a fresh perspective, our team is ready to assist. Let&apos;s drive results together.
                </p>
              </div>

              {/* Two Quick Contact Cards Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Card 1: Reach Out to Us */}
                <div className="rounded-2xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#C89949]/50 transition-all duration-300 group shadow-lg shadow-black/20">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#071A2E]/90 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-4 sm:mb-5 group-hover:scale-105 group-hover:border-[#C89949]/60 transition-all shadow-sm">
                      <HugeiconsIcon icon={Message01Icon} size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-normal text-white font-heading mb-1.5 leading-snug">
                      Reach Out to Us
                    </h3>
                    <p className="text-[#E9E8E3]/70 text-xs sm:text-sm leading-relaxed mb-4">
                      Need assistance? Drop us a message anytime.
                    </p>
                  </div>
                  <a
                    href="mailto:solvpartnersllp@gmail.com"
                    className="text-sm font-medium text-white hover:text-[#E0B669] underline underline-offset-4 decoration-[#B7873A]/50 transition-colors"
                  >
                    solvpartnersllp@gmail.com
                  </a>
                </div>

                {/* Card 2: Call Us */}
                <div className="rounded-2xl border border-[#B7873A]/25 bg-[#0a233d]/60 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#C89949]/50 transition-all duration-300 group shadow-lg shadow-black/20">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#071A2E]/90 border border-[#B7873A]/30 flex items-center justify-center text-[#E0B669] mb-4 sm:mb-5 group-hover:scale-105 group-hover:border-[#C89949]/60 transition-all shadow-sm">
                      <HugeiconsIcon icon={Call02Icon} size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-normal text-white font-heading mb-1.5 leading-snug">
                      Call Us
                    </h3>
                    <p className="text-[#E9E8E3]/70 text-xs sm:text-sm leading-relaxed mb-4">
                      Need help? Give us a call—we&apos;re here for you.
                    </p>
                  </div>
                  <a
                    href="tel:+911244000000"
                    className="text-sm font-medium text-white hover:text-[#E0B669] underline underline-offset-4 decoration-[#B7873A]/50 transition-colors"
                  >
                    +91 124 400 0000
                  </a>
                </div>
              </div>

              {/* Business Hours & Office Location Card */}
              <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/25 bg-[#0a233d]/65 backdrop-blur-md p-6 sm:p-7 flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch shadow-xl shadow-black/30">
                {/* Left Side: Hours & Location Details */}
                <div className="flex-1 flex flex-col justify-between gap-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-normal text-white font-heading mb-3 leading-tight">
                      Business Hours
                    </h3>
                    <div className="w-full border-t border-white/10 mb-3.5" />

                    <div className="flex flex-col gap-2 text-xs sm:text-[13px] text-[#E9E8E3]/85 font-mono tracking-wide">
                      <div className="flex items-center justify-between">
                        <span className="text-[#E0B669] font-sans font-medium uppercase text-xs">MON - FRI</span>
                        <span>10:00 - 19:00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#E0B669] font-sans font-medium uppercase text-xs">SAT & SUN</span>
                        <span>11:00 - 17:00</span>
                      </div>
                    </div>

                    {/* Address details */}
                    <div className="mt-4 pt-3.5 border-t border-white/10 text-xs sm:text-[13px] text-[#E9E8E3]/80 leading-relaxed">
                      <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-[#C89949] block mb-1">
                        Principal Office
                      </span>
                      <p className="text-white font-medium">
                        Office space 616A, 6th Floor, Block 1 & 5, Tower C, M3M Urbana
                      </p>
                      <p className="text-[#E9E8E3]/70">
                        Golf Course Extension Road, Sector 67, Gurgaon - 122102
                      </p>
                    </div>
                  </div>

                  {/* Dot Indicators & Maps Button */}
                  <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10">
                    <a
                      href="https://maps.app.goo.gl/Vrrb8ypDnym37JvZ6?g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#071A2E] hover:bg-[#071A2E]/90 border border-[#B7873A]/40 text-xs sm:text-sm font-medium text-[#E0B669] hover:text-white transition-all shadow-md group cursor-pointer"
                    >
                      <span>Open in Google Maps</span>
                      <HugeiconsIcon
                        icon={MapsLocation01Icon}
                        size={16}
                        strokeWidth={2}
                        className="transition-transform group-hover:scale-110"
                      />
                    </a>

                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="w-2 h-2 rounded-full bg-[#E0B669]" />
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Architectural Office Lounge Image */}
                <div className="relative w-full md:w-48 lg:w-56 h-48 md:h-auto min-h-[190px] rounded-xl sm:rounded-2xl overflow-hidden border border-[#B7873A]/25 shrink-0 bg-[#071A2E]">
                  <Image
                    src="/contact_office_lounge.jpg"
                    alt="SOLV Strategic Advisory Executive Lounge"
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 
              =======================================================
              RIGHT COLUMN: Glassmorphic Contact Form
              =======================================================
            */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/30 bg-[#0a233d]/75 backdrop-blur-md p-6 sm:p-9 lg:p-10 shadow-2xl shadow-black/40 relative overflow-hidden">
                {/* Form Title & Instruction */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-normal text-white font-heading mb-2">
                    Send an Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E9E8E3]/70">
                    Fill out the form below. We treat every engagement with complete discretion.
                  </p>
                </div>

                {/* Interactive Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                  {/* Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-[#E9E8E3]/85">
                      Name<span className="text-[#E0B669]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full rounded-xl bg-[#071A2E]/80 border border-white/15 focus:border-[#C89949] px-4 py-3 sm:py-3.5 text-white placeholder-white/35 text-sm sm:text-[15px] outline-none transition-all duration-200 focus:ring-1 focus:ring-[#C89949]/50 shadow-inner"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-[#E9E8E3]/85">
                      Email<span className="text-[#E0B669]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full rounded-xl bg-[#071A2E]/80 border border-white/15 focus:border-[#C89949] px-4 py-3 sm:py-3.5 text-white placeholder-white/35 text-sm sm:text-[15px] outline-none transition-all duration-200 focus:ring-1 focus:ring-[#C89949]/50 shadow-inner"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-[#E9E8E3]/85">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl bg-[#071A2E]/80 border border-white/15 focus:border-[#C89949] px-4 py-3 sm:py-3.5 text-white placeholder-white/35 text-sm sm:text-[15px] outline-none transition-all duration-200 focus:ring-1 focus:ring-[#C89949]/50 shadow-inner"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-[#E9E8E3]/85">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="enquiry about..."
                      className="w-full rounded-xl bg-[#071A2E]/80 border border-white/15 focus:border-[#C89949] px-4 py-3 sm:py-3.5 text-white placeholder-white/35 text-sm sm:text-[15px] outline-none transition-all duration-200 focus:ring-1 focus:ring-[#C89949]/50 shadow-inner"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs sm:text-sm font-medium text-[#E9E8E3]/85">
                      Message<span className="text-[#E0B669]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Message goes here"
                      className="w-full rounded-xl bg-[#071A2E]/80 border border-white/15 focus:border-[#C89949] px-4 py-3 sm:py-3.5 text-white placeholder-white/35 text-sm sm:text-[15px] outline-none transition-all duration-200 focus:ring-1 focus:ring-[#C89949]/50 shadow-inner resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 sm:py-4 px-6 rounded-xl bg-[#C89949] hover:bg-[#E0B669] text-[#071A2E] text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 shadow-xl shadow-black/30 hover:shadow-[#C89949]/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#071A2E] border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>

                  {/* Success Banner */}
                  {isSubmitted && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm animate-fadeIn">
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} />
                      <span>Thank you. Your message has been received. We will respond within 24 hours.</span>
                    </div>
                  )}

                  {/* Form Footer Availability Status Strip */}
                  <div className="mt-4 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar / Brand Icon */}
                      <div className="w-10 h-10 rounded-full bg-[#071A2E] border border-[#B7873A]/40 flex items-center justify-center text-[#E0B669] font-heading font-semibold text-sm shadow-inner shrink-0">
                        S
                      </div>
                      <div className="flex flex-col">
                        <a
                          href="mailto:solvpartnersllp@gmail.com"
                          className="text-xs sm:text-sm font-medium text-white hover:text-[#E0B669] transition-colors"
                        >
                          solvpartnersllp@gmail.com
                        </a>
                        <span className="text-[11px] sm:text-xs text-[#E9E8E3]/60">
                          reply within 24 hrs
                        </span>
                      </div>
                    </div>

                    {/* Available Status Pill */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>AVAILABLE</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 
          =======================================================
          INTERACTIVE GOOGLE MAP SECTION
          =======================================================
        */}
        <section className="relative w-full px-6 sm:px-10 lg:px-12 max-w-8xl mx-auto mt-14 sm:mt-18 lg:mt-20">
          <div className="rounded-2xl sm:rounded-3xl border border-[#B7873A]/30 bg-[#0a233d]/75 backdrop-blur-md overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10">
            {/* Map Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-6 sm:mb-8">
              <div>
                <span className="text-xs sm:text-[13px] font-sans font-medium uppercase tracking-[0.24em] text-[#E0B669] block mb-2">
                  OUR LOCATION
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white font-heading">
                  Visit Our Principal Office
                </h3>
                <p className="text-[#E9E8E3]/75 text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
                  Office space 616A, 6th Floor, Block 1 & 5, Tower C, M3M Urbana, Golf Course Extension Road, Sector 67, Gurgaon - 122102
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/Vrrb8ypDnym37JvZ6?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C89949] hover:bg-[#E0B669] text-[#071A2E] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg shrink-0 group"
              >
                <span>Get Directions</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Embedded Responsive Map Frame */}
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden border border-[#B7873A]/25 bg-[#071A2E] shadow-inner">
              <iframe
                title="SOLV Strategic Advisory - M3M Urbana Gurgaon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.309440620172!2d77.06019377626938!3d28.394814975794593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226a27e7eb17%3A0xe54d9c49089ef0cb!2sM3M%20URBANA%2C%20Golf%20Course%20Ext%20Rd%2C%20Ramgarh%2C%20Sector%2067%2C%20Gurugram%2C%20Haryana%20122102!5e0!3m2!1sen!2sin!4v1730376000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) brightness(0.95)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* 
          =======================================================
          FREQUENTLY ASKED QUESTIONS (FAQ) SECTION
          =======================================================
        */}
        <div className="mt-20 sm:mt-28">
          <FAQSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

