"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  AlertOctagon,
  TrendingUp,
  Scale,
  Landmark,
  RotateCcw,
  BookOpen,
  Copy,
  Check,
  BarChart3,
  FileText,
} from "lucide-react";
import type { Verdict } from "../lib/verdict";

interface GameState {
  growth: number;
  equity: number;
  budget: number;
}

interface GameOverScreenProps {
  finalState: GameState;
  totalTurns: number;
  isGameOver: boolean;
  onRestart: () => void;
  verdict: Verdict | null;
}

interface AchievementConfig {
  title: string;
  description: string;
  color: string;
  borderColor: string;
  bgColor: string;
  Icon: React.ElementType;
  iconColor: string;
  stars: number;
}

function getAchievement(
  finalState: GameState,
  isGameOver: boolean,
  verdict: Verdict | null
): AchievementConfig {
  if (isGameOver) {
    return {
      title: verdict?.title ?? "Để xảy ra khủng hoảng",
      description: verdict?.summary ?? "Nền kinh tế mất cân bằng nghiêm trọng.",
      color: "text-red-300", borderColor: "border-red-500/30",
      bgColor: "bg-red-950/40", Icon: AlertOctagon,
      iconColor: "text-red-400", stars: 1,
    };
  }

  const { growth, equity, budget } = finalState;
  const avg = (growth + equity + budget) / 3;

  if (avg >= 70 && growth >= 65 && equity >= 65 && budget >= 65) {
    return {
      title: verdict?.title ?? "Nhà quản lý vĩ mô lỗi lạc",
      description: verdict?.summary ?? "Xuất sắc! Bạn đã cân bằng hoàn hảo.",
      color: "text-yellow-300", borderColor: "border-yellow-500/30",
      bgColor: "bg-yellow-950/40", Icon: Trophy,
      iconColor: "text-yellow-400", stars: 3,
    };
  }

  if (avg >= 55) {
    return {
      title: verdict?.title ?? "Kiến trúc sư Thể chế",
      description: verdict?.summary ?? "Tốt lắm! Bạn đã hiểu rõ vai trò Nhà nước.",
      color: "text-blue-300", borderColor: "border-blue-500/30",
      bgColor: "bg-blue-950/40", Icon: Star,
      iconColor: "text-blue-400", stars: 2,
    };
  }

  return {
    title: verdict?.title ?? "Nhà Điều tiết Tập sự",
    description: verdict?.summary ?? "Còn nhiều chỉ số cần cải thiện.",
    color: "text-slate-300", borderColor: "border-slate-500/30",
    bgColor: "bg-slate-800/40", Icon: BookOpen,
    iconColor: "text-slate-400", stars: 1,
  };
}

function StatSummaryItem({ label, value, Icon }: { label: string; value: number; Icon: React.ElementType }) {
  const status = value < 20 ? "danger" : value < 40 ? "warn" : "safe";
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700/40">
      <Icon className={`w-5 h-5 ${status === "danger" ? "text-red-400" : status === "warn" ? "text-amber-400" : "text-emerald-400"}`} />
      <span className="text-xs text-slate-500 font-medium">{label}</span>
      <span className={`text-2xl font-bold font-mono ${status === "danger" ? "text-red-400" : status === "warn" ? "text-amber-400" : "text-emerald-400"}`}>
        {value}
      </span>
      <div className="w-full h-1.5 rounded-full bg-slate-700">
        <div
          className={`h-full rounded-full transition-all duration-700 ${status === "danger" ? "bg-red-500" : status === "warn" ? "bg-amber-500" : "bg-emerald-500"}`}
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}

export default function GameOverScreen({
  finalState,
  totalTurns,
  isGameOver,
  onRestart,
  verdict,
}: GameOverScreenProps) {
  const achievement = getAchievement(finalState, isGameOver, verdict);
  const { Icon } = achievement;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!verdict) return;
    navigator.clipboard.writeText(verdict.explanationText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ backdropFilter: "blur(16px)", background: "rgba(5,11,26,0.85)" }}
    >
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-lg my-auto">
        {/* Achievement card */}
        <motion.div
          variants={itemVariants}
          className={`relative rounded-2xl border ${achievement.borderColor} ${achievement.bgColor} overflow-hidden mb-4`}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-40" />
          <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl pointer-events-none ${isGameOver ? "bg-red-500/10" : "bg-yellow-500/08"}`} />

          <div className="p-6 md:p-8 text-center relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
              className={`w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center border ${achievement.borderColor} bg-slate-900/60`}
            >
              <Icon className={`w-10 h-10 ${achievement.iconColor}`} />
            </motion.div>

            <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-2">
              {isGameOver ? "⚠ Trò chơi kết thúc" : "✓ Hoàn thành"}
            </p>
            <h1 className={`text-2xl md:text-3xl font-bold mb-3 ${achievement.color}`}>
              {achievement.title}
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-5">
              {achievement.description}
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-2">
              {[1, 2, 3].map((s) => (
                <motion.div
                  key={s}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: s <= achievement.stars ? 1 : 0.7, opacity: s <= achievement.stars ? 1 : 0.25 }}
                  transition={{ delay: 0.5 + s * 0.12, type: "spring" }}
                >
                  <Star className={`w-7 h-7 ${s <= achievement.stars ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`} />
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-slate-500 mt-2">
              Đã hoàn thành <span className="font-bold text-slate-300">{totalTurns}</span> lượt chơi
            </p>
          </div>
        </motion.div>

        {/* Final stats */}
        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 text-center">
            Chỉ số cuối cùng
          </p>
          <div className="grid grid-cols-3 gap-3">
            <StatSummaryItem label="Tăng trưởng" value={finalState.growth} Icon={TrendingUp} />
            <StatSummaryItem label="Công bằng" value={finalState.equity} Icon={Scale} />
            <StatSummaryItem label="Ngân sách" value={finalState.budget} Icon={Landmark} />
          </div>
        </motion.div>

        {/* Verdict breakdown */}
        {verdict && (
          <motion.div variants={itemVariants} className="mb-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 p-5">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-violet-400" />
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">
                Phân bố trường phái
              </p>
            </div>
            <div className="space-y-2">
              {verdict.breakdown.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">{b.label}</span>
                    <span className="font-bold text-slate-200 font-mono">{b.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400 transition-all duration-700"
                      style={{ width: `${b.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {verdict.strengths.length > 0 && (
              <div className="mt-4 pt-3 border-t border-violet-500/10">
                <p className="text-xs font-semibold text-emerald-400 mb-1">✓ Điểm phù hợp:</p>
                {verdict.strengths.map((s, i) => (
                  <p key={i} className="text-xs text-slate-400 leading-relaxed">• {s}</p>
                ))}
              </div>
            )}

            {verdict.gaps.length > 0 && (
              <div className="mt-3 pt-3 border-t border-violet-500/10">
                <p className="text-xs font-semibold text-amber-400 mb-1">△ Cần rút kinh nghiệm:</p>
                {verdict.gaps.map((g, i) => (
                  <p key={i} className="text-xs text-slate-400 leading-relaxed">• {g}</p>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Copy explanation button */}
        {verdict && (
          <motion.div variants={itemVariants} className="mb-4">
            <button
              onClick={handleCopy}
              id="btn-copy-explanation"
              className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-slate-800/80 border border-slate-700/50 text-slate-300 hover:bg-slate-700/80 hover:text-white transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <FileText className="w-4 h-4" />}
              {copied ? "Đã sao chép!" : "Sao chép Giải trình vào clipboard"}
            </button>
          </motion.div>
        )}

        {/* Restart button */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRestart}
            id="btn-restart"
            className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 hover:from-blue-500 hover:via-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 cursor-pointer transition-all duration-200"
          >
            <RotateCcw className="w-5 h-5" />
            Chơi lại từ đầu
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
