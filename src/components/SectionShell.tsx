"use client";

import { ReactNode } from "react";
import Reveal from "./Reveal";

export function SectionShell({
  id, index, kicker, kickerZh, headline, headlineZh,
  reveal, revealZh, children, className = "", tone = "signal",
}: {
  id: string; index: string;
  kicker: string; kickerZh: string;
  headline: string; headlineZh: string;
  reveal?: string; revealZh?: string;
  children: ReactNode;
  className?: string;
  tone?: "signal" | "dopa" | "synth" | "burn" | "gold";
}) {
  const toneAccent =
    tone === "dopa"  ? "text-dopa"  :
    tone === "synth" ? "text-synth" :
    tone === "burn"  ? "text-burn"  :
    tone === "gold"  ? "text-gold"  :
    "text-signal";
  return (
    <section id={id} className={`relative isolate border-t border-rule ${className}`}>
      <div className="max-w-[1480px] mx-auto px-5 md:px-10 py-28 md:py-40">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-10 md:mb-16">
            <span className={`font-mono text-[12px] tracking-[0.3em] ${toneAccent}`}>{index}</span>
            <div className="flex-1 divider" />
            <div className="text-right">
              <div className="eyebrow">{kicker}</div>
              <div className="font-han text-[10px] tracking-[0.3em] text-signal/70 mt-1">{kickerZh}</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight max-w-5xl">
            <span className="text-cold-grad">{headline}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="font-han text-2xl md:text-4xl text-bone/80 leading-snug mt-4 max-w-5xl">
            {headlineZh}
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24">{children}</div>

        {(reveal || revealZh) && (
          <Reveal delay={0.1}>
            <div className="mt-24 md:mt-32 border-t border-rule pt-12">
              <div className="eyebrow mb-3">— Reveal · 揭示</div>
              {reveal && (
                <p className={`font-display text-3xl md:text-5xl leading-tight ${
                  tone === "burn" ? "text-warning-grad" : "text-cold-grad"
                }`}>
                  {reveal}
                </p>
              )}
              {revealZh && (
                <p className="font-han text-2xl md:text-3xl text-bone/85 mt-3">
                  {revealZh}
                </p>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
