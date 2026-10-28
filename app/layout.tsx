import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Muhamad Ariel Gunawan | Full Stack Developer (Laravel & Next.js)",
  description:
    "Portfolio Muhamad Ariel Gunawan - Full Stack Developer spesialisasi backend Laravel RESTful API, frontend Next.js/React, perancangan database PostgreSQL/MySQL, dan sertifikasi jaringan MikroTik MTCNA.",
  keywords: [
    "Muhamad Ariel Gunawan",
    "Ariel Gunawan",
    "sketchips",
    "Full Stack Developer Indonesia",
    "Laravel Developer Semarang",
    "Next.js Developer",
    "Backend Developer",
    "RESTful API",
    "PostgreSQL",
    "MikroTik MTCNA",
    "Web Developer Semarang",
  ],
  authors: [{ name: "Muhamad Ariel Gunawan", url: "https://github.com/sketchips" }],
  creator: "Muhamad Ariel Gunawan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sketchips.github.io",
    title: "Muhamad Ariel Gunawan | Full Stack Developer",
    description:
      "Full Stack Developer dengan keahlian Laravel, Next.js, RESTful API, PostgreSQL, dan infrastruktur jaringan bersertifikat MikroTik MTCNA.",
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
