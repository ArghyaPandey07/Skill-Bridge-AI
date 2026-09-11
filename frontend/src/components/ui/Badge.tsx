import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "emerald" | "cyan" | "violet" | "amber" | "outline" | "danger";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium transition-colors tracking-wide",
        size === "sm" ? "px-2 py-0.5 text-xs rounded-md" : "px-2.5 py-1 text-xs rounded-lg",
        variant === "default" && "bg-slate-800 text-slate-200 border border-slate-700/60",
        variant === "emerald" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
        variant === "cyan" && "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30",
        variant === "violet" && "bg-violet-500/10 text-violet-300 border border-violet-500/30",
        variant === "amber" && "bg-amber-500/10 text-amber-400 border border-amber-500/30",
        variant === "danger" && "bg-rose-500/10 text-rose-400 border border-rose-500/30",
        variant === "outline" && "border border-white/15 text-slate-300 bg-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
