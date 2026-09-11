"use client";

import React from "react";
import { evidenceTimeline } from "@/data/evidenceData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  History, 
  GitCommit, 
  Award, 
  FileCheck, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export function EvidenceTimeline() {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case "github":
        return <GitCommit className="w-4 h-4 text-cyan-400" />;
      case "certificates":
        return <Award className="w-4 h-4 text-violet-400" />;
      case "assessments":
        return <FileCheck className="w-4 h-4 text-amber-400" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <Card className="border-white/[0.08] bg-[#0c1220]/90">
      <CardHeader className="pb-4 border-b border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <History className="w-4 h-4" />
              </div>
              <CardTitle className="text-lg font-bold text-white">
                Skill DNA Activity & Evidence Feed
              </CardTitle>
            </div>
            <CardDescription>
              Real-time audit log of code pushes, pull requests, and certified benchmarks contributing to your verified skill confidence.
            </CardDescription>
          </div>

          <Link
            href="/skills"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 transition-colors shrink-0"
          >
            <span>View Full Audit Trail</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </CardHeader>

      <CardContent className="pt-5">
        <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
          {evidenceTimeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-slate-900 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Event Card */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] hover:bg-slate-900/90 hover:border-white/[0.12] transition-all space-y-2">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-slate-800 border border-white/10">
                      {getTimelineIcon(item.type)}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {item.skillName}
                    </span>
                    <span className="text-slate-600 font-mono text-xs">â¢</span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.timestamp}
                    </span>
                  </div>

                  {/* Confidence delta & Status */}
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="emerald" size="sm" className="font-mono">
                      {item.confidenceDelta}
                    </Badge>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-white/[0.05]">
                      {item.proofHash}
                    </span>
                  </div>
                </div>

                {/* Event Title */}
                <p className="text-xs sm:text-sm text-slate-200 leading-snug font-medium">
                  {item.title}
                </p>

                {/* Source details */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                  <span className="flex items-center gap-1">
                    <span className="text-slate-500">Source:</span> {item.source}
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                    <CheckCircle2 className="w-3 h-3" /> Cryptographically Verified
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
