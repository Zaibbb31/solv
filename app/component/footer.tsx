"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full bg-[#071A2E] text-white border-t border-[#B7873A]/20 pt-16 sm:pt-20 pb-10 sm:pb-12 px-6 sm:px-10 lg:px-12 relative z-30 font-sans">
      <div className="max-w-8xl mx-auto">
        {/* Top Main Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 pb-14 sm:pb-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="flex flex-col items-start max-w-md w-full">
            {/* Brand Logo */}
            <Link href="/" className="mb-8 inline-block focus:outline-none" aria-label="SOLV Home">
              <Image
                src="/Logo color.svg"
                alt="SOLV Logo"
                width={130}
                height={40}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            {/* Newsletter Label */}
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.22em] text-[#E0B669] uppercase font-medium mb-3">
              SUBSCRIBE FOR OUR NEWSLETTER
            </span>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-sm relative">
              <div className="relative flex items-center w-full rounded-lg bg-[#0d233d] border border-white/15 focus-within:border-[#C89949] transition-all duration-200 overflow-hidden shadow-inner">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full bg-transparent px-4 py-3 sm:py-3.5 text-sm sm:text-[15px] text-white placeholder-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-4 py-3 sm:py-3.5 text-white/70 hover:text-[#C89949] transition-colors focus:outline-none flex items-center justify-center cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

              {subscribed && (
                <p className="absolute -bottom-6 left-0 text-xs text-[#E0B669] font-medium">
                  Thank you for subscribing.
                </p>
              )}
            </form>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="grid grid-cols-2 gap-12 sm:gap-20 lg:gap-28 w-full lg:w-auto">
            {/* Column 1: MAIN */}
            <div className="flex flex-col items-start gap-4 sm:gap-5">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] text-[#E0B669] uppercase font-semibold">
                MAIN
              </span>
              <ul className="flex flex-col gap-3 sm:gap-3.5">
                <li>
                  <Link
                    href="#about"
                    className="text-sm sm:text-base text-[#E9E8E3]/75 hover:text-[#E0B669] transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm sm:text-base text-[#E9E8E3]/75 hover:text-[#E0B669] transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#insights"
                    className="text-sm sm:text-base text-[#E9E8E3]/75 hover:text-[#E0B669] transition-colors duration-200"
                  >
                    Insights
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: COMPANY */}
            <div className="flex flex-col items-start gap-4 sm:gap-5">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] text-[#E0B669] uppercase font-semibold">
                COMPANY
              </span>
              <ul className="flex flex-col gap-3 sm:gap-3.5">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm sm:text-base text-[#E9E8E3]/75 hover:text-[#E0B669] transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm sm:text-base text-[#E9E8E3]/75 hover:text-[#E0B669] transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="text-sm sm:text-base text-[#E9E8E3]/75 hover:text-[#E0B669] transition-colors duration-200"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="w-full border-t border-white/10 pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Icons & Copyright */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-white/10 bg-[#0d233d]/70 hover:bg-[#C89949] text-white/70 hover:text-[#071A2E] hover:border-[#C89949] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-white/10 bg-[#0d233d]/70 hover:bg-[#C89949] text-white/70 hover:text-[#071A2E] hover:border-[#C89949] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg border border-white/10 bg-[#0d233d]/70 hover:bg-[#C89949] text-white/70 hover:text-[#071A2E] hover:border-[#C89949] flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <span className="text-xs sm:text-sm text-[#E9E8E3]/60 font-normal">
              © SOLV 2026, All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
