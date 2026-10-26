"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About SOLV", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ forceScrolled }: { forceScrolled?: boolean } = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger white background when scrolled past 40px
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = forceScrolled ?? isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-[#071A2E] shadow-sm border-b border-zinc-200/80"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90 focus:outline-none"
            aria-label="Home"
          >
            <Image
              src="/Logo color.svg"
              alt="SOLV Logo"
              width={140}
              height={118}
              priority
              className={`h-8 sm:h-9 w-auto object-contain transition-all duration-300 ${
                scrolled ? "brightness-0" : ""
              }`}
            />
          </Link>

          {/* Right: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  scrolled
                    ? "text-[#071A2E]/80 hover:text-[#C89949]"
                    : "text-[#E9E8E3]/90 hover:text-[#C89949]"
                } text-[15px] font-normal tracking-wide transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${
                scrolled ? "text-[#071A2E]" : "text-[#E9E8E3]"
              } hover:text-[#C89949] p-2 rounded-md focus:outline-none transition-colors`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <HugeiconsIcon
                icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
                size={26}
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 transition-all duration-200 ${
            scrolled
              ? "bg-white text-[#071A2E] border-t border-zinc-200 shadow-xl"
              : "border-t border-[#B7873A]/25 bg-[#071A2E]/95 backdrop-blur-md"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`${
                  scrolled
                    ? "text-[#071A2E]/90 hover:text-[#C89949]"
                    : "text-[#E9E8E3] hover:text-[#C89949]"
                } text-base font-normal tracking-wide py-1.5 transition-colors`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
