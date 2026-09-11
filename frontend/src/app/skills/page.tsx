import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { studentSkills } from "@/data/skillsData";
import { evidencePillars, evidenceTimeline } from "@/data/evidenceData";
import { SkillCard } from "@/components/dashboard/SkillCard";
import { EvidenceVisualization } from "@/components/dashboard/EvidenceVisualization";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  Dna, 
  Sparkles, 
  ShieldCheck, 
  Plus, 
  GitBranch, 
  FolderCode, 
  Award, 
  FileCheck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Skill DNA & Evidence | SkillBridge AI",
  description: "Comprehensive verification breakdown of student skills backed by code, projects, certificates, and benchmarks."
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Dna className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Skill DNA & Evidence Engine
              </h1>
            </div>
            <p className="text-sm text-slate-400 max-w-2xl">
              Every skill in your DNA is calibrated through real-time artifact inspection. Zero self-attested claims; only demonstrated engineering and research proof.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/readiness">
              <Button variant="cyan" size="sm" className="font-semibold">
                <span>View Gap Priorities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* 4 Pillars Summary */}
        <EvidenceVisualization />

        {/* Full Skills Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>All Calibrated Skills ({studentSkills.length})</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">
              Ranked by Confidence Score
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>

        {/* Link back to dashboard */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] flex items-center justify-between">
          <div>
            <h3 className="font-bold text-white text-base">Check Opportunity Fit</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              See how your Skill DNA performs against current campus lab and fellowship requisitions.
            </p>
          </div>
          <Link href="/dashboard">
            <Button variant="secondary" size="sm">
              <span>Return to Dashboard</span>
            </Button>
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
