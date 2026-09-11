"use client";

import React, { useState } from "react";
import { SkillItem } from "@/data/skillsData";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  GitBranch, 
  FolderCode, 
  Award, 
  CheckCircle2,
  Sparkles,
  Layers
} from "lucide-react";

interface SkillCardProps {
  skill: SkillItem;
}

export function SkillCard({ skill }: SkillCardProps) {
  const [expanded, setExpanded] = useState(false);

  // Confidence colors
  const getConfidenceColor = (conf: number) => {
    if (conf >= 85) return "emerald";
    if (conf >= 70) return "cyan";
    if (conf >= 55) return "amber";
    return "violet";
  };

  const color = getConfidenceColor(skill.confidence);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 hover:bg-slate-900/90 hover:border-cyan-500/40 transition-all p-4 duration-200">
      
      {/* Main Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-white text-sm sm:text-base tracking-tight">
              {skill.name}
            </h4>
            {skill.confidence >= 85 && (
              <span title="High confidence verified" className="inline-flex">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-mono text-[11px]">{skill.category}</span>
            <span className="text-slate-600">â¢</span>
            <span className="text-slate-300 font-medium">{skill.proficiency}</span>
          </div>
        </div>

        {/* Evidence Pill */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Badge variant={skill.evidenceCount > 0 ? "cyan" : "outline"} size="sm" className="font-mono">
            {skill.evidenceCount} {skill.evidenceCount === 1 ? "evidence" : "evidence"}
          </Badge>
        </div>
      </div>

      {/* Confidence Bar & Percentage */}
      <div className="mt-4 space-y-1.5">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">Confidence Score</span>
          <span className={`font-bold ${
            color === "emerald" ? "text-emerald-400" :
            color === "cyan" ? "text-cyan-400" :
            color === "amber" ? "text-amber-400" : "text-violet-400"
          }`}>
            {skill.confidence}%
          </span>
        </div>
        <Progress value={skill.confidence} color={color} size="sm" />
      </div>

      {/* Mini Evidence Distribution Badges */}
      <div className="mt-3.5 pt-3 border-t border-white/[0.05] flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          {skill.evidenceBreakdown.projects > 0 && (
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
              <FolderCode className="w-3 h-3" /> {skill.evidenceBreakdown.projects}p
            </span>
          )}
          {skill.evidenceBreakdown.github > 0 && (
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300">
              <GitBranch className="w-3 h-3" /> {skill.evidenceBreakdown.github}gh
            </span>
          )}
          {skill.evidenceBreakdown.certificates > 0 && (
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-300">
              <Award className="w-3 h-3" /> {skill.evidenceBreakdown.certificates}cert
            </span>
          )}
          {skill.evidenceBreakdown.assessments > 0 && (
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300">
              <CheckCircle2 className="w-3 h-3" /> {skill.evidenceBreakdown.assessments}eval
            </span>
          )}
          {skill.evidenceCount === 0 && (
            <span className="text-amber-400/80 text-[11px]">No proofs attached (Gap)</span>
          )}
        </div>

        {/* Expand / View Evidence Toggle */}
        {skill.evidenceList.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
          >
            <span>{expanded ? "Hide" : "Inspect"}</span>
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        )}
      </div>

      {/* Expanded Evidence Drawer */}
      {expanded && skill.evidenceList.length > 0 && (
        <div className="mt-3 pt-3 border-t border-white/[0.08] space-y-2">
          <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
            Verified Proof Artifacts:
          </p>
          <div className="space-y-1.5">
            {skill.evidenceList.map((ev) => (
              <div
                key={ev.id}
                className="p-2 rounded-xl bg-slate-950/70 border border-white/[0.05] text-xs space-y-1"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-medium text-slate-200 text-[12px] leading-snug">
                    {ev.title}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 shrink-0">
                    +{ev.confidenceContribution}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>{ev.sourceName}</span>
                  <span>{ev.verifiedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
