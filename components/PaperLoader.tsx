"use client";

import { useState, useEffect, useRef } from "react";

/* ─── timing constants (ms) ─────────────────────────────────────── */
const T_SHOW_CONTENT = 400;   // content fades in
const T_START_OPEN   = 1400;  // paper starts unfolding
const T_FADE_OUT     = 2200;  // overlay begins to fade
const T_UNMOUNT      = 2700;  // DOM removal

export default function PaperLoader() {
  const [phase, setPhase] = useState<"landing" | "open" | "fadeout" | "gone">("landing");
  const [showContent, setShowContent] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const dismiss = () => {
    clearTimers();
    setPhase("fadeout");
    setTimeout(() => setPhase("gone"), 350);
  };

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    const t1 = setTimeout(() => setShowContent(true), T_SHOW_CONTENT);
    const t2 = setTimeout(() => setPhase("open"), T_START_OPEN);
    const t3 = setTimeout(() => setPhase("fadeout"), T_FADE_OUT);
    const t4 = setTimeout(() => setPhase("gone"), T_UNMOUNT);
    timers.current = [t1, t2, t3, t4];
    return clearTimers;
  }, []);

  if (phase === "gone") return null;

  return (
    <aside
      aria-label="Intro animation"
      onClick={dismiss}
      className={[
        "paper-loader-overlay fixed inset-0 z-[100]",
        "flex items-center justify-center",
        "bg-[#0d0d0d] px-4",
        "transition-opacity duration-500",
        phase === "fadeout" ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
    >
      {/* Skip button */}
      <button
        onClick={(e) => { e.stopPropagation(); dismiss(); }}
        type="button"
        className="absolute top-4 right-4 z-20 flex items-center gap-1.5 border border-white/20 bg-white/10 px-3 py-1 font-mono text-[11px] text-white/70 hover:bg-white/20 hover:text-white transition-colors"
      >
        Lewati →
      </button>

      {/* ── Paper wrapper ── */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[480px]"
        style={{
          /* landing: tilted and slightly above; open: flat and upright */
          transform: phase === "landing"
            ? "translateY(-20px) rotate(-2.5deg) scale(0.96)"
            : "translateY(0) rotate(0deg) scale(1)",
          opacity: showContent ? 1 : 0,
          transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease",
        }}
      >
        {/* drop shadow block (simulates thickness) */}
        <div
          className="absolute inset-0 border-4 border-[#111] bg-[#111]"
          style={{ transform: "translate(8px,8px)", zIndex: 0 }}
        />

        {/* The actual paper sheet */}
        <div
          className="relative z-10 border-4 border-[#111] bg-[#fbf8f1] text-[#111] overflow-hidden"
          style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.7)" }}
        >

          {/* ── TOP HALF (above fold) ── */}
          <div className="p-6 sm:p-8 border-b-2 border-dashed border-[#111]">
            {/* dateline row */}
            <div className="flex items-center justify-between border-b border-[#111] pb-2 mb-4 font-mono text-[9px] sm:text-[10px] text-[#666]">
              <span>EDISI 2026</span>
              <span className="font-black tracking-widest text-[#991b1b] uppercase text-[9px]">
                ◼ Dokumen Resmi
              </span>
              <span>Semarang, ID</span>
            </div>

            {/* masthead */}
            <div className="text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#888] mb-1">
                Software Development Portfolio
              </p>
              <h1 className="font-serif text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-[#111]">
                Muhamad Ariel Gunawan
              </h1>
              <div className="mt-2 mx-auto inline-block border-t border-b border-[#111] py-1 font-mono text-[10px] sm:text-[11px] font-bold text-[#111] px-4">
                Full Stack Developer · Laravel &amp; Next.js
              </div>
            </div>

            <p className="mt-3 font-serif text-xs italic text-center text-[#555]">
              &ldquo;Clean backend, responsive frontend, certified networking foundation.&rdquo;
            </p>
          </div>

          {/* ── CENTER FOLD ── */}
          <div className="bg-[#efe8d8] border-t border-b border-[#111]/40 py-1.5 px-4 flex items-center justify-between font-mono text-[9px] text-[#888] select-none">
            <span className="tracking-widest">· · · · · · · · · · · ·</span>
            <span className="uppercase tracking-widest font-bold text-[#666] text-[9px]">
              {phase === "open" ? "Loading portfolio…" : "Folded print edition"}
            </span>
            <span className="tracking-widest">· · · · · · · · · · · ·</span>
          </div>

          {/* ── BOTTOM HALF ── unfolds below the fold crease */}
          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{
              maxHeight: phase === "open" ? "160px" : "0px",
              opacity: phase === "open" ? 1 : 0,
            }}
          >
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-xs">
              <div>
                <span className="block text-[9px] text-[#888] uppercase tracking-widest mb-1">
                  Core Stack
                </span>
                <span className="font-bold text-[#111] text-[11px]">
                  Laravel · Next.js · PostgreSQL · MikroTik MTCNA
                </span>
              </div>

              <button
                onClick={dismiss}
                type="button"
                className="shrink-0 inline-flex items-center justify-center gap-1.5 border-2 border-[#111] bg-[#111] px-5 py-2.5 font-bold text-[#fbf8f1] text-xs shadow-[2px_2px_0_#555] hover:bg-[#333] active:translate-x-px active:translate-y-px transition-all"
              >
                Open Now →
              </button>
            </div>
          </div>
        </div>

        {/* desk surface hint */}
        <p className="text-center font-mono text-[10px] text-[#666] mt-3 select-none">
          {phase === "open" ? "Loading…" : "Click anywhere to skip"}
        </p>
      </div>
    </aside>
  );
}
