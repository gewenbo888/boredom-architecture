"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "zh";

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en", setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const v = (typeof window !== "undefined" ? localStorage.getItem("ba-lang") : null) as Lang | null;
    if (v === "en" || v === "zh") setLang(v);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ba-lang", lang);
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    }
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
