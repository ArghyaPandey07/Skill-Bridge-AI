"use client";

import React from "react";
import Link from "next/link";
import { Target, Sparkles, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MakeReadyCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#0d1e38] via-[#0b162c] to-[#0d1f35] p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
      
      {/* Decorative background glows */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI READINESS ENGINE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Stop Guessing. Become Opportunity-Ready.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            SkillBridge AI calculates the exact 14-day path to turn your 81% readiness score into a 98% guaranteed match for the Stanford Vision & AI Lab.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-1">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Personalized Milestones</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Evidence Artifact Generation</span>
            </span>
            <span className="flex items-center gap-1.5 text-indigo-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>Direct Lab Introduction</span>
            </span>
          </div>
        </div>

        {/* CTA Button Block */}
        <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
          <Link href="/readiness">
            <Button
              variant="cyan"
              size="lg"
              className="text-slate-950 font-bold px-8 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
            >
              <Target className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              <span>Make Me Ready</span>
              <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </Button>
          </Link>
          <span className="text-[11px] font-mono text-slate-400">
            Tailored for Alex Chen â¢ Autumn '26 Cycle
          </span>
        </div>

      </div>
    </div>
  );
}
