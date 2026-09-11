import React from "react";
import { cn } from "@/lib/utils";

interface ReadinessScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function ReadinessScoreBadge({ score, size = "md", showLabel = true }: ReadinessScoreBadgeProps) {
  const isHigh = score >= 80;
  const isMedium = score >= 65 && score < 80;

  const colorClass = isHigh
    ? "text-sky-300 border-sky-500/40 bg-sky-500/10 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
    : isMedium
      ? "text-indigo-300 border-indigo-500/40 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
      : "text-amber-300 border-amber-500/40 bg-amber-500/10";

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
          Readiness
        </span>
      )}
    </div>
  );
}
