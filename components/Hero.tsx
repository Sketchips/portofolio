"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Check, Copy, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="headline" className="bg-[#fbf8f1] pt-6 pb-12 sm:pt-8 sm:pb-16 text-[#111111] animate-paper-unfold">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Editorial Masthead */}
        <div className="text-center border-b-4 border-[#111111] pb-4">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#555555]">
            Full Stack Developer · Semarang, Indonesia
          </p>
          <h1 className="mt-1 font-serif text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111111] uppercase leading-none">
            Muhamad Ariel<br className="hidden sm:block" /> Gunawan
          </h1>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[10px] sm:text-[11px] text-[#333333] border-t border-[#111111] pt-2">
            <span>Laravel &amp; REST API</span>
            <span className="text-[#111]/30">|</span>
            <span>Next.js &amp; React</span>
            <span className="text-[#111]/30">|</span>
            <span>PostgreSQL &amp; MySQL</span>
            <span className="text-[#111]/30">|</span>
            <span className="font-bold text-[#991b1b]">MikroTik MTCNA 2026</span>
          </div>
        </div>

        {/* Dateline bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#111111]/30 py-1.5 font-mono text-[10px] text-[#666666]">
          <span>Semarang · Central Java · Indonesia</span>
          <span className="hidden sm:inline">Software Development Portfolio</span>
          <span className="font-bold text-[#111111]">STATUS: Immediately Available</span>
        </div>

        {/* Front Page: Lead Story + Dossier */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10 items-start">

          {/* Lead Story */}
          <article className="border-b lg:border-b-0 lg:border-r border-[#111111]/20 pb-8 lg:pb-0 lg:pr-10">
            <span className="inline-block bg-[#111111] text-[#fbf8f1] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest">
              Profile &amp; Specialization
            </span>

            <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl font-black leading-[1.1] tracking-tight text-[#111111]">
              Building Web Systems from Database Schema to Production-Ready UI
            </h2>

            <p className="mt-3 font-serif text-base sm:text-lg italic font-normal leading-relaxed text-justify text-[#444444]">
              Clean Laravel backends, fast Next.js frontends, backed by a certified MikroTik MTCNA networking foundation.
            </p>

            <div className="mt-5 space-y-4 text-justify text-sm sm:text-base leading-relaxed text-[#222222]">
              <p className="drop-cap">
                <strong>Semarang</strong> — I&apos;m a Full Stack Developer who works across the entire stack by designing relational database schemas, building secure RESTful APIs with Laravel, and connecting them to responsive Next.js or React interfaces that work across all devices.
              </p>

              <p>
                My internship at <strong>BRIDA Kota Semarang (Regional Research and Innovation Agency)</strong> gave me real team experience — developing web application modules for a government institution, integrating frontend with backend REST endpoints, API testing with Postman, and collaborating through Git branching and pull requests.
              </p>
            </div>

            <blockquote className="my-6 border-l-4 border-[#111111] bg-[#f4eee1] p-4 sm:p-5 font-serif text-base sm:text-lg italic leading-relaxed text-[#111111] paper-lift shadow-[3px_3px_0px_#111111]">
              &ldquo;Normalized database schema, documented and secure API endpoints, clean code that&apos;s easy for a team to maintain and extend.&rdquo;
            </blockquote>

            <div className="paper-perforation my-5" />

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="whitespace-nowrap inline-flex h-11 items-center justify-center gap-2 border-2 border-[#111111] bg-[#111111] px-5 text-xs font-mono font-bold text-[#fbf8f1] shadow-[3px_3px_0px_#777] hover:bg-[#222] active:translate-x-px active:translate-y-px active:shadow-none transition-all"
              >
                <span>View Projects</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="whitespace-nowrap inline-flex h-11 items-center justify-center gap-2 border-2 border-[#111111] bg-[#fbf8f1] px-4 text-xs font-mono font-bold text-[#111111] shadow-[3px_3px_0px_#111] hover:bg-[#eee6d3] active:translate-x-px active:translate-y-px active:shadow-none transition-all"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[#15803d]" />
                    <span className="text-[#15803d]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap inline-flex h-11 items-center justify-center gap-2 border-2 border-[#111111] bg-[#fbf8f1] px-4 text-xs font-mono font-bold text-[#111111] shadow-[3px_3px_0px_#111] hover:bg-[#eee6d3] active:translate-x-px active:translate-y-px active:shadow-none transition-all"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </article>

          {/* Candidate Dossier — no Label: pattern */}
          <aside className="w-full">
            <div className="paper-folded-corner border-2 border-[#111111] bg-[#fbf8f1] p-5 sm:p-6 shadow-[5px_5px_0px_#111111] paper-lift">
              <div className="border-b-2 border-[#111111] pb-3 text-center">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#777]">
                  Candidate Summary
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-black text-[#111111] uppercase tracking-tight mt-0.5">
                  Quick Profile
                </h3>
              </div>

              {/* Info cards — no colon pattern */}
              <div className="mt-4 space-y-2 font-mono text-xs">
                <div className="bg-[#f4eee1] border border-[#111111]/20 px-3 py-2">
                  <p className="text-[9px] uppercase tracking-widest text-[#888] mb-0.5">Full Name</p>
                  <p className="font-bold text-[#111]">Muhamad Ariel Gunawan</p>
                </div>

                <div className="bg-[#fee2e2] border border-[#991b1b]/30 px-3 py-2">
                  <p className="text-[9px] uppercase tracking-widest text-[#888] mb-0.5">Availability</p>
                  <p className="font-bold text-[#991b1b]">Immediately Available</p>
                </div>

                <div className="bg-[#f4eee1] border border-[#111111]/20 px-3 py-2">
                  <p className="text-[9px] uppercase tracking-widest text-[#888] mb-0.5">Target Role</p>
                  <p className="font-bold text-[#111]">Full Stack / Backend Developer</p>
                </div>

                <div className="bg-[#f4eee1] border border-[#111111]/20 px-3 py-2">
                  <p className="text-[9px] uppercase tracking-widest text-[#888] mb-0.5">Experience</p>
                  <p className="font-bold text-[#111]">BRIDA Kota Semarang (Internship)</p>
                </div>

                <div className="bg-[#f4eee1] border border-[#111111]/20 px-3 py-2">
                  <p className="text-[9px] uppercase tracking-widest text-[#888] mb-0.5">Based in</p>
                  <p className="font-bold text-[#111]">Semarang, Central Java</p>
                </div>

                <div className="bg-[#f0fdf4] border border-[#15803d]/30 px-3 py-2">
                  <p className="text-[9px] uppercase tracking-widest text-[#888] mb-0.5">Certification</p>
                  <p className="font-bold text-[#15803d]">MikroTik MTCNA (2026)</p>
                </div>

                <div className="bg-[#f4eee1] border border-[#111111]/20 px-3 py-2">
                  <p className="text-[9px] uppercase tracking-widest text-[#888] mb-0.5">Work Setup</p>
                  <p className="font-bold text-[#111]">On-site / Hybrid / Remote</p>
                </div>
              </div>

              {/* Stack pills */}
              <div className="mt-4 border-t-2 border-[#111111] pt-4">
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#777] mb-2">
                  Core Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["PHP 8+", "Laravel", "REST API", "Next.js", "React", "TypeScript", "PostgreSQL", "MySQL", "Docker", "MikroTik"].map((sk) => (
                    <span
                      key={sk}
                      className="border border-[#111111] bg-[#f4eee1] px-2 py-0.5 font-mono text-[10px] font-bold text-[#111111]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-5 border-t border-[#111111]/20 pt-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Ariel%20Gunawan`}
                  className="flex w-full items-center justify-center gap-2 border-2 border-[#111111] bg-[#111111] py-3 font-mono text-xs font-bold text-[#fbf8f1] shadow-[3px_3px_0px_#555] hover:bg-[#333] active:translate-x-px active:translate-y-px active:shadow-none transition-all"
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact for Interview</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
