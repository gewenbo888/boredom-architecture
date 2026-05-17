"use client";

import Reveal from "./Reveal";

type Accent = "signal" | "dopa" | "synth" | "burn" | "gold";
const accentText: Record<Accent, string> = {
  signal: "text-signal",
  dopa:   "text-dopa",
  synth:  "text-synth",
  burn:   "text-burn",
  gold:   "text-gold",
};
const accentBorder: Record<Accent, string> = {
  signal: "border-signal/30",
  dopa:   "border-dopa/30",
  synth:  "border-synth/30",
  burn:   "border-burn/30",
  gold:   "border-gold/30",
};

export function Lede({ en, zh }: { en: React.ReactNode; zh: React.ReactNode }) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-6xl">
        <p className="font-display text-2xl md:text-3xl leading-snug text-bone/90">{en}</p>
        <p className="font-han text-xl md:text-2xl leading-relaxed text-boneDim">{zh}</p>
      </div>
    </Reveal>
  );
}

export function Aphorism({
  en, zh, cite, accent = "signal",
}: { en: string; zh: string; cite?: string; accent?: Accent }) {
  return (
    <Reveal>
      <figure className="relative max-w-4xl">
        <span
          aria-hidden
          className={`font-display text-[120px] leading-none absolute -top-10 -left-3 select-none opacity-20 ${accentText[accent]}`}
        >“</span>
        <blockquote className={`font-display text-2xl md:text-3xl italic leading-snug ${accent === "signal" ? "text-bone/95" : accentText[accent]}`}>
          {en}
        </blockquote>
        <p className="font-han text-xl md:text-2xl text-boneDim mt-2">{zh}</p>
        {cite && <figcaption className="eyebrow mt-4">— {cite}</figcaption>}
      </figure>
    </Reveal>
  );
}

export function Card({
  num, enTitle, zhTitle, enBody, zhBody, accent = "signal",
}: {
  num: string;
  enTitle: string; zhTitle: string;
  enBody: string;  zhBody: string;
  accent?: Accent;
}) {
  return (
    <Reveal>
      <div className={`glass rounded-lg p-6 md:p-7 h-full border ${accentBorder[accent]}`}>
        <div className={`font-mono text-[11px] tracking-[0.3em] ${accentText[accent]}`}>{num}</div>
        <h3 className="font-display text-xl md:text-2xl mt-2 text-bone">{enTitle}</h3>
        <h4 className="font-han text-base md:text-lg text-boneDim mt-0.5">{zhTitle}</h4>
        <p className="text-sm md:text-base text-bone/75 mt-4 leading-relaxed">{enBody}</p>
        <p className="font-han text-sm md:text-base text-boneFaint mt-2 leading-relaxed">{zhBody}</p>
      </div>
    </Reveal>
  );
}

export function FlowRow({
  steps, accent = "signal",
}: { steps: { en: string; zh: string }[]; accent?: Accent }) {
  return (
    <Reveal>
      <div className="overflow-x-auto -mx-5 md:mx-0 px-5 md:px-0">
        <div className="flex items-stretch gap-3 min-w-max">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`px-4 py-3 rounded glass border ${accentBorder[accent]}`}>
                <div className="font-display text-base md:text-lg whitespace-nowrap text-bone">{s.en}</div>
                <div className="font-han text-xs md:text-sm text-boneFaint whitespace-nowrap mt-0.5">{s.zh}</div>
              </div>
              {i !== steps.length - 1 && <span className={`font-mono text-lg ${accentText[accent]}`}>→</span>}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Stat({
  value, enLabel, zhLabel, hint, accent = "signal",
}: { value: string; enLabel: string; zhLabel: string; hint?: string; accent?: Accent }) {
  return (
    <Reveal>
      <div className="glass rounded p-6 halo">
        <div className={`bignum text-5xl md:text-6xl ${accentText[accent]}`}>{value}</div>
        <div className="mt-3 text-bone/85 text-sm md:text-base">{enLabel}</div>
        <div className="font-han text-boneFaint text-xs md:text-sm">{zhLabel}</div>
        {hint && <div className="eyebrow mt-3">{hint}</div>}
      </div>
    </Reveal>
  );
}

export function MonoList({
  items, accent = "signal",
}: { items: { en: string; zh: string }[]; accent?: Accent }) {
  return (
    <Reveal>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-4">
            <span className={`font-mono text-[11px] mt-2 shrink-0 w-8 ${accentText[accent]}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="text-bone/90 text-base md:text-lg leading-snug">{it.en}</div>
              <div className="font-han text-boneDim text-sm md:text-base leading-snug">{it.zh}</div>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Reality vs Feed two-panel comparator. */
export function RealityFeed({
  realityTitle, realityZh, realityBody, realityBodyZh,
  feedTitle, feedZh, feedBody, feedBodyZh,
}: {
  realityTitle: string; realityZh: string; realityBody: string; realityBodyZh: string;
  feedTitle: string;    feedZh: string;    feedBody: string;    feedBodyZh: string;
}) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-2 gap-3 md:gap-5">
        <div className="rounded-lg p-6 md:p-7 border border-dopa/25 bg-gradient-to-br from-dopa/[0.05] to-transparent">
          <div className="eyebrow text-dopa mb-3">REALITY · 现实</div>
          <h4 className="font-display text-2xl text-bone">{realityTitle}</h4>
          <h5 className="font-han text-lg text-boneDim mt-0.5">{realityZh}</h5>
          <p className="mt-4 text-bone/80 text-sm md:text-base leading-relaxed">{realityBody}</p>
          <p className="font-han text-boneFaint text-sm md:text-base mt-2 leading-relaxed">{realityBodyZh}</p>
        </div>
        <div className="rounded-lg p-6 md:p-7 border border-burn/30 bg-gradient-to-br from-burn/[0.05] to-transparent decay">
          <div className="eyebrow text-burn mb-3">FEED · 信息流</div>
          <h4 className="font-display text-2xl text-bone">{feedTitle}</h4>
          <h5 className="font-han text-lg text-boneDim mt-0.5">{feedZh}</h5>
          <p className="mt-4 text-bone/80 text-sm md:text-base leading-relaxed">{feedBody}</p>
          <p className="font-han text-boneFaint text-sm md:text-base mt-2 leading-relaxed">{feedBodyZh}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function TimelineRow({
  era, enTitle, zhTitle, enBody, zhBody,
}: { era: string; enTitle: string; zhTitle: string; enBody: string; zhBody: string }) {
  return (
    <Reveal>
      <div className="grid grid-cols-[100px_1fr] md:grid-cols-[180px_1fr] gap-4 md:gap-8 border-t border-rule py-7">
        <div className="eyebrow text-signal">{era}</div>
        <div>
          <h4 className="font-display text-2xl md:text-3xl text-bone leading-tight">{enTitle}</h4>
          <h5 className="font-han text-lg md:text-xl text-boneDim mt-0.5">{zhTitle}</h5>
          <p className="text-bone/75 mt-3 max-w-3xl leading-relaxed">{enBody}</p>
          <p className="font-han text-boneFaint mt-1 max-w-3xl leading-relaxed">{zhBody}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function Note({
  en, zh, accent = "signal",
}: { en: string; zh: string; accent?: Accent }) {
  return (
    <Reveal>
      <div className={`border-l-2 ${accentBorder[accent]} pl-5 my-6 max-w-4xl`}>
        <p className="text-bone/85 italic">{en}</p>
        <p className="font-han text-boneDim mt-1">{zh}</p>
      </div>
    </Reveal>
  );
}

export function Marquee({ items }: { items: { en: string; zh: string }[] }) {
  const all = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-rule py-3">
      <div className="marquee gap-10 text-bone/65">
        {all.map((it, i) => (
          <div key={i} className="flex items-baseline gap-3 px-3 whitespace-nowrap">
            <span className="font-display text-xl text-bone">{it.en}</span>
            <span className="font-han text-base text-signal">{it.zh}</span>
            <span className="text-signal/40">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
