"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Check, Copy, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-[#fbf8f1] py-14 sm:py-20 text-[#111111]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="paper-lift paper-folded-corner border-4 border-[#111111] bg-[#fbf8f1] p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_#111111]">
          <div className="border-b-2 border-[#111111] pb-5">
            <span className="bg-[#111111] text-[#fbf8f1] px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest">
              Contact &amp; Correspondence
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111]">
              Contact Me
            </h2>
            <p className="mt-2 font-serif text-base sm:text-lg italic text-[#444444] max-w-2xl">
              Open to software engineering roles focused on full stack development and AI integration.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Left: Contact Info */}
            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div className="border border-[#111111] bg-[#f4eee1] p-4 shadow-[2px_2px_0px_#111111]">
                <p className="text-[#666666] text-[10px] uppercase tracking-widest mb-1">Email</p>
                <p className="font-bold text-[#111111] text-base">{PERSONAL_INFO.email}</p>
              </div>

              <div className="border border-[#111111] bg-[#f4eee1] p-4 shadow-[2px_2px_0px_#111111]">
                <p className="text-[#666666] text-[10px] uppercase tracking-widest mb-1">Location</p>
                <p className="font-bold text-[#111111] text-base">Semarang, Central Java, Indonesia</p>
                <p className="text-[11px] text-[#555555] mt-0.5">
                  Open to on-site, hybrid, or remote.
                </p>
              </div>

              <div className="border border-[#111111] bg-[#f4eee1] p-4 shadow-[2px_2px_0px_#111111]">
                <p className="text-[#666666] text-[10px] uppercase tracking-widest mb-1">Availability</p>
                <p className="font-bold text-[#991b1b] text-base">Immediately Available</p>
                <p className="text-[11px] text-[#555555] mt-0.5">
                  Available for technical assessments and interviews anytime.
                </p>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex flex-col justify-between border-2 border-[#111111] bg-[#f4eee1] p-6 shadow-[3px_3px_0px_#111111]">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#991b1b] block">
                  Get in Touch
                </span>
                <h3 className="mt-1 font-serif text-xl sm:text-2xl font-black text-[#111111]">
                  Contact Me Directly
                </h3>
                <p className="mt-2 font-sans text-xs text-[#444444] leading-relaxed">
                  Send an interview invitation or copy the email address to forward to your HR team or tech lead.
                </p>
              </div>

              <div className="paper-perforation my-4" />

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Ariel%20Gunawan`}
                  className="whitespace-nowrap flex items-center justify-center gap-2 border-2 border-[#111111] bg-[#111111] py-3 text-center font-bold text-[#fbf8f1] shadow-[3px_3px_0px_#555555] hover:bg-[#333333] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
                >
                  <Mail className="h-4 w-4" />
                  <span>SEND EMAIL</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="whitespace-nowrap flex w-full items-center justify-center gap-2 border-2 border-[#111111] bg-[#fbf8f1] py-3 text-center font-bold text-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#eee6d3] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-[#15803d]" />
                      <span className="text-[#15803d]">EMAIL COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap flex items-center justify-center gap-2 border-2 border-[#111111] bg-[#fbf8f1] py-3 text-center font-bold text-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#eee6d3] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GITHUB @sketchips</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap flex items-center justify-center gap-2 border-2 border-[#111111] bg-[#fbf8f1] py-3 text-center font-bold text-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#eee6d3] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
                >
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
