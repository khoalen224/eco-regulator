"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cpu,
  GraduationCap,
  Layers,
  ChevronRight,
} from "lucide-react";

import { scenarios } from "../data/scenarios";
import StatBar from "./StatBar";
import ScenarioCard from "./ScenarioCard";
import FeedbackModal from "./FeedbackModal";
import GameOverScreen from "./GameOverScreen";
import KnowledgePanel from "./KnowledgePanel";

// ─── Types ────────────────────────────────────────────────────────────────────

interface GameState {
  growth: number;
  equity: number;
  budget: number;
}

interface DeltaState {
  growth: number;
  equity: number;
  budget: number;
}

type GamePhase = "playing" | "feedback" | "gameover";

// ─── Initial state ─────────────────────────────────────────────────────────────

const INITIAL_STATE: GameState = {
  growth: 50,
  equity: 50,
  budget: 50,
};

const DANGER_THRESHOLD = 20;

// ─── Helpers ───────────────────────────────────────────────────────────────────

function clamp(value: number): number {
  return Math.max(0, Math.min(100, value));
}

function isDangerousState(state: GameState): boolean {
  return (
    state.growth < DANGER_THRESHOLD ||
    state.equity < DANGER_THRESHOLD ||
    state.budget <= 0
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function EcoRegulatorGame() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [currentTurn, setCurrentTurn] = useState(0); // index into scenarios
  const [phase, setPhase] = useState<GamePhase>("playing");
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState<number | null>(
    null
  );
  const [delta, setDelta] = useState<DeltaState>({ growth: 0, equity: 0, budget: 0 });
  const [isGameOverDueToLoss, setIsGameOverDueToLoss] = useState(false);
  const [completedTurns, setCompletedTurns] = useState(0);
  const [knowledgePanelOpen, setKnowledgePanelOpen] = useState(false);

  const totalScenarios = scenarios.length;
  const currentScenario = scenarios[currentTurn];

  // ── Handle choice selection ──────────────────────────────────────────────────

  const handleChoice = useCallback(
    (choiceIndex: number) => {
      if (phase !== "playing") return;

      const effect = currentScenario.choices[choiceIndex].effect;

      const newState: GameState = {
        growth: clamp(gameState.growth + effect.growth),
        equity: clamp(gameState.equity + effect.equity),
        budget: clamp(gameState.budget + effect.budget),
      };

      setDelta({
        growth: effect.growth,
        equity: effect.equity,
        budget: effect.budget,
      });
      setGameState(newState);
      setSelectedChoiceIndex(choiceIndex);
      setCompletedTurns((prev) => prev + 1);

      // Check for game-over condition after applying effect
      if (isDangerousState(newState)) {
        // Show feedback first, then game over
        setIsGameOverDueToLoss(true);
        setPhase("feedback");
      } else {
        setPhase("feedback");
      }
    },
    [phase, gameState, currentScenario]
  );

  // ── Handle feedback continue ─────────────────────────────────────────────────

  const handleContinue = useCallback(() => {
    if (isGameOverDueToLoss) {
      setPhase("gameover");
      return;
    }

    const nextTurn = currentTurn + 1;
    if (nextTurn >= totalScenarios) {
      // All scenarios done — win condition
      setPhase("gameover");
    } else {
      setCurrentTurn(nextTurn);
      setSelectedChoiceIndex(null);
      setDelta({ growth: 0, equity: 0, budget: 0 });
      setPhase("playing");
    }
  }, [currentTurn, totalScenarios, isGameOverDueToLoss]);

  // ── Handle restart ────────────────────────────────────────────────────────────

  const handleRestart = useCallback(() => {
    setGameState(INITIAL_STATE);
    setCurrentTurn(0);
    setPhase("playing");
    setSelectedChoiceIndex(null);
    setDelta({ growth: 0, equity: 0, budget: 0 });
    setIsGameOverDueToLoss(false);
    setCompletedTurns(0);
  }, []);

  const isLastTurn = currentTurn >= totalScenarios - 1;

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* ── HEADER DASHBOARD ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 py-3">
          {/* Title row */}
          <div className="flex items-center justify-between mb-3 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-9 h-9 flex-shrink-0 animate-float">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 blur-md opacity-60" />
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="min-w-0">
                <h1 className="text-sm md:text-base font-bold gradient-text-blue truncate leading-tight">
                  EcoRegulator
                </h1>
                <p className="text-xs text-slate-500 truncate hidden sm:block">
                  Trò chơi Điều tiết Kinh tế • Chương 5
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Turn counter */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-semibold text-slate-300 font-mono">
                  Lượt{" "}
                  <span className="text-white">
                    {Math.min(currentTurn + 1, totalScenarios)}
                  </span>
                  <span className="text-slate-500">/{totalScenarios}</span>
                </span>
              </div>

              {/* Turn counter mobile */}
              <div className="sm:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <span className="text-xs font-bold text-white font-mono">
                  {Math.min(currentTurn + 1, totalScenarios)}/{totalScenarios}
                </span>
              </div>

              {/* Knowledge button */}
              <button
                onClick={() => setKnowledgePanelOpen(true)}
                id="btn-knowledge-panel"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/30 transition-all cursor-pointer text-xs font-semibold"
                aria-label="Mở bảng kiến thức"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Lý luận</span>
              </button>
            </div>
          </div>

          {/* Stat bars */}
          <div className="flex gap-2 md:gap-3">
            <StatBar
              label="Tăng trưởng KT"
              value={gameState.growth}
              icon="growth"
              delta={phase === "feedback" ? delta.growth : undefined}
            />
            <StatBar
              label="Công bằng XH"
              value={gameState.equity}
              icon="equity"
              delta={phase === "feedback" ? delta.equity : undefined}
            />
            <StatBar
              label="Ngân sách QG"
              value={gameState.budget}
              icon="budget"
              delta={phase === "feedback" ? delta.budget : undefined}
            />
          </div>
        </div>
      </header>

      {/* ── MAIN STAGE ────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 md:py-8">
        {/* Turn progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-medium">Tiến trình</span>
            <div className="flex items-center gap-1">
              <ChevronRight className="w-3 h-3" />
              <span>
                {currentTurn}/{totalScenarios} tình huống hoàn thành
              </span>
            </div>
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
              animate={{ width: `${(currentTurn / totalScenarios) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Scenario card with animation */}
        <AnimatePresence mode="wait">
          {phase !== "gameover" && currentScenario && (
            <ScenarioCard
              key={`scenario-${currentScenario.id}`}
              scenario={currentScenario}
              onChoice={handleChoice}
              disabled={phase === "feedback"}
            />
          )}
        </AnimatePresence>

        {/* Placeholder when no more scenarios but not yet gameover */}
        {phase === "playing" && !currentScenario && (
          <div className="text-center text-slate-500 py-20">Đang tải...</div>
        )}
      </main>

      {/* ── FEEDBACK MODAL ────────────────────────────────────────────── */}
      <AnimatePresence>
        {phase === "feedback" && selectedChoiceIndex !== null && (
          <FeedbackModal
            key="feedback"
            choice={currentScenario.choices[selectedChoiceIndex]}
            choiceIndex={selectedChoiceIndex}
            isCorrect={
              currentScenario.choices[selectedChoiceIndex].effect.growth +
                currentScenario.choices[selectedChoiceIndex].effect.equity +
                currentScenario.choices[selectedChoiceIndex].effect.budget >=
              8
            }
            onContinue={handleContinue}
            isLastTurn={isLastTurn || isGameOverDueToLoss}
          />
        )}
      </AnimatePresence>

      {/* ── GAME OVER / VICTORY ───────────────────────────────────────── */}
      <AnimatePresence>
        {phase === "gameover" && (
          <GameOverScreen
            key="gameover"
            finalState={gameState}
            totalTurns={completedTurns}
            isGameOver={isGameOverDueToLoss}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>

      {/* ── KNOWLEDGE PANEL ───────────────────────────────────────────── */}
      <KnowledgePanel
        isOpen={knowledgePanelOpen}
        onClose={() => setKnowledgePanelOpen(false)}
      />
    </div>
  );
}
