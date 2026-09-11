"use client";

import React from "react";
import { topSkillGaps } from "@/data/skillsData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { 
  AlertTriangle, 
  ArrowUpRight, 
  Clock, 
  Target, 
  LockOpen, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export function SkillGapSection() {
  return (
    <Card className="border-white/[0.08] bg-[#0c1220]/90">
      <CardHeader className="pb-4 border-b border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <CardTitle className="text-lg font-bold text-white">
                Identified Skill Gaps & High-Impact Blockers
              </CardTitle>
            </div>
            <CardDescription>
              SkillBridge analyzes opportunity requirements to pinpoint the exact delta between your demonstrated abilities and high-value campus roles.
            </CardDescription>
          </div>

          <Link
            href="/readiness"
            className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 transition-colors shrink-0"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Generate Gap-Closing Plan</span>
          </Link>
        </div>
      </CardHeader>

      <CardContent className="pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {topSkillGaps.map((gap) => (
            <div
              key={gap.id}
              className="p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header with Urgency Pill */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {gap.category}
                  </span>
                  <Badge variant={gap.urgency === "High" ? "amber" : "outline"} size="sm">
                    {gap.urgency} Impact
                  </Badge>
                </div>

                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base leading-snug">
                    {gap.skillName}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {gap.reason}
                  </p>
                </div>

                {/* Progress bar comparison: Current vs Target */}
                <div className="space-y-1 bg-slate-950/60 p-2.5 rounded-xl border border-white/[0.04]">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Current DNA: {gap.currentConfidence}%</span>
                    <span className="text-emerald-400 font-bold">Target: {gap.targetConfidence}%</span>
                  </div>
                  <Progress value={gap.currentConfidence} color="amber" size="sm" />
                </div>
              </div>

              {/* Actionable recommendation */}
              <div className="pt-3 border-t border-white/[0.05] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-indigo-300 font-mono flex items-center gap-1 text-[11px]">
                    <LockOpen className="w-3 h-3 text-indigo-400" />
                    <span>+{gap.unlockedOpportunities} opportunities</span>
                  </span>
                  <span className="text-slate-500 font-mono text-[10px] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{gap.timeEstimate}</span>
                  </span>
                </div>

                <p className="text-[11px] text-slate-300 bg-slate-950/80 p-2 rounded-lg border border-white/[0.04] leading-relaxed">
                  <span className="text-cyan-400 font-mono font-semibold">Action: </span>
                  {gap.recommendedAction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
