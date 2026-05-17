"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangContext";

const SECTIONS = [
  { id: "open", en: "Open",       zh: "序" },
  { id: "s1",   en: "Biology",    zh: "生物" },
  { id: "s2",   en: "Attention",  zh: "注意力" },
  { id: "s3",   en: "Reality",    zh: "现实" },
  { id: "s4",   en: "History",    zh: "历史" },
  { id: "s5",   en: "Philosophy", zh: "哲学" },
  { id: "s6",   en: "AI Era",     zh: "AI 时代" },
  { id: "s7",   en: "Escape",     zh: "出口" },
  { id: "end",  en: "Coda",       zh: "尾声" },
];

export default function Nav() {
  const { lang, setLang } = useLang();
  const [active, setActive] = useState("open");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-void/70 backdrop-blur-xl border-b border-rule" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-5 md:px-10 py-3 flex items-center justify-between gap-6">
        <a href="#open" className="flex items-center gap-3 shrink-0" aria-label="Top">
          <span className="relative w-7 h-7 grid place-items-center">
            <span className="absolute inset-0 rounded-full border border-signal/50" />
            <span className="relative w-2 h-2 rounded-full bg-dopa shadow-dopa animate-breathe" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-[15px] tracking-tight text-bone">
              The Architecture of Boredom
            </div>
            <div className="font-han text-[10px] tracking-[0.3em] text-signal/80">
              无聊的建筑
            </div>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-colors ${
                active === s.id
                  ? "text-signal bg-signal/10 border border-signal/30"
                  : "text-boneFaint hover:text-bone border border-transparent"
              }`}
            >
              {lang === "zh" ? s.zh : s.en}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-1 text-[11px] font-mono tracking-widest rounded ${
              lang === "en"
                ? "text-signal border border-signal/40"
                : "text-boneFaint border border-transparent hover:text-bone"
            }`}
            aria-pressed={lang === "en"}
          >EN</button>
          <button
            onClick={() => setLang("zh")}
            className={`px-2 py-1 text-[11px] font-han tracking-widest rounded ${
              lang === "zh"
                ? "text-signal border border-signal/40"
                : "text-boneFaint border border-transparent hover:text-bone"
            }`}
            aria-pressed={lang === "zh"}
          >中文</button>
        </div>
      </div>
    </header>
  );
}
