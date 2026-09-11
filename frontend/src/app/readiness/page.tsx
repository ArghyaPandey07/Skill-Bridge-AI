"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { topSkillGaps } from "@/data/skillsData";
import { opportunitiesList } from "@/data/opportunitiesData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import { 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  LockOpen, 
  Zap,
  TrendingUp,
  Circle
} from "lucide-react";
import Link from "next/link";

interface MilestoneTask {
  id: string;
  title: string;
  description: string;
  category: string;
  timeEstimate: string;
  impactGain: number;
  completed: boolean;
  artifactProofRequired: string;
}

export default function ReadinessPage() {
  const [targetRole, setTargetRole] = useState(opportunitiesList[0]);
  const [tasks, setTasks] = useState<MilestoneTask[]>([
    {
      id: "task-1",
      title: "Replicate ViT Edge Token Pruning Paper",
      description: "Run the ablation harness on simulated edge drone robotics workloads and document test accuracy.",
      category: "Research Methodology",
      timeEstimate: "3 days",
      impactGain: 8,
      completed: true,
      artifactProofRequired: "github.com/alexchen/vit-ablation commit"
    },
    {
      id: "task-2",
      title: "Implement Slurm GPU Cluster Evaluation Script",
      description: "Write reproducible bash submission script conforming to Stanford AI Lab cluster benchmarks.",
      category: "Infrastructure & Research",
      timeEstimate: "2 days",
      impactGain: 6,
      completed: false,
      artifactProofRequired: "eval_slurm.sh validated execution"
    },
    {
      id: "task-3",
      title: "Submit Proctored SQL Optimization Challenge",
      description: "Improve relational indexing score from 62% to 85% on PostGIS spatial queries.",
      category: "Systems & Data",
      timeEstimate: "3 days",
      impactGain: 5,
      completed: false,
      artifactProofRequired: "Stanford CS145 Proctored Evaluation"
    }
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const baseScore = 81;
  const addedScore = tasks.filter(t => t.completed).reduce((sum, t) => sum + t.impactGain, 0) - (tasks[0].completed ? tasks[0].impactGain : 0);
  const currentReadiness = Math.min(100, baseScore + addedScore);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Target className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Make Me Ready: Personalized 14-Day Sprint
              </h1>
            </div>
            <p className="text-sm text-slate-400 max-w-2xl">
              Turn your skill gaps into verified strengths. Each completed milestone attaches cryptographic evidence directly into your Skill DNA.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="secondary" size="sm">
                <span>Return to Dashboard</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Dynamic Target Role Header & Projected Trajectory */}
        <div className="p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1a2f] via-[#091122] to-[#0a1224] shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>OPTIMIZED READINESS TARGET</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Target Role: {targetRole.title}
              </h2>
              <p className="text-sm text-slate-300">
                {targetRole.organization} â¢ Autumn 2026 Cohort
              </p>
              <p className="text-xs text-slate-400 font-mono pt-1">
                Completing this roadmap eliminates the <strong>Research Methodology</strong> and <strong>SQL</strong> blockers.
              </p>
            </div>

            {/* Projected Readiness Meter */}
            <div className="flex items-center gap-6 p-5 rounded-2xl bg-slate-950/80 border border-white/10 shrink-0">
              <div className="text-center">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Current Readiness</p>
                <p className="text-3xl font-extrabold text-white font-mono mt-0.5">{currentReadiness}%</p>
              </div>

              <div className="text-slate-600 font-mono text-xl">â</div>

              <div className="text-center">
                <p className="text-[11px] font-mono text-emerald-400 uppercase">Target Velocity</p>
                <p className="text-3xl font-extrabold text-emerald-400 font-mono mt-0.5">98%</p>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Roadmap Progress: {completedCount} of {tasks.length} Milestones Verified</span>
              <span className="text-cyan-400 font-bold">{Math.round((completedCount / tasks.length) * 100)}% Complete</span>
            </div>
            <Progress value={(completedCount / tasks.length) * 100} color="emerald" size="md" />
          </div>
        </div>

        {/* Milestone Action Checklist */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Interactive Action Milestones (Click to test verification state)</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Click checkboxes to simulate proof submission
            </span>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  task.completed
                    ? "bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                    : "bg-slate-900/70 border-white/[0.08] hover:border-white/20"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="mt-1">
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500 hover:text-cyan-400 transition-colors" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className={`text-sm font-semibold tracking-tight ${
                        task.completed ? "text-emerald-200 line-through opacity-80" : "text-white"
                      }`}>
                        {task.title}
                      </h4>
                      <Badge variant={task.completed ? "emerald" : "outline"} size="sm">
                        {task.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {task.description}
                    </p>
                    <div className="text-[11px] font-mono text-slate-500 pt-1 flex items-center gap-2">
                      <span className="text-slate-400">Proof attached:</span>
                      <span className="text-cyan-300">{task.artifactProofRequired}</span>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 pl-8 sm:pl-0">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    +{task.impactGain}% Readiness
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {task.timeEstimate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunity Multiplier Benefit Card */}
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <LockOpen className="w-4 h-4 text-indigo-400" />
              <span>Multi-Role Unlock Ripple Effect</span>
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Completing this 14-day readiness path doesn't just prepare you for the Stanford Vision & AI Lab; it concurrently unlocks <strong>37 additional campus & community roles</strong>.
            </p>
          </div>

          <Link href="/opportunities">
            <Button variant="cyan" size="sm" className="shrink-0 font-semibold">
              <span>View Unlocked Roles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
