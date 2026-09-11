"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Opportunity } from "@/data/opportunitiesData";
import { MatchScoreBadge } from "./MatchScoreBadge";
import { ReadinessScoreBadge } from "./ReadinessScoreBadge";
import { ExplainableMatch } from "./ExplainableMatch";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  Building2, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  DollarSign,
  Sparkles,
  Target
} from "lucide-react";

interface OpportunityCardProps {
  opportunity: Opportunity;
  initialShowExplain?: boolean;
}

export function OpportunityCard({ opportunity, initialShowExplain = false }: OpportunityCardProps) {
  const [showExplain, setShowExplain] = useState(initialShowExplain);

  const getTypeVariant = (type: Opportunity["type"]) => {
    switch (type) {
      case "Campus Research Lab":
        return "cyan";
      case "Student Organization":
        return "violet";
      case "Community Fellowship":
        return "emerald";
      default:
        return "default";
    }
  };

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-[#0c1220]/90 hover:border-cyan-500/40 p-5 sm:p-6 transition-all duration-300 shadow-xl flex flex-col justify-between">
      
      <div>
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
          <div className="flex items-center gap-2">
            <Badge variant={getTypeVariant(opportunity.type)} size="sm">
              {opportunity.type}
            </Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
              <MapPin className="w-3 h-3 text-slate-500" />
              {opportunity.location}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-xs font-mono">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>{opportunity.deadline}</span>
          </div>
        </div>

        {/* Core Opportunity Header & Dual Radial Scores */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-lg">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight hover:text-cyan-300 transition-colors">
              <Link href={`/opportunities/${opportunity.id}`}>
                {opportunity.title}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{opportunity.organization}</span>
            </p>
            <p className="text-xs text-slate-400 leading-relaxed pt-1 line-clamp-2">
              {opportunity.summary}
            </p>
          </div>

          {/* Match & Readiness Scores */}
          <div className="flex items-center gap-3 shrink-0 bg-slate-950/70 p-2.5 rounded-2xl border border-white/[0.06]">
            <MatchScoreBadge score={opportunity.matchScore} size="md" />
            <div className="w-[1px] h-10 bg-white/10" />
            <ReadinessScoreBadge score={opportunity.readinessScore} size="md" />
          </div>
        </div>

        {/* Required Skills Tag Ribbon */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono text-slate-500 uppercase mr-1">Required:</span>
          {opportunity.skillsRequired.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 rounded-md bg-slate-900 border border-white/[0.08] text-slate-300 font-mono"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Explainable Match Toggle Section */}
        <div className="mt-4 pt-3 border-t border-white/[0.06]">
          <button
            onClick={() => setShowExplain(!showExplain)}
            className="flex items-center justify-between w-full py-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{showExplain ? "Hide Match Breakdown" : "Inspect Why You Match (Inference Matrix)"}</span>
            </span>
            {showExplain ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showExplain && (
            <div className="mt-3">
              <ExplainableMatch matchDetails={opportunity.whyYouMatch} />
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-slate-400 font-mono">
          <span className="text-slate-300 font-semibold">{opportunity.compensation}</span>
        </div>

        <div className="flex items-center gap-2">
          <Link href={`/readiness?target=${opportunity.id}`}>
            <Button variant="outline" size="sm" className="border-white/15 hover:border-cyan-400 text-xs">
              <Target className="w-3.5 h-3.5 text-cyan-400" />
              <span>Make Me Ready</span>
            </Button>
          </Link>
          <Link href={`/opportunities/${opportunity.id}`}>
            <Button variant="cyan" size="sm" className="text-xs font-semibold">
              <span>View Match Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
}
