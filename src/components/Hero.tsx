"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const VoidShader = dynamic(() => import("./VoidShader"), { ssr: false });
const NeuralField = dynamic(() => import("./NeuralField"), { ssr: false });

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="open" ref={ref} className="relative min-h-screen w-full overflow-hidden">
      <VoidShader />
      <NeuralField density={55} />

      <div className="absolute inset-0 bg-gradient-to-b from-void/35 via-transparent to-void pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,_transparent_0%,_rgba(2,4,9,0.6)_72%)] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center px-5 md:px-10 max-w-[1480px] mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.0 }}
          className="flex items-center gap-3 mb-10 md:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-dopa shadow-dopa animate-breathe" />
          <span className="eyebrow">Psyverse · An essay in 7 frames</span>
          <span className="font-han text-[10px] tracking-[0.3em] text-signal/70">
            七章随笔
          </span>
        </motion.div>

        <div className="space-y-7 md:space-y-10 mb-10 md:mb-14 max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.4 }}
            className="font-display text-2xl md:text-3xl italic text-bone/55"
          >
            You thought boredom meant nothing was happening.
            <span className="font-han block not-italic text-xl md:text-2xl text-boneFaint mt-1">
              你以为无聊意味着什么都没发生。
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1.4 }}
            className="font-display text-2xl md:text-3xl italic text-bone/80"
          >
            It is a signal that your mind <em className="text-signal not-italic">can no longer find reality</em>.
            <span className="font-han block not-italic text-xl md:text-2xl text-boneDim mt-1">
              它是一个信号 —— 你的大脑已经<span className="text-signal">找不到现实</span>。
            </span>
          </motion.p>
        </div>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.3em", filter: "blur(14px)" }}
          animate={{ opacity: 1, letterSpacing: "-0.03em", filter: "blur(0px)" }}
          transition={{ delay: 3.0, duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.92] tracking-tight"
        >
          <span className="text-overload-grad glitch" data-text="The Architecture of Boredom">
            The Architecture of Boredom
          </span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7, duration: 1.6 }}
          className="font-han text-4xl md:text-6xl lg:text-7xl mt-2 md:mt-4 text-bone/90"
        >
          《无聊的建筑》
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 4.3, duration: 1.4 }}
          className="mt-10 md:mt-14 max-w-3xl text-base md:text-xl text-bone/75 leading-relaxed"
        >
          A bilingual cinematic essay on boredom as a biological signal —
          dopamine economics, the industrialization of attention, hyperreality,
          and the post-modern meaning crisis in the age of AI.
          <span className="font-han block mt-3 text-base md:text-lg text-boneDim">
            一篇双语电影感长文：无聊作为生物信号、多巴胺经济学、注意力工业化、超现实，
            以及 AI 时代的后现代意义危机。
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 5.0, duration: 1.4 }}
          className="mt-14 md:mt-20 flex items-center gap-6"
        >
          <a href="#s1" className="group inline-flex items-center gap-3 text-bone/75 hover:text-signal transition-colors">
            <span className="w-9 h-9 rounded-full border border-bone/30 group-hover:border-signal/60 grid place-items-center">
              <span className="block w-0 h-0 border-t-4 border-x-[5px] border-x-transparent border-t-bone/70 group-hover:border-t-signal translate-y-0.5" />
            </span>
            <div>
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase">Descend</div>
              <div className="font-han text-[10px] tracking-[0.3em] text-signal/70">下行</div>
            </div>
          </a>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-signal/40 to-transparent" />
          <div className="hidden md:block font-mono text-[10px] tracking-[0.3em] text-boneFaint">007 / FRAMES</div>
        </motion.div>
      </motion.div>

      <div className="absolute top-24 left-5 md:left-10 z-10 font-mono text-[10px] tracking-[0.25em] text-signal/55 leading-relaxed hide-mobile">
        <div>SYS · DOPAMINE_VOID</div>
        <div>SIGNAL · WEAK</div>
        <div>OBSERVER · YOU</div>
      </div>
      <div className="absolute top-24 right-5 md:right-10 z-10 text-right font-mono text-[10px] tracking-[0.25em] text-dopa/65 leading-relaxed hide-mobile">
        <div>ATTENTION · 13.2s</div>
        <div>STIMULUS · ∞</div>
        <div>STATUS · COLLAPSING</div>
      </div>
    </section>
  );
}
