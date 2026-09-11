import React from "react";
import { cn } from "@/lib/utils";

interface MatchScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function MatchScoreBadge({ score, size = "md", showLabel = true }: MatchScoreBadgeProps) {
  // Determine color theme based on score
  const isHigh = score >= 85;
  const isMedium = score >= 70 && score < 85;

  const colorClass = isHigh 
    ? "text-emerald-400 border-emerald-500/40 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]" 
    : isMedium 
      ? "text-cyan-400 border-cyan-500/40 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
      : "text-amber-400 border-amber-500/40 bg-amber-500/10";

  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "flex items-center justify-center font-bold tracking-tight rounded-2xl border font-mono transition-transform hover:scale-105",
          colorClass,
          size === "sm" && "w-11 h-11 text-xs",
          size === "md" && "w-14 h-14 text-sm",
          size === "lg" && "w-20 h-20 text-xl border-2"
        )}
      >
        <span>{score}%</span>
      </div>
      {showLabel && (
        <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 mt-1.5 font-mono">
          Match Score
        </span>
      )}
    </div>
  );
}
