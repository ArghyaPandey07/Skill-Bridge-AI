"use client";

import React from "react";
import { SkillMatchDetail } from "@/data/opportunitiesData";
import { 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  FolderGit2, 
  GitPullRequest, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ExplainableMatchProps {
  matchDetails: SkillMatchDetail[];
  opportunityTitle?: string;
}

export function ExplainableMatch({ matchDetails, opportunityTitle }: ExplainableMatchProps) {
  const getStatusBadge = (status: SkillMatchDetail["status"]) => {
    switch (status) {
      case "Strong evidence":
        return <Badge variant="emerald" size="sm">Strong evidence</Badge>;
      case "2 projects":
        return <Badge variant="emerald" size="sm">2 projects</Badge>;
      case "GitHub evidence":
        return <Badge variant="cyan" size="sm">GitHub evidence</Badge>;
      case "Moderate":
        return <Badge variant="amber" size="sm">Moderate</Badge>;
      case "Missing":
        return <Badge variant="danger" size="sm">Missing (Gap)</Badge>;
      default:
        return <Badge variant="outline" size="sm">{status}</Badge>;
    }
  };

  const getStatusIcon = (statusType: SkillMatchDetail["statusType"]) => {
    switch (statusType) {
      case "strong":
        return <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />;
      case "moderate":
        return <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />;
      case "missing":
        return <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />;
    }
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-slate-950/60 p-4 space-y-3">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
            Why you match {opportunityTitle ? `â ${opportunityTitle}` : ""}
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          Deterministic Inference
        </span>
      </div>

      <div className="divide-y divide-white/[0.04]">
        {matchDetails.map((item) => (
          <div
            key={item.skillName}
            className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            {/* Skill Name & Status Icon */}
            <div className="flex items-center gap-2 min-w-[180px]">
              {getStatusIcon(item.statusType)}
              <span className="font-semibold text-white text-sm">
                {item.skillName}
              </span>
              <span className="text-slate-600 font-mono text-xs hidden sm:inline">â</span>
            </div>

            {/* Evidence Note */}
            <div className="text-xs text-slate-400 flex-1 truncate sm:px-2">
              <span className="text-slate-300">{item.evidenceNote}</span>
            </div>

            {/* Status Badge */}
            <div className="shrink-0">
              {getStatusBadge(item.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
