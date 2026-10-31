import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Software Engineer | Muhamad Ariel Gunawan",
  description:
    "Portfolio Muhamad Ariel Gunawan, Software Engineer focused on full stack web development and AI integration.",
  keywords: [
    "Muhamad Ariel Gunawan",
    "Ariel Gunawan",
    "sketchips",
    "Software Engineer",
    "Python AI Integration",
    "Next.js Developer",
    "Backend Developer",
    "RESTful API",
    "PostgreSQL",
    "AI Integration",
    "Web Developer Semarang",
  ],
  authors: [{ name: "Muhamad Ariel Gunawan", url: "https://github.com/sketchips" }],
  creator: "Muhamad Ariel Gunawan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sketchips.github.io",
    title: "Software Engineer",
    description:
      "Software Engineer dengan keahlian Laravel, Next.js, React, Python, dan AI integration.",
    siteName: "Portfolio Muhamad Ariel Gunawan",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#fbf8f1] text-[#111111] selection:bg-[#111111] selection:text-[#fbf8f1]">
        {children}
      </body>
    </html>
  );
}
