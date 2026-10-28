"use client";

import { SKILL_GROUPS, CERTIFICATIONS } from "@/data/portfolio-data";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#fbf8f1] py-14 sm:py-20 border-b-4 border-[#111111] text-[#111111]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="border-b-2 border-[#111111] pb-5">
          <div className="inline-block bg-[#111111] text-[#fbf8f1] px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest">
            Technical Skills &amp; Tooling
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111]">
            Technical Expertise
          </h2>
          <p className="mt-2 font-serif text-base sm:text-lg italic text-[#444444] max-w-2xl">
            Languages, frameworks, and tools I use to build and ship web applications.
          </p>
        </div>

        {/* 4-Column Skills Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="paper-lift border-2 border-[#111111] bg-[#fbf8f1] p-5 shadow-[4px_4px_0px_#111111] flex flex-col justify-between"
            >
              <div>
                <div className="border-b-2 border-[#111111] pb-3">
                  <h3 className="font-serif text-lg font-black text-[#111111] uppercase leading-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="mt-4 space-y-3 font-mono text-xs">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-[#111111]/15 pb-2.5 last:border-b-0"
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-[#111111]">{item.name}</span>
                        <span
                          className={`px-1.5 py-0.5 text-[10px] font-bold ${
                            item.level === "Core"
                              ? "bg-[#111111] text-[#fbf8f1]"
                              : "border border-[#111111] text-[#111111]"
                          }`}
                        >
                          {item.level}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-[#555555] leading-relaxed mt-1">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Card */}
        <div className="mt-10 paper-lift paper-folded-corner border-2 border-[#111111] bg-[#f4eee1] p-6 sm:p-8 shadow-[5px_5px_0px_#111111]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b-2 border-[#111111] pb-4">
            <div>
              <span className="bg-[#111111] text-[#fbf8f1] px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest">
                Official Certification
              </span>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111]">
                {CERTIFICATIONS[0].title}
              </h3>
              <p className="font-mono text-xs text-[#555555] mt-0.5">
                Issued by MikroTik Ltd. · 2026 · International Network Certification
              </p>
            </div>

            <div className="shrink-0 border-2 border-[#111111] bg-[#fbf8f1] px-4 py-2 font-mono text-xs font-bold shadow-[2px_2px_0px_#111111]">
              <span className="text-[#15803d]">MTCNA CERTIFIED (2026)</span>
            </div>
          </div>

          <p className="mt-4 font-sans text-xs sm:text-sm text-[#333333] leading-relaxed max-w-4xl">
            Official international certification covering MikroTik RouterOS configuration — static &amp; dynamic routing, Firewall NAT, Bandwidth Management (Queues), and network troubleshooting. This networking foundation supports my work managing inter-service communication, DNS and routing config, and Linux VPS maintenance (Nginx and Docker).
          </p>

          <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-[#111111]/20 font-mono text-xs">
            <span className="font-bold text-[#111111] py-1">Exam Topics</span>
            {CERTIFICATIONS[0].skills.map((s) => (
              <span
                key={s}
                className="border border-[#111111] bg-[#fbf8f1] px-2.5 py-1 font-semibold text-[#111111]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
