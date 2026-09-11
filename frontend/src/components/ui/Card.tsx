import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowEffect?: "emerald" | "cyan" | "violet" | "none";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glowEffect = "none", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-white/[0.08] bg-[#0c1220]/80 backdrop-blur-xl p-6 text-slate-100 shadow-xl transition-all duration-300",
          glowEffect === "emerald" && "hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]",
          glowEffect === "cyan" && "hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]",
          glowEffect === "violet" && "hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]",
          glowEffect === "none" && "hover:border-white/[0.16]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-lg font-semibold tracking-tight text-white", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-slate-400 leading-relaxed", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center pt-4 border-t border-white/[0.06]", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";
