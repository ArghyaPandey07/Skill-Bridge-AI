import React from "react";
import Link from "next/link";
import { Dna, Sparkles, ShieldCheck, GitBranch } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060910] text-slate-400 text-xs py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Dna className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">SkillBridge AI</p>
              <p className="text-[11px] text-slate-500">
                Evidence-Backed Campus & Community Talent Intelligence
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <Link href="/dashboard" className="hover:text-cyan-400 transition-colors">Student Dashboard</Link>
            <Link href="/skills" className="hover:text-cyan-400 transition-colors">Skill DNA</Link>
            <Link href="/opportunities" className="hover:text-cyan-400 transition-colors">Opportunities Feed</Link>
            <Link href="/readiness" className="hover:text-cyan-400 transition-colors">Readiness Plan</Link>
            <Link href="/organizer" className="hover:text-cyan-400 transition-colors">Campus Organizer</Link>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-mono">100% Evidence Verified</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.05] text-center md:flex md:justify-between text-[11px] text-slate-500">
          <p>Â© 2026 SkillBridge AI â¢ 36-Hour Hackathon Prototype</p>
          <p className="mt-2 md:mt-0 flex items-center justify-center gap-1">
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
