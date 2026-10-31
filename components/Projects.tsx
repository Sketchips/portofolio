"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/portfolio-data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("lms-ai");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "fullstack") return p.category.toLowerCase().includes("full stack") || p.category.toLowerCase().includes("gis");
    if (filter === "backend") return p.category.toLowerCase().includes("backend") || p.category.toLowerCase().includes("penilaian");
    if (filter === "ai") return p.category.toLowerCase().includes("ai") || p.category.toLowerCase().includes("ml");
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="bg-[#f4eee1] py-14 sm:py-20 border-t-4 border-b-4 border-[#111111] text-[#111111]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b-2 border-[#111111] pb-6">
          <div>
            <div className="inline-block bg-[#111111] text-[#fbf8f1] px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest">
              Engineering &amp; Systems Work
            </div>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111]">
              Selected Projects
            </h2>
            <p className="mt-2 font-serif text-base sm:text-lg italic text-[#444444] max-w-2xl">
              Case studies built from relational database design and REST API logic through to the user interface.
            </p>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap items-center gap-1 border-2 border-[#111111] bg-[#fbf8f1] p-1 font-mono text-xs font-bold shrink-0">
            {[
              { id: "all", label: "ALL PROJECTS" },
              { id: "fullstack", label: "FULL STACK" },
              { id: "backend", label: "BACKEND & API" },
              { id: "ai", label: "AI & ML" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                type="button"
                className={`whitespace-nowrap px-3 py-1.5 transition ${
                  filter === tab.id
                    ? "bg-[#111111] text-[#fbf8f1]"
                    : "text-[#111111] hover:bg-[#eee6d3]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="mt-10 space-y-8">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className="paper-lift paper-folded-corner border-2 border-[#111111] bg-[#fbf8f1] p-6 sm:p-8 shadow-[5px_5px_0px_#111111]"
              >
                {/* Article Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#111111] pb-3 gap-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#555555]">
                    <span className="bg-[#111111] text-[#fbf8f1] px-1.5 py-0.5">
                      0{index + 1}
                    </span>
                    <span>•</span>
                    <span className="text-[#991b1b]">{project.period}</span>
                    <span>•</span>
                    <span>{project.category.toUpperCase()}</span>
                    <span>•</span>
                    <span>{project.teamSize.toUpperCase()}</span>
                  </div>

                  <span className="font-mono text-xs font-semibold text-[#333333] border border-[#111111]/30 bg-[#f4eee1] px-2 py-0.5 self-start sm:self-auto">
                    {project.role}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-black text-[#111111] leading-tight">
                  {project.title}
                </h3>
                <p className="mt-1 font-serif text-sm sm:text-base italic text-[#444444]">
                  {project.subtitle}
                </p>

                {/* Architecture Banner */}
                {project.architecture && (
                  <div className="mt-4 border border-[#111111] bg-[#f4eee1] p-3 font-mono text-xs">
                    <span className="font-bold text-[#111111] block sm:inline mr-2">
                      ARCHITECTURE
                    </span>
                    <span className="text-[#333333]">{project.architecture}</span>
                  </div>
                )}

                {/* Problem vs Solution */}
                <div className="mt-5 grid gap-4 md:grid-cols-2 border-t border-b border-[#111111]/30 py-4 font-sans text-xs sm:text-sm">
                  <div className="md:border-r md:border-[#111111]/20 md:pr-4">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#991b1b] block mb-1">
                      Problem
                    </span>
                    <p className="text-[#333333] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#15803d] block mb-1">
                      Solution Built
                    </span>
                    <p className="text-[#333333] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Expandable Details */}
                {isExpanded && (
                  <div className="mt-5 bg-[#f4eee1] border border-[#111111] p-4 sm:p-5 animate-in fade-in duration-200">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#111111]/20 pb-2">
                      Features &amp; Implementation
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#222222] leading-relaxed"
                        >
                          <span className="font-mono font-bold text-[#991b1b] shrink-0 mt-0.5">
                            [{hIdx + 1}]
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Footer: Stack + Toggle */}
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-[#111111] bg-[#fbf8f1] px-2 py-0.5 font-semibold text-[#111111]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(project.id)}
                    type="button"
                    className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 border border-[#111111] bg-[#111111] px-3.5 py-1.5 font-mono text-xs font-bold text-[#fbf8f1] shadow-[2px_2px_0px_#555555] hover:bg-[#333333] active:translate-x-0.5 active:translate-y-0.5 transition-transform shrink-0"
                  >
                    <span>{isExpanded ? "CLOSE DETAILS" : "VIEW DETAILS"}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
