import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://boredom-architecture.psyverse.fun"),
  title: "The Architecture of Boredom | 无聊的建筑",
  description:
    "A bilingual cinematic essay on boredom as a biological signal — dopamine economics, attention industrialization, hyperreality, post-modern meaning collapse, and the AI-era future of human cognition.",
  keywords: [
    "boredom", "无聊", "attention economy", "dopamine", "hyperreality",
    "infinite scroll", "Byung-Chul Han", "Baudrillard", "Heidegger",
    "AI civilization", "post-human", "psyverse",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "The Architecture of Boredom · 无聊的建筑 — Attention, Dopamine, Reality" }],
    title: "The Architecture of Boredom — Boredom is a signal, not an emptiness",
    description:
      "Boredom is not empty. It is a signal that your mind can no longer find reality. A bilingual essay in 8 frames.",
    url: "https://boredom-architecture.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "The Architecture of Boredom · 无聊的建筑",
    description:
      "Boredom is not empty. 无聊不是空虚 —— 而是大脑找不到现实的信号。",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#020409" },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
