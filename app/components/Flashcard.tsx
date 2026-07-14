"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

interface FlashcardProps {
  frontText: string;
  backText: string;
}

export function Flashcard({ frontText, backText }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full mt-4 mb-2 [perspective:1000px]">
      <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
        <span>Thẻ ôn tập nhanh</span>
      </div>
      <div 
        className="relative w-full h-32 cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full [transform-style:preserve-3d]"
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden] w-full h-full bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-slate-600 transition-colors shadow-sm">
            <p className="text-sm font-semibold text-slate-200">{frontText}</p>
            <div className="absolute bottom-2 flex items-center gap-1 text-slate-500 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
              <RotateCcw className="w-3 h-3" />
              <span>Chạm để lật</span>
            </div>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 [backface-visibility:hidden] w-full h-full bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 flex items-center justify-center overflow-y-auto"
            style={{ transform: "rotateX(180deg)" }}
          >
            <p className="text-xs text-slate-300 text-center leading-relaxed m-auto">{backText}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
