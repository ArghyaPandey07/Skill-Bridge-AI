"use client";

import React from "react";
import { evidencePillars, EvidencePillar } from "@/data/evidenceData";
import { 
  FolderGit2, 
  GitPullRequest, 
  Award, 
  FileCheck, 
  ShieldCheck, 
  ArrowUpRight,
  ExternalLink,
  CheckCircle2
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Link from "next/link";

export function EvidenceVisualization() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FolderGit2":
        return <FolderGit2 className="w-5 h-5 text-emerald-400" />;
      case "GitPullRequest":
        return <GitPullRequest className="w-5 h-5 text-cyan-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-violet-400" />;
      case "FileCheck":
        return <FileCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]";
      case "cyan":
        return "hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]";
      case "violet":
        return "hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]";
      case "amber":
        return "hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]";
      default:
        return "hover:border-cyan-500/40";
    }
  };

  return (
    <Card className="border-white/[0.08] bg-[#0c1220]/90">
      <CardHeader className="pb-4 border-b border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <CardTitle className="text-lg font-bold text-white">
                Evidence Foundation (14 Verified Proofs)
              </CardTitle>
            </div>
            <CardDescription>
              SkillBridge does not accept unverified claims. Every percentage in your Skill DNA links back to tangible artifacts across 4 verification pillars.
            </CardDescription>
          </div>

          <Link
            href="/skills"
            className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 transition-colors shrink-0"
          >
            <span>Inspect All Artifacts</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </CardHeader>

      <CardContent className="pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {evidencePillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] transition-all duration-200 flex flex-col justify-between ${getBorderColor(
                pillar.badgeColor
              )}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/[0.08]">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="font-mono text-xl font-bold text-white">
                    {pillar.count}
                    <span className="text-xs text-slate-500 font-normal ml-1">items</span>
                  </span>
                </div>

                <div className="mt-3">
                  <h4 className="font-semibold text-white text-sm flex items-center gap-1.5">
                    {pillar.title}
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Recent highlight snippet */}
              <div className="mt-4 pt-3 border-t border-white/[0.05]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Latest Verified:
                </p>
                <p className="text-[11px] text-slate-300 font-mono line-clamp-2 mt-0.5">
                  {pillar.recentHighlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
