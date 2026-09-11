import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { 
  Dna, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Target, 
  Building2, 
  CheckCircle2, 
  Layers, 
  LockOpen,
  Zap,
  TrendingUp,
  Cpu
} from "lucide-react";
import { currentStudent } from "@/data/studentProfile";

export const metadata = {
  title: "SkillBridge AI | Evidence-Backed Campus Talent Intelligence",
  description: "Bridges the gap between student skills and real-world opportunities through an evidence-backed Skill DNA."
};

export default function HomePage() {
  const narrativeFlow = [
    {
      step: "01",
      title: "Evidence Ingestion",
      desc: "Connects to GitHub commits, deployed projects, course credentials, and proctored code benchmarks.",
      icon: Layers,
      color: "from-cyan-500/20 to-sky-500/20 border-cyan-500/30 text-cyan-400"
    },
    {
      step: "02",
      title: "Skill DNA Synthesis",
      desc: "Infers multidimensional skill proficiencies with calibrated confidence percentages and artifact audit trails.",
      icon: Dna,
      color: "from-sky-500/20 to-indigo-500/20 border-sky-500/30 text-sky-400"
    },
    {
      step: "03",
      title: "Explainable Matching",
      desc: "Maps demonstrated competencies against campus research labs and civic initiatives with deterministic 'Why You Match' reasoning.",
      icon: Sparkles,
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
    },
    {
      step: "04",
      title: "Targeted Readiness",
      desc: "Pinpoints high-impact skill gaps and generates step-by-step milestones to unlock dozens of tier-1 campus roles.",
      icon: Target,
      color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
            
            {/* Hackathon Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/15 text-xs font-mono text-cyan-300 shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>36-HOUR HACKATHON EDITION â¢ CAMPUS & COMMUNITY PROTOTYPE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              The Disconnect Between <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
                Skills and Opportunities
              </span>{" "}
              Is Broken.
            </h1>

            {/* Subheading */}
            <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              Generic job boards and resume scrapers fail campus ecosystems. <strong className="text-white">SkillBridge AI</strong> creates an evidence-backed <strong>Skill DNA</strong>, understands real lab requirements, and provides an explainable path to become opportunity-ready.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="/dashboard">
                <Button variant="cyan" size="lg" className="px-8 font-bold">
                  <span>Enter Student Dashboard</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/organizer">
                <Button variant="outline" size="lg" className="border-white/20 hover:border-cyan-400 px-8">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <span>Explore Organizer Portal</span>
                </Button>
              </Link>
            </div>

            {/* Quick trust proofs */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Self-Reported Fluff</span>
              </span>
              <span className="flex items-center gap-2">
                <Dna className="w-4 h-4 text-cyan-400" />
                <span>Verifiable Proof Hashes</span>
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                <span>Explainable AI Matching</span>
              </span>
            </div>

          </div>
        </section>

        {/* Product Architecture Flow */}
        <section className="py-16 bg-[#0a0f1d] border-y border-white/[0.06] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Coherent Product Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How SkillBridge AI Reinvents Talent Discovery
              </h2>
              <p className="text-sm text-slate-400">
                A continuous virtuous cycle from demonstrated student effort to verified lab readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {narrativeFlow.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="p-6 rounded-3xl bg-slate-900/70 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-slate-500 font-bold">{item.step}</span>
                      <div className={`p-2.5 rounded-xl border bg-gradient-to-br ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Sneak peek banner to student dashboard */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-[#0d162b] to-slate-900 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ACTIVE PROTOTYPE AVAILABLE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to explore the main Student Experience?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Review Alex Chen's live Skill DNA, test the explainable match engine across 3 campus opportunities, and trigger the opportunity unlock simulation.
              </p>
            </div>

            <Link href="/dashboard" className="shrink-0">
              <Button variant="cyan" size="lg" className="font-bold px-8">
                <span>Launch Dashboard</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
