"use client";

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
} from "lucide-react";

interface GameState {
  growth: number;
  equity: number;
  budget: number;
}

interface GameOverScreenProps {
  finalState: GameState;
  totalTurns: number;
  isGameOver: boolean; // true = crash/crisis, false = completed all turns
  onRestart: () => void;
}

interface AchievementConfig {
  title: string;
  description: string;
  color: string;
  borderColor: string;
  bgColor: string;
  glowColor: string;
  Icon: React.ElementType;
  iconColor: string;
  stars: number;
}

function getAchievement(
  finalState: GameState,
  isGameOver: boolean
): AchievementConfig {
  const { growth, equity, budget } = finalState;
  const avg = (growth + equity + budget) / 3;

  if (isGameOver) {
    return {
      title: "Để xảy ra khủng hoảng",
      description:
        "Nền kinh tế mất cân bằng nghiêm trọng. Các mâu thuẫn lợi ích không được giải quyết dẫn đến bất ổn hệ thống.",
      color: "text-red-300",
      borderColor: "border-red-500/30",
      bgColor: "bg-red-950/40",
      glowColor: "shadow-red-500/20",
      Icon: AlertOctagon,
      iconColor: "text-red-400",
      stars: 1,
    };
  }

  if (avg >= 70 && growth >= 65 && equity >= 65 && budget >= 65) {
    return {
      title: "Nhà quản lý vĩ mô lỗi lạc",
      description:
        "Xuất sắc! Bạn đã cân bằng hoàn hảo giữa tăng trưởng kinh tế, công bằng xã hội và ngân sách quốc gia theo đúng định hướng XHCN.",
      color: "text-yellow-300",
      borderColor: "border-yellow-500/30",
      bgColor: "bg-yellow-950/40",
      glowColor: "shadow-yellow-500/20",
      Icon: Trophy,
      iconColor: "text-yellow-400",
      stars: 3,
    };
  }

  if (avg >= 55) {
    return {
      title: "Kiến trúc sư Thể chế",
      description:
        "Tốt lắm! Bạn đã hiểu rõ vai trò của Nhà nước trong điều tiết kinh tế, tuy còn một vài quyết định cần cân nhắc thêm.",
      color: "text-blue-300",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-950/40",
      glowColor: "shadow-blue-500/20",
      Icon: Star,
      iconColor: "text-blue-400",
      stars: 2,
    };
  }

  return {
    title: "Nhà Điều tiết Tập sự",
    description:
      "Bạn đã hoàn thành trò chơi nhưng còn nhiều chỉ số cần cải thiện. Hãy ôn lại lý luận về quan hệ lợi ích kinh tế và vai trò Nhà nước.",
    color: "text-slate-300",
    borderColor: "border-slate-500/30",
    bgColor: "bg-slate-800/40",
    glowColor: "shadow-slate-500/10",
    Icon: BookOpen,
    iconColor: "text-slate-400",
    stars: 1,
  };
}

function StatSummaryItem({
  label,
  value,
  Icon,
}: {
  label: string;
  value: number;
  Icon: React.ElementType;
}) {
  const status = value < 20 ? "danger" : value < 40 ? "warn" : "safe";
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700/40">
      <Icon
        className={`w-5 h-5 ${status === "danger" ? "text-red-400" : status === "warn" ? "text-amber-400" : "text-emerald-400"}`}
      />
      <span className="text-xs text-slate-500 font-medium">{label}</span>
      <span
        className={`text-2xl font-bold font-mono ${status === "danger" ? "text-red-400" : status === "warn" ? "text-amber-400" : "text-emerald-400"}`}
      >
        {value}
      </span>
      {/* mini bar */}
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
}: GameOverScreenProps) {
  const achievement = getAchievement(finalState, isGameOver);
  const { Icon } = achievement;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ backdropFilter: "blur(16px)", background: "rgba(5,11,26,0.85)" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg my-auto"
      >
        {/* Achievement card */}
        <motion.div
          variants={itemVariants}
          className={`
            relative rounded-2xl border ${achievement.borderColor} ${achievement.bgColor} 
            overflow-hidden mb-4
          `}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-40" />

          {/* Orb decoration */}
          <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl pointer-events-none ${isGameOver ? "bg-red-500/10" : "bg-yellow-500/08"}`} />

          <div className="p-6 md:p-8 text-center relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
              className={`w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center border ${achievement.borderColor} bg-slate-900/60`}
            >
              <Icon className={`w-10 h-10 ${achievement.iconColor}`} />
            </motion.div>

            {/* Title */}
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
                  animate={{
                    scale: s <= achievement.stars ? 1 : 0.7,
                    opacity: s <= achievement.stars ? 1 : 0.25,
                  }}
                  transition={{ delay: 0.5 + s * 0.12, type: "spring" }}
                >
                  <Star
                    className={`w-7 h-7 ${s <= achievement.stars ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`}
                  />
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-slate-500 mt-2">
              Đã hoàn thành{" "}
              <span className="font-bold text-slate-300">{totalTurns}</span>{" "}
              lượt chơi
            </p>
          </div>
        </motion.div>

        {/* Final stats */}
        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 text-center">
            Chỉ số cuối cùng
          </p>
          <div className="grid grid-cols-3 gap-3">
            <StatSummaryItem
              label="Tăng trưởng"
              value={finalState.growth}
              Icon={TrendingUp}
            />
            <StatSummaryItem
              label="Công bằng"
              value={finalState.equity}
              Icon={Scale}
            />
            <StatSummaryItem
              label="Ngân sách"
              value={finalState.budget}
              Icon={Landmark}
            />
          </div>
        </motion.div>

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
