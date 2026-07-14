"use client";

import { useState } from "react";
import { GraduationCap, ChevronUp, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function TeamFooter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="w-full mt-auto bg-slate-900 border-t border-slate-800 z-20 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.5)] relative">
      {/* Nút bấm ở dưới cùng */}
      <div className="max-w-4xl mx-auto relative z-20 bg-slate-900">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-indigo-400" />
            <div className="text-left">
              <h3 className="text-base font-semibold text-slate-200">Đồ án môn học: Kinh tế chính trị Mác - Lênin (MLN122)</h3>
              <p className="text-sm text-slate-400">Thực hiện bởi: Nhóm 5 © {new Date().getFullYear()}</p>
            </div>
          </div>
          <div className="p-2 rounded-full bg-slate-800 text-slate-400">
            {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
          </div>
        </button>
      </div>

      {/* Nội dung xổ lên trên (expand upwards) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute bottom-full left-0 w-full overflow-hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 z-10 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.7)]"
          >
            <div className="max-w-4xl mx-auto p-6">
              <h4 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Thành viên thực hiện</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 flex flex-col items-center text-center shadow-lg">
                  <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center text-lg font-bold mb-3 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    K
                  </div>
                  <span className="font-medium text-slate-200">Lê Nguyễn Tuấn Khoa</span>
                  <span className="text-xs text-indigo-400 mt-1 font-mono">SE194755</span>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 flex flex-col items-center text-center shadow-lg">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-lg font-bold mb-3 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    L
                  </div>
                  <span className="font-medium text-slate-200">Huỳnh Hoàng Long</span>
                  <span className="text-xs text-emerald-400 mt-1 font-mono">SE194246</span>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 flex flex-col items-center text-center shadow-lg">
                  <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-lg font-bold mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    T
                  </div>
                  <span className="font-medium text-slate-200">Nguyễn Bá Anh Tuấn</span>
                  <span className="text-xs text-amber-400 mt-1 font-mono">SE190905</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
