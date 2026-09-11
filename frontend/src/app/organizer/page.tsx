"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { currentStudent } from "@/data/studentProfile";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MatchScoreBadge } from "@/components/dashboard/MatchScoreBadge";
import { 
  Building2, 
  Sparkles, 
  PlusCircle, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Dna, 
  ArrowRight,
  ExternalLink,
  Users,
  GitBranch,
  FolderCode
} from "lucide-react";
import Link from "next/link";

export default function OrganizerPage() {
  const [selectedRole, setSelectedRole] = useState("AI Research Intern");

  const postedRoles = [
    { title: "AI Research Intern", applicantsCount: 14, highMatchesCount: 3, deadline: "Sept 16, 2026" },
    { title: "Autonomous Drone Flight Systems Fellow", applicantsCount: 8, highMatchesCount: 2, deadline: "Oct 2, 2026" },
    { title: "Edge Vision Pruning Capstone Lead", applicantsCount: 11, highMatchesCount: 4, deadline: "Oct 15, 2026" }
  ];

  const matchedCandidates = [
    {
      student: currentStudent,
      matchScore: 92,
      readinessScore: 81,
      topEvidence: "2,400+ LOC Drone Nav Stack + Stanford CS229 ML Specialization",
      status: "Ready for Lab Interview",
      skillsMatched: ["Python (91%)", "ML (84%)", "Data Analysis (80%)"]
    },
    {
      student: {
        id: "student-maya-lin",
        name: "Maya Lin",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
        institution: "Stanford University",
        classYear: "Class of 2025",
        role: "Robotics Undergrad"
      },
      matchScore: 86,
      readinessScore: 78,
      topEvidence: "ROS2 Nav2 Gazebo Simulation + PyTorch Object Detection",
      status: "High Affinity Fit",
      skillsMatched: ["Python (88%)", "ROS2 (82%)", "C++ (75%)"]
    },
    {
      student: {
        id: "student-dev-patel",
        name: "Dev Patel",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
        institution: "Stanford University",
        classYear: "Class of 2026",
        role: "Data Science Major"
      },
      matchScore: 78,
      readinessScore: 68,
      topEvidence: "Kaggle Grandmaster Notebooks + Climate Time-Series Pipeline",
      status: "Developing Match",
      skillsMatched: ["Python (90%)", "Data Analysis (85%)", "PyTorch (68%)"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Organizer Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Building2 className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Campus Organizer & Lab Portal
              </h1>
            </div>
            <p className="text-sm text-slate-400 max-w-2xl">
              Stanford Vision & AI Lab (SVL) Requisition Console. Review verified student talent matched deterministically against your lab benchmarks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="cyan" size="sm" className="font-semibold">
              <PlusCircle className="w-4 h-4" />
              <span>Post New Campus Requisition</span>
            </Button>
          </div>
        </div>

        {/* Active Postings Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postedRoles.map((role) => (
            <div
              key={role.title}
              onClick={() => setSelectedRole(role.title)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedRole === role.title
                  ? "bg-indigo-950/25 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                  : "bg-slate-900/60 border-white/[0.08] hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <Badge variant={selectedRole === role.title ? "cyan" : "outline"} size="sm">
                  Active Requisition
                </Badge>
                <span className="text-[11px] font-mono text-slate-400">Due {role.deadline}</span>
              </div>

              <h3 className="font-bold text-white text-sm mt-2">{role.title}</h3>

              <div className="mt-3 pt-2 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{role.applicantsCount} student DNA matches</span>
                <span className="text-emerald-400 font-bold">{role.highMatchesCount} high affinity</span>
              </div>
            </div>
          ))}
        </div>

        {/* Matched Talent Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Ranked Talent Matches for: {selectedRole}</span>
            </h2>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
              Zero resume screening required
            </span>
          </div>

          <div className="space-y-4">
            {matchedCandidates.map((candidate, idx) => (
              <div
                key={candidate.student.name}
                className="p-5 sm:p-6 rounded-3xl bg-slate-900/80 border border-white/[0.08] hover:border-cyan-500/40 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Candidate Info */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20 bg-slate-800 shrink-0">
                    <img
                      src={candidate.student.avatar}
                      alt={candidate.student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-white">
                        {candidate.student.name}
                      </h3>
                      <Badge variant={idx === 0 ? "emerald" : "default"} size="sm">
                        {candidate.status}
                      </Badge>
                      <span className="text-xs font-mono text-slate-400">
                        {candidate.student.classYear}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400">
                      {candidate.student.institution} â¢ {candidate.student.role}
                    </p>

                    <p className="text-xs text-slate-300 pt-1 flex items-center gap-1.5 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Proof Artifact: {candidate.topEvidence}</span>
                    </p>

                    {/* Matched Skills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {candidate.skillsMatched.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-white/[0.06] text-cyan-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Score and Action */}
                <div className="flex items-center gap-6 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-white/[0.06]">
                  <div className="text-center">
                    <MatchScoreBadge score={candidate.matchScore} size="md" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link href="/dashboard">
                      <Button variant="cyan" size="sm" className="font-semibold text-xs">
                        <span>Inspect Skill DNA</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                    <Button variant="secondary" size="sm" className="text-xs">
                      <span>Schedule Lab Interview</span>
                    </Button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
