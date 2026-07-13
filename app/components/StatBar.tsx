"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Scale,
  Landmark,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export interface StatBarProps {
  label: string;
  value: number;
  icon: "growth" | "equity" | "budget";
  delta?: number;
}

const iconMap = {
  growth: TrendingUp,
  equity: Scale,
  budget: Landmark,
};

const colorConfig = {
  safe: {
    bar: "from-emerald-500 to-teal-400",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    icon: "text-emerald-400",
  },
  warn: {
    bar: "from-amber-500 to-yellow-400",
    text: "text-amber-400",
    glow: "shadow-amber-500/20",
    border: "border-amber-500/20",
    bg: "bg-amber-500/10",
    icon: "text-amber-400",
  },
  danger: {
    bar: "from-red-600 to-red-400",
    text: "text-red-400",
    glow: "shadow-red-500/20",
    border: "border-red-500/20",
    bg: "bg-red-500/10",
    icon: "text-red-400",
  },
};

function getStatus(value: number): "safe" | "warn" | "danger" {
  if (value < 20) return "danger";
  if (value < 40) return "warn";
  return "safe";
}

export default function StatBar({ label, value, icon, delta }: StatBarProps) {
  const Icon = iconMap[icon];
  const status = getStatus(value);
  const colors = colorConfig[status];
  const isDanger = status === "danger";

  return (
    <div
      className={`relative rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm p-3 md:p-4 flex-1 min-w-0`}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${colors.bg} border ${colors.border}`}
          >
            <Icon className={`w-3.5 h-3.5 ${colors.icon}`} />
          </span>
          <span className="text-xs font-semibold text-slate-300 truncate leading-tight">
            {label}
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {delta !== undefined && delta !== 0 && (
            <AnimatePresence mode="wait">
              <motion.span
                key={delta}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className={`text-xs font-bold ${delta > 0 ? "text-emerald-400" : "text-red-400"}`}
              >
                {delta > 0 ? `+${delta}` : delta}
              </motion.span>
            </AnimatePresence>
          )}
          <span
            className={`text-base font-bold font-mono ${colors.text} ${isDanger ? "animate-pulse-danger" : ""}`}
          >
            {value}
          </span>
        </div>
      </div>

      {/* Progress track */}
      <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden relative">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colors.bar} progress-shimmer`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.max(0, Math.min(100, value))}%` }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </div>

      {/* Danger indicator */}
      {isDanger && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-2 right-2"
        >
          <AlertTriangle className="w-3.5 h-3.5 text-red-400 animate-pulse-danger" />
        </motion.div>
      )}

      {/* Status badge */}
      <div className="mt-1.5 flex justify-between items-center">
        <span className="text-xs text-slate-600 font-mono">0</span>
        {isDanger ? (
          <span className="flex items-center gap-1 text-xs text-red-400 font-semibold">
            <XCircle className="w-3 h-3" /> NGUY HIỂM
          </span>
        ) : status === "warn" ? (
          <span className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
            <AlertTriangle className="w-3 h-3" /> CẢNH BÁO
          </span>
        ) : (
          <span className="flex items-center gap-1 text-xs text-emerald-500 font-semibold">
            <CheckCircle2 className="w-3 h-3" /> ỔN ĐỊNH
          </span>
        )}
        <span className="text-xs text-slate-600 font-mono">100</span>
      </div>
    </div>
  );
}
