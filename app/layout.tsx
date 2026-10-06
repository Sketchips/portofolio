import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhamad Ariel Gunawan - Full Stack Developer",
  description:
    "Portfolio full stack developer dengan pengalaman Laravel, React, Next.js, RESTful API, database, dan basic deployment.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
