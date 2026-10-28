"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Check, Copy, ArrowUpRight, Menu, X, Printer } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { label: "Profile", href: "#headline" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fbf8f1] border-b-2 border-[#111111]">
      {/* 1. Top Dateline Bar — slim, dark, metadata only */}
      <div className="bg-[#111111] text-[#fbf8f1] px-4 py-1 text-[10px] font-mono tracking-tight sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2 divide-x divide-white/20">
            <span className="font-bold pr-2">SEMARANG, INDONESIA</span>
            <span className="pl-2 opacity-60">2026 EDITION</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="hidden sm:inline-flex items-center gap-1 text-[10px] text-[#fbf8f1]/60 hover:text-white/90 transition"
              title="Print / Save PDF"
            >
              <Printer className="h-3 w-3" />
              <span>Print PDF</span>
            </button>

            <div className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#f0b457] animate-pulse" />
              <span className="font-bold text-[#f0b457] text-[10px]">AVAILABLE NOW</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Masthead: Brand name = "Portfolio" — clean, no duplication */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
        <a
          href="#headline"
          className="group focus:outline-none"
          aria-label="Kembali ke atas"
        >
          <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#111111] uppercase leading-none group-hover:underline">
            Portfolio
          </span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#666666] mt-0.5">
            Full Stack Developer
          </span>
        </a>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleCopyEmail}
            type="button"
            className="whitespace-nowrap inline-flex items-center gap-1.5 border-2 border-[#111111] bg-[#fbf8f1] px-3 py-1.5 text-xs font-mono font-bold text-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#eee6d3] active:translate-x-px active:translate-y-px active:shadow-none transition-all"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#15803d]" />
                <span className="text-[#15803d]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href="#contact"
            className="whitespace-nowrap inline-flex items-center gap-1.5 border-2 border-[#111111] bg-[#111111] px-4 py-1.5 text-xs font-mono font-bold text-[#fbf8f1] shadow-[2px_2px_0px_#666] hover:bg-[#333] active:translate-x-px active:translate-y-px transition-all"
          >
            <span>Send Offer</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="flex h-9 w-9 items-center justify-center border-2 border-[#111111] bg-[#fbf8f1] text-[#111111] shadow-[2px_2px_0px_#111111] sm:hidden"
          aria-label="Open menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* 3. Editorial Navigation Strip */}
      <nav className="border-t border-[#111111]/15 bg-[#f4eee1] px-4 py-1.5 sm:px-6 hidden sm:block">
        <div className="mx-auto max-w-6xl flex items-center justify-center gap-7 xl:gap-10 font-serif text-[11px] font-bold uppercase tracking-widest text-[#333333]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap hover:text-[#991b1b] hover:underline underline-offset-4 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t-2 border-[#111111] bg-[#fbf8f1] px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-1 font-serif text-sm font-bold uppercase tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#111111]/15 py-2.5 hover:text-[#991b1b] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2 pt-2 border-t border-[#111111]/15">
            <button
              onClick={handleCopyEmail}
              type="button"
              className="flex items-center justify-center gap-2 border-2 border-[#111111] bg-[#f4eee1] py-2.5 text-xs font-mono font-bold text-[#111111] shadow-[2px_2px_0px_#111111]"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#15803d]" />
                  <span className="text-[#15803d]">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 border-2 border-[#111111] bg-[#111111] py-2.5 text-xs font-mono font-bold text-[#fbf8f1]"
            >
              <span>Send Job Offer</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
