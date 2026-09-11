import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "emerald";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none",
          // sizes
          size === "sm" && "h-8 px-3 text-xs rounded-lg gap-1.5",
          size === "md" && "h-10 px-4 text-sm rounded-xl gap-2",
          size === "lg" && "h-12 px-6 text-base rounded-xl gap-2.5 font-semibold",
          // variants
          variant === "primary" && "bg-white text-slate-950 hover:bg-slate-200 shadow-md hover:shadow-lg active:scale-[0.98]",
          variant === "secondary" && "bg-slate-800 text-slate-100 hover:bg-slate-700/80 border border-white/10 active:scale-[0.98]",
          variant === "outline" && "border border-white/15 bg-transparent text-slate-200 hover:bg-white/5 hover:border-white/25 active:scale-[0.98]",
          variant === "ghost" && "text-slate-300 hover:text-white hover:bg-white/5",
          variant === "cyan" && "bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-[0.98]",
          variant === "emerald" && "bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.35)] active:scale-[0.98]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
