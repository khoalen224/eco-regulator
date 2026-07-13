"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronRight,
} from "lucide-react";
import type { Choice } from "../data/scenarios";

interface FeedbackModalProps {
  choice: Choice;
  choiceIndex: number;
  isCorrect: boolean; // true if net effect is positive (sum > 0)
  onContinue: () => void;
  isLastTurn: boolean;
}

function EffectBadge({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const isPos = value > 0;
  const isNeg = value < 0;

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium
      ${isPos ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" : ""}
      ${isNeg ? "bg-red-500/10 border-red-500/20 text-red-300" : ""}
      ${!isPos && !isNeg ? "bg-slate-700/50 border-slate-600/30 text-slate-400" : ""}
    `}
    >
      {isPos && <TrendingUp className="w-3.5 h-3.5" />}
      {isNeg && <TrendingDown className="w-3.5 h-3.5" />}
      {!isPos && !isNeg && <Minus className="w-3.5 h-3.5" />}
      <span className="text-xs text-current opacity-70">{label}</span>
      <span className="ml-auto font-bold font-mono">
        {isPos ? `+${value}` : value}
      </span>
    </div>
  );
}

export default function FeedbackModal({
  choice,
  choiceIndex,
  isCorrect,
  onContinue,
  isLastTurn,
}: FeedbackModalProps) {
  const netEffect =
    choice.effect.growth + choice.effect.equity + choice.effect.budget;
  const overallPositive = netEffect >= 8;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backdropFilter: "blur(12px)", background: "rgba(5,11,26,0.75)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`
            relative w-full max-w-lg rounded-2xl border overflow-hidden
            ${overallPositive
              ? "border-emerald-500/25 bg-gradient-to-b from-slate-900 to-emerald-950/30"
              : "border-red-500/25 bg-gradient-to-b from-slate-900 to-red-950/20"
            }
          `}
          role="dialog"
          aria-modal="true"
          aria-labelledby="feedback-title"
        >
          {/* Top accent */}
          <div
            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${overallPositive ? "via-emerald-400/50" : "via-red-400/50"} to-transparent`}
          />

          {/* Glow orb */}
          <div
            className={`absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl pointer-events-none ${overallPositive ? "bg-emerald-500/10" : "bg-red-500/10"}`}
          />

          <div className="p-6 md:p-8 relative z-10">
            {/* Result header */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${overallPositive ? "bg-emerald-500/15 border border-emerald-500/30" : "bg-red-500/15 border border-red-500/30"}`}
              >
                {overallPositive ? (
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                ) : (
                  <XCircle className="w-7 h-7 text-red-400" />
                )}
              </motion.div>
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-0.5">
                  Lựa chọn{" "}
                  <span className="font-bold text-slate-300">
                    {String.fromCharCode(65 + choiceIndex)}
                  </span>
                </p>
                <h2
                  id="feedback-title"
                  className={`text-xl font-bold ${overallPositive ? "text-emerald-300" : "text-red-300"}`}
                >
                  {overallPositive ? "Quyết định đúng đắn!" : "Cần xem lại!"}
                </h2>
              </div>
            </div>

            {/* Feedback text */}
            <div className="flex gap-3 mb-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700/40">
              <Lightbulb
                className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
              />
              <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                {choice.feedback}
              </p>
            </div>

            {/* Effect breakdown */}
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                Tác động chỉ số
              </p>
              <div className="grid grid-cols-3 gap-2">
                <EffectBadge label="Tăng trưởng" value={choice.effect.growth} />
                <EffectBadge label="Công bằng" value={choice.effect.equity} />
                <EffectBadge label="Ngân sách" value={choice.effect.budget} />
              </div>
            </div>

            {/* Continue button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContinue}
              id="btn-continue"
              className={`
                w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2
                transition-all duration-200 cursor-pointer
                ${overallPositive
                  ? "bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/20"
                }
              `}
            >
              {isLastTurn ? "Xem kết quả" : "Tiếp tục lượt tiếp theo"}
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
