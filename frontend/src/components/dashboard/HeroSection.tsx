"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Dna, 
  CheckCircle, 
  Target, 
  TrendingUp,
  Workflow,
  Search,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const pipelineSteps = [
    { label: "1. Evidence", sub: "Code & Projects", color: "from-cyan-500/30 text-cyan-400" },
    { label: "2. Skill DNA", sub: "Confidence Graph", color: "from-sky-500/30 text-sky-400" },
    { label: "3. Opp Match", sub: "Contextual Fit", color: "from-emerald-500/30 text-emerald-400" },
    { label: "4. Explainability", sub: "Why You Match", color: "from-indigo-500/30 text-indigo-300" },
    { label: "5. Skill Gap", sub: "Blockers Identified", color: "from-amber-500/30 text-amber-400" },
    { label: "6. Readiness", sub: "Actionable Roadmap", color: "from-rose-500/30 text-rose-400" }
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0e1628]/90 via-[#0a0f1d]/90 to-[#070b14]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl">
      
      {/* Subtle background glow highlights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl space-y-6">
        
        {/* Category / Platform Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>EVIDENCE-BACKED CAMPUS & COMMUNITY TALENT INTELLIGENCE</span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Turn Your Skills Into Opportunities.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Build an evidence-backed skill profile, discover opportunities that fit you, and understand exactly what you need to become ready.
          </p>
        </div>

        {/* Coherent Product Pipeline Diagram */}
        <div className="pt-2 pb-2">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>The SkillBridge AI Engine</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {pipelineSteps.map((step, idx) => (
              <div 
                key={step.label}
                className="relative p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.08] hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-xs font-bold text-slate-100 flex items-center justify-between">
                  <span>{step.label}</span>
                  {idx < pipelineSteps.length - 1 && (
                    <span className="hidden lg:inline text-slate-600 font-mono text-[10px]">â</span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">{step.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link href="#recommended-opportunities">
            <Button variant="cyan" size="md">
              <span>View 3 High-Affinity Matches</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/readiness">
            <Button variant="outline" size="md" className="border-white/20 hover:border-cyan-400">
              <Target className="w-4 h-4 text-cyan-400" />
              <span>Generate Readiness Plan</span>
            </Button>
          </Link>
          <Link href="/skills">
            <Button variant="ghost" size="md">
              <Dna className="w-4 h-4 text-slate-400" />
              <span>Inspect Full Skill DNA</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
