"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const VoidShader = dynamic(() => import("./VoidShader"), { ssr: false });
const NeuralField = dynamic(() => import("./NeuralField"), { ssr: false });

export default function Final() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleBlur    = useTransform(scrollYProgress, [0, 0.4, 0.85, 1], [12, 0, 0, 6]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.45, 0.85, 1], [0, 1, 1, 0.6]);
  const blur = useTransform(titleBlur, (v) => `blur(${v}px)`);

  return (
    <section id="end" ref={ref} className="relative border-t border-rule overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <VoidShader intensity={1.35} />
        <NeuralField density={75} color="126,255,154" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent to-void" />
      </div>

      <div className="max-w-[1480px] mx-auto px-5 md:px-10 py-44 md:py-56">
        <Reveal>
          <div className="flex items-baseline gap-6 mb-10 md:mb-16">
            <span className="font-mono text-[12px] tracking-[0.3em] text-dopa">VIII · 008 · CODA</span>
            <div className="flex-1 divider" />
            <div className="text-right">
              <div className="eyebrow">Final transmission</div>
              <div className="font-han text-[10px] tracking-[0.3em] text-signal/70 mt-1">最终传输</div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-14 md:space-y-20 max-w-5xl">
          <Reveal>
            <p className="font-display text-3xl md:text-5xl text-bone leading-tight italic">
              You thought boredom meant nothing was happening.
            </p>
            <p className="font-han text-2xl md:text-3xl text-boneDim mt-3 leading-snug">
              你以为无聊意味着什么都没发生。
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-3xl md:text-5xl text-bone/85 leading-tight">
              Now you understand —
            </p>
            <p className="font-han text-2xl md:text-3xl text-boneDim mt-3 leading-snug">
              现在你明白了 ——
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-3xl md:text-5xl text-cold-grad leading-tight">
              modern civilization destroyed humanity's ability to experience reality.
            </p>
            <p className="font-han text-2xl md:text-3xl text-dopa-grad mt-3 leading-snug">
              是现代文明摧毁了人类感受现实的能力。
            </p>
          </Reveal>
        </div>

        <motion.div
          style={{ filter: blur, opacity: titleOpacity }}
          className="mt-44 md:mt-60 text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.45em] text-signal uppercase mb-6">
            FINAL TAGLINE
          </p>
          <h2 className="font-display text-[12vw] md:text-[7.5vw] leading-[1.04] tracking-tight">
            <span className="text-cold-grad block">BOREDOM</span>
            <span className="text-cold-grad block">IS NOT EMPTY.</span>
          </h2>
          <p className="font-han text-3xl md:text-5xl text-bone/85 mt-6">
            无聊，不是空虚。
          </p>
          <h2 className="font-display text-[12vw] md:text-[6vw] leading-[1.1] tracking-tight mt-10">
            <span className="text-dopa-grad block">IT IS A SIGNAL</span>
            <span className="text-dopa-grad block">THAT YOUR MIND</span>
            <span className="text-dopa-grad block">CAN NO LONGER FIND</span>
            <span className="text-dopa-grad block">REALITY.</span>
          </h2>
          <p className="font-han text-3xl md:text-5xl text-bone/85 mt-6">
            它是一个信号 ——
          </p>
          <p className="font-han text-3xl md:text-5xl text-bone/85">
            你的大脑，
          </p>
          <p className="font-han text-3xl md:text-5xl text-bone/85">
            已经找不到现实。
          </p>
        </motion.div>

        <div className="mt-32 md:mt-44 grid md:grid-cols-2 gap-10 max-w-5xl">
          <Reveal>
            <p className="text-boneDim leading-relaxed">
              This essay is part of the Psyverse — a portfolio of small,
              cinematic, bilingual sites that try to take seriously what is
              happening to civilization while it is happening. There are more
              at psyverse.fun.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-han text-boneDim leading-relaxed">
              本文是 Psyverse 的一部分 —— 一系列小型、电影感、双语网站，
              试图在文明正在发生时认真对待它。更多内容在 psyverse.fun。
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href="https://psyverse.fun"
              target="_blank" rel="noopener"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-signal/40 text-bone/85 hover:text-signal hover:border-signal/70 transition-colors"
            >
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase">Enter the Psyverse</span>
              <span className="font-han text-[11px] tracking-[0.3em] text-signal/70">进入 Psyverse</span>
              <span>→</span>
            </a>
            <a
              href="#open"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-rule text-boneDim hover:text-bone hover:border-bone/40 transition-colors"
            >
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase">Begin again</span>
              <span className="font-han text-[11px] tracking-[0.3em] text-signal/70">从头开始</span>
              <span>↑</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-24 text-center font-mono text-[10px] tracking-[0.4em] text-signal/40">
          END · OF · SIGNAL · 信号终止
        </div>
      </div>
    </section>
  );
}
