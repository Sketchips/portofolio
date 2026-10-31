"use client";

import { useState } from "react";
import { EXPERIENCES, RECRUITER_FAQS } from "@/data/portfolio-data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="experience" className="bg-[#f4eee1] py-14 sm:py-20 border-b-4 border-[#111111] text-[#111111]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="border-b-2 border-[#111111] pb-5">
          <div className="inline-block bg-[#111111] text-[#fbf8f1] px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest">
            Work History &amp; Experience
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111]">
            Experience &amp; Projects
          </h2>
          <p className="mt-2 font-serif text-base sm:text-lg italic text-[#444444] max-w-2xl">
            Internship experience and contributions to team projects.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-8 space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <article
              key={exp.company}
              className="paper-lift paper-folded-corner border-2 border-[#111111] bg-[#fbf8f1] p-6 sm:p-8 shadow-[5px_5px_0px_#111111]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#111111] pb-4 gap-2">
                <div>
                  <span className="font-mono text-xs font-bold text-[#991b1b] uppercase">
                    0{idx + 1} · {exp.type.toUpperCase()}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-black text-[#111111]">
                    {exp.role}
                  </h3>
                  <p className="font-serif text-base font-bold text-[#333333] mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end font-mono text-xs text-[#555555]">
                  <span>{exp.period}</span>
                  <span className="text-[#111111] font-bold">{exp.location}</span>
                </div>
              </div>

              <p className="mt-4 font-sans text-xs sm:text-sm leading-relaxed text-[#222222]">
                {exp.summary}
              </p>

              <div className="mt-4 border-t border-b border-[#111111]/20 py-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#111111] block mb-2">
                  Responsibilities &amp; Contributions
                </span>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs sm:text-sm text-[#333333]">
                  {exp.tasks.map((task, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="font-mono font-bold text-[#991b1b] shrink-0 mt-0.5">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-1.5 font-mono text-xs pt-1">
                <span className="font-bold text-[#111111] mr-1">Stack</span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#111111] bg-[#f4eee1] px-2 py-0.5 font-semibold text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Recruiter FAQ */}
        <div id="faq" className="mt-12 sm:mt-16 scroll-mt-20">
          <div className="paper-lift border-2 border-[#111111] bg-[#fbf8f1] p-6 sm:p-8 shadow-[5px_5px_0px_#111111]">
            <div className="border-b-2 border-[#111111] pb-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#991b1b]">
                Recruiter Guide
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#111111] uppercase">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="mt-5 space-y-3 font-sans">
              {RECRUITER_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <div
                    key={faq.question}
                    className="border border-[#111111] bg-[#f4eee1]"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      type="button"
                      className="flex w-full items-center justify-between p-4 text-left font-serif font-black text-sm sm:text-base text-[#111111] hover:bg-[#eee6d3] transition"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 shrink-0 text-[#111111]" />
                      ) : (
                        <ChevronDown className="h-4 w-4 shrink-0 text-[#111111]" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#111111]/20 bg-[#fbf8f1] p-4 text-xs sm:text-sm text-[#333333] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
