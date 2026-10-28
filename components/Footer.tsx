import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-[#111111] bg-[#111111] py-8 text-[#fbf8f1] font-mono text-xs">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div>
          <span className="font-serif text-sm font-bold uppercase tracking-wider block sm:inline">
            MUHAMAD ARIEL GUNAWAN •
          </span>{" "}
          <span>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f0b457] underline underline-offset-2 transition"
          >
            GitHub: @{PERSONAL_INFO.githubHandle}
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#f0b457] underline underline-offset-2 transition"
          >
            {PERSONAL_INFO.email}
          </a>

          <a
            href="#headline"
            className="inline-flex items-center gap-1 border border-[#fbf8f1]/30 px-2 py-0.5 hover:bg-[#fbf8f1] hover:text-[#111111] transition"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
