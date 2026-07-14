"use client";

import { motion, Variants } from "framer-motion";
import { Tag, HelpCircle } from "lucide-react";
import type { Scenario } from "../data/scenarios";

interface ScenarioCardProps {
  scenario: Scenario;
  onChoice: (index: number) => void;
  disabled: boolean;
  selectedIndex?: number | null;
  onOpenTheory?: (tag: string) => void;
}

const choiceVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12 + 0.3, duration: 0.4, ease: "easeOut" },
  }),
};

export default function ScenarioCard({
  scenario,
  onChoice,
  disabled,
  selectedIndex,
  onOpenTheory,
}: ScenarioCardProps) {
  return (
    <motion.div
      key={scenario.id}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.97 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full"
    >
      {/* Card container */}
      <div className="relative rounded-2xl border border-blue-500/15 bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-sm overflow-hidden card-glow-blue">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        {/* Decorative bg orb */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/05 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 md:p-8">
          {/* Category badge */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
            >
              <Tag className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold text-blue-300 tracking-wide uppercase">
                {scenario.category}
              </span>
            </motion.div>
            {scenario.tag && (
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300">
                  {scenario.tag}
                </span>
                {onOpenTheory && (
                  <button
                    onClick={() => onOpenTheory(scenario.tag)}
                    className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-semibold text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    Xem lý thuyết
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Question */}
          <div className="flex gap-3 mb-7">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-violet-400" />
              </div>
            </div>
            <p className="text-slate-100 text-base md:text-lg leading-relaxed font-medium">
              {scenario.question}
            </p>
          </div>

          {/* Choices */}
          <div className="space-y-3">
            {scenario.choices.map((choice, i) => (
              <motion.button
                key={i}
                custom={i}
                variants={choiceVariants}
                initial="hidden"
                animate="visible"
                whileHover={!disabled ? { scale: 1.015, x: 4 } : {}}
                whileTap={!disabled ? { scale: 0.99 } : {}}
                onClick={() => !disabled && onChoice(i)}
                disabled={disabled}
                className={`
                  w-full text-left px-5 py-4 rounded-xl border transition-all duration-200
                  group relative overflow-hidden
                  ${
                    disabled
                      ? "opacity-50 cursor-not-allowed border-slate-700/50 bg-slate-800/30"
                      : `border-slate-700/60 bg-slate-800/40 hover:border-blue-400/40 
                         hover:bg-blue-500/05 cursor-pointer 
                         focus:outline-none focus:ring-2 focus:ring-blue-500/40`
                  }
                `}
                id={`choice-${scenario.id}-${i}`}
                aria-label={`Lựa chọn ${String.fromCharCode(65 + i)}`}
              >
                {/* Hover shimmer */}
                {!disabled && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/03 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                )}

                <div className="flex items-start gap-3 relative z-10">
                  {/* Choice letter badge */}
                  <span
                    className={`
                    flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold
                    ${
                      disabled
                        ? "bg-slate-700/60 text-slate-500"
                        : "bg-blue-500/15 border border-blue-500/30 text-blue-300 group-hover:bg-blue-500/25 group-hover:text-blue-200 transition-all duration-200"
                    }
                  `}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span
                    className={`text-sm md:text-base leading-relaxed ${disabled ? "text-slate-500" : "text-slate-200 group-hover:text-slate-100 transition-colors duration-200"}`}
                  >
                    {/* Strip the leading "A. ", "B. ", "C. " from text */}
                    {/* Strip the leading "A. ", "B. ", "C. " from text */}
                    {choice.text.replace(/^[A-C]\.\s/, "")}
                  </span>
                </div>

                {/* Approval Stamp Effect */}
                {selectedIndex === i && (
                  <motion.div
                    initial={{ scale: 3, opacity: 0, rotate: -15 }}
                    animate={{ scale: 1, opacity: 1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                  >
                    <div className="border-4 border-red-500/80 text-red-500/90 rounded-lg px-4 py-1 text-xl md:text-3xl font-black tracking-widest uppercase bg-slate-900/60 backdrop-blur-sm shadow-[0_0_30px_rgba(239,68,68,0.3)] whitespace-nowrap" style={{textShadow: "0 0 10px rgba(239,68,68,0.5)"}}>
                      PHÊ DUYỆT
                    </div>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
