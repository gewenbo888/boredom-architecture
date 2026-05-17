import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void:     "#020409",
        ink:      "#06080f",
        carbon:   "#0c1018",
        line:     "rgba(180, 200, 230, 0.08)",
        rule:     "rgba(180, 200, 230, 0.18)",
        bone:     "#dbe1ec",
        boneDim:  "rgba(219, 225, 236, 0.72)",
        boneFaint:"rgba(219, 225, 236, 0.35)",
        // dopamine signal — sickly green
        dopa:     "#7eff9a",
        // attention extraction — cold blue
        signal:   "#7ad3ff",
        // warning / overload
        burn:     "#ff5d6a",
        // synthetic / hyperreal — magenta
        synth:    "#ff6dd0",
        // contemplative gold
        gold:     "#d8b86a",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)",    "sans-serif"],
        mono:    ["var(--font-mono)",    "ui-monospace", "monospace"],
        han:     ["var(--font-han)",     "serif"],
      },
      animation: {
        "drift":    "drift 38s linear infinite",
        "shimmer":  "shimmer 10s linear infinite",
        "breathe":  "breathe 9s ease-in-out infinite",
        "glitch":   "glitch 2.2s steps(2,end) infinite",
      },
      keyframes: {
        drift: {
          "0%":   { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,-50%,0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "300% 50%" },
        },
        breathe: {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%":     { opacity: "1",    transform: "scale(1.05)" },
        },
        glitch: {
          "0%, 64%, 100%": { transform: "translate(0,0)" },
          "65%": { transform: "translate(-2px, 1px)" },
          "70%": { transform: "translate(2px, -1px)" },
          "75%": { transform: "translate(-1px, 2px)" },
          "80%": { transform: "translate(1px, -2px)" },
        },
      },
      boxShadow: {
        "signal":  "0 16px 60px rgba(122,211,255,0.10), inset 0 1px 0 rgba(219,225,236,0.06)",
        "dopa":    "0 16px 60px rgba(126,255,154,0.10), inset 0 1px 0 rgba(219,225,236,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
