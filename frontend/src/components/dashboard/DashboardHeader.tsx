"use client";

import React from "react";
import { 
  Sparkles, 
  ShieldCheck, 
  Dna, 
  LockOpen, 
  Clock, 
  ArrowUpRight,
  TrendingUp
} from "lucide-react";
import { currentStudent } from "@/data/studentProfile";
import Link from "next/link";

export function DashboardHeader() {
  return (
    <div className="w-full space-y-4">
      {/* Student Status Quick Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0d1527]/90 to-slate-900/90 border border-white/[0.08] shadow-xl backdrop-blur-xl">
        
        {/* Profile Details */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-cyan-400/40 p-0.5 bg-slate-800">
              <img
                src={currentStudent.avatar}
                alt={currentStudent.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#090d16] flex items-center justify-center">
              <ShieldCheck className="w-3 h-3 text-slate-950 stroke-[3]" />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-bold text-white tracking-tight">
                {currentStudent.name}
              </h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-medium">
                {currentStudent.classYear}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/10">
                {currentStudent.institution}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
              <span>{currentStudent.role}</span>
              <span className="text-slate-600">â¢</span>
              <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                <Clock className="w-3 h-3" /> DNA synced {currentStudent.dnaUpdatedDate}
              </span>
            </p>
          </div>
        </div>

        {/* Core Stats Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-3.5 py-2 rounded-xl bg-slate-800/60 border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Dna className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Skill DNA</p>
              <p className="text-sm font-bold text-white font-mono">
                {currentStudent.verifiedSkillsCount} <span className="text-xs text-slate-400 font-normal">verified</span>
              </p>
            </div>
          </div>

          <div className="px-3.5 py-2 rounded-xl bg-slate-800/60 border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Evidence</p>
              <p className="text-sm font-bold text-emerald-300 font-mono">
                {currentStudent.totalEvidenceCount} <span className="text-xs text-slate-400 font-normal">proofs</span>
              </p>
            </div>
          </div>

          <div className="px-3.5 py-2 rounded-xl bg-slate-800/60 border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <LockOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Unlocked</p>
              <p className="text-sm font-bold text-indigo-300 font-mono">
                {currentStudent.opportunitiesUnlocked} <span className="text-xs text-slate-400 font-normal">roles</span>
              </p>
            </div>
          </div>

          <Link
            href="/readiness"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-semibold text-xs hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all shrink-0"
          >
            <span>Target: AI Lab Ready</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
