"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { 
  LockOpen, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  TrendingUp,
  Building2
} from "lucide-react";
import Link from "next/link";

interface UnlockSimulatorItem {
  skill: string;
  unlockedCount: number;
  sampleRoles: string[];
  effort: string;
  category: string;
}

export function OpportunityUnlockPreview() {
  const unlockableSkills: UnlockSimulatorItem[] = [
    {
      skill: "Learn SQL & Relational Optimization",
      unlockedCount: 37,
      sampleRoles: [
        "Community Climate Data Analyst (Bay Area CAN)",
        "Stanford Medical Center Health Informatics Fellow",
        "Civic Tech Database Architect (City of San Jose)"
      ],
      effort: "3-4 days (1 proctored benchmark)",
      category: "Data Systems"
    },
    {
      skill: "Formalize Research Methodology",
      unlockedCount: 24,
      sampleRoles: [
        "AI Research Intern (Stanford Vision & AI Lab)",
        "NLP Capstone Researcher (Stanford HAI)",
        "Autonomous Systems Lab Fellow"
      ],
      effort: "5-7 days (1 ablation paper replication)",
      category: "Academic Research"
    },
    {
      skill: "Master Docker & Containerization",
      unlockedCount: 19,
      sampleRoles: [
        "Full-Stack Lead (Stanford ACM / TreeHacks)",
        "Campus Cloud Infrastructure Assistant",
        "Robotics ROS2 Deployment Engineer"
      ],
      effort: "2 days (1 containerized CI pipeline)",
      category: "Infrastructure"
    }
  ];

  const [activeSkill, setActiveSkill] = useState<UnlockSimulatorItem>(unlockableSkills[0]);

  return (
    <Card className="border-white/[0.08] bg-gradient-to-br from-[#0c1527]/90 via-[#0d1222]/90 to-[#080d1a]/90 shadow-2xl">
      <CardHeader className="pb-4 border-b border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <LockOpen className="w-4 h-4" />
              </div>
              <CardTitle className="text-lg font-bold text-white">
                Opportunity Unlock Simulator
              </CardTitle>
            </div>
            <CardDescription>
              Simulate how closing specific demonstrated skill gaps expands your matching surface across the campus ecosystem.
            </CardDescription>
          </div>

          <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
            <span>Dynamic Multiplier</span>
          </div>
        </div>

        {/* Skill Selector Tabs */}
        <div className="flex items-center gap-2 pt-3 overflow-x-auto pb-1">
          {unlockableSkills.map((item) => (
            <button
              key={item.skill}
              onClick={() => setActiveSkill(item)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shrink-0 ${
                activeSkill.skill === item.skill
                  ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                  : "bg-slate-900/80 text-slate-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              <span>{item.skill.split("&")[0]}</span>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/20">
                +{item.unlockedCount}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-5">
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/[0.06] space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-indigo-400">
                  Target Skill:
                </span>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {activeSkill.skill}
                </h4>
              </div>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-2 font-mono">
                <span>Estimated verify time: {activeSkill.effort}</span>
                <span className="text-slate-600">â¢</span>
                <span className="text-slate-300">{activeSkill.category}</span>
              </p>
            </div>

            {/* Big Unlock Pill */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 px-5 py-3 rounded-2xl shrink-0">
              <Sparkles className="w-6 h-6 text-indigo-400" />
              <div>
                <p className="text-2xl font-black text-indigo-300 font-mono leading-none">
                  +{activeSkill.unlockedCount}
                </p>
                <p className="text-[11px] font-mono text-indigo-200 mt-1">
                  opportunities unlocked
                </p>
              </div>
            </div>
          </div>

          {/* Sample Roles Unlocked */}
          <div className="pt-3 border-t border-white/[0.06] space-y-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Sample Campus & Community Matches Ready to Apply:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeSkill.sampleRoles.map((role) => (
                <div
                  key={role}
                  className="p-3 rounded-xl bg-slate-900/90 border border-white/[0.04] text-xs space-y-1"
                >
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Instant Match Fit</span>
                  </div>
                  <p className="font-medium text-slate-200 line-clamp-2 leading-snug">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              Ready to claim this +{activeSkill.unlockedCount} opportunity surge?
            </span>
            <Link href="/readiness">
              <Button variant="cyan" size="sm" className="font-semibold">
                <span>Start Gap Sprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
