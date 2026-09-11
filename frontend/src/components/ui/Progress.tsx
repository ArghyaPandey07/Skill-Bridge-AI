import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  color?: "emerald" | "cyan" | "violet" | "amber" | "gradient";
  size?: "sm" | "md" | "lg";
}

export function Progress({
  value,
  color = "cyan",
  size = "md",
  className,
  ...props
}: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-full bg-slate-800/80 border border-white/[0.05]",
        size === "sm" && "h-1.5",
        size === "md" && "h-2.5",
        size === "lg" && "h-3.5",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-500 ease-out",
          color === "emerald" && "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]",
          color === "cyan" && "bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]",
          color === "violet" && "bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]",
          color === "amber" && "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)]",
          color === "gradient" && "bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
        )}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
}
