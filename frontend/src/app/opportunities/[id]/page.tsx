import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { opportunitiesList } from "@/data/opportunitiesData";
import { MatchScoreBadge } from "@/components/dashboard/MatchScoreBadge";
import { ReadinessScoreBadge } from "@/components/dashboard/ReadinessScoreBadge";
import { ExplainableMatch } from "@/components/dashboard/ExplainableMatch";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  ArrowLeft, 
  Building2, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  ShieldCheck, 
  Send
} from "lucide-react";

export function generateStaticParams() {
  return opportunitiesList.map((opp) => ({
    id: opp.id,
  }));
}

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opportunity = opportunitiesList.find((opp) => opp.id === id);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Back navigation */}
        <div>
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Opportunities Catalog</span>
          </Link>
        </div>

        {/* Opportunity Header Banner */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-r from-slate-900/90 via-[#0c1527]/90 to-slate-900/90 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cyan" size="sm">{opportunity.type}</Badge>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {opportunity.location}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-amber-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3" />
                  {opportunity.deadline}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {opportunity.title}
              </h1>

              <p className="text-sm sm:text-base font-semibold text-cyan-300 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{opportunity.organization}</span>
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-1">
                <span>Stipend: <strong className="text-white">{opportunity.compensation}</strong></span>
                <span>•</span>
                <span>Commitment: <strong className="text-white">{opportunity.commitment}</strong></span>
              </div>
            </div>

            {/* Score Badges */}
            <div className="flex items-center gap-4 bg-slate-950/80 p-4 rounded-3xl border border-white/10 shrink-0">
              <MatchScoreBadge score={opportunity.matchScore} size="lg" />
              <div className="w-[1px] h-14 bg-white/10" />
              <ReadinessScoreBadge score={opportunity.readinessScore} size="lg" />
            </div>

          </div>
        </div>

        {/* Main Grid: Left Details & Right Match / Readiness Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (2 Cols): Overview & Requirements */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/[0.08] space-y-4">
              <h2 className="text-lg font-bold text-white tracking-tight">
                Role & Research Overview
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {opportunity.overview}
              </p>
            </div>

            {/* Responsibilities & Requirements */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/[0.08] space-y-6">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {opportunity.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Qualifications & Requisites
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {opportunity.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Explainable Match Full Matrix */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Explainable Match Breakdown (Deterministic Audit)</span>
                </h2>
              </div>
              <ExplainableMatch matchDetails={opportunity.whyYouMatch} opportunityTitle={opportunity.title} />
            </div>

            {/* Step-by-Step Readiness Roadmap */}
            {opportunity.readinessRoadmap.length > 0 && (
              <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <Target className="w-4 h-4 text-emerald-400" />
                      <span>Opportunity Readiness Path</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Follow these steps to transition from {opportunity.readinessScore}% to 98% interview readiness.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {opportunity.readinessRoadmap.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-4 rounded-2xl bg-slate-950/70 border border-white/[0.06] flex items-start gap-4"
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                        step.status === "completed" 
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" 
                          : step.status === "in-progress"
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                            : "bg-slate-800 text-slate-400 border border-white/10"
                      }`}>
                        {step.stepNumber}
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-white text-sm">
                            {step.title}
                          </h4>
                          <span className="font-mono text-xs text-cyan-400">
                            {step.impactGain}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="text-[10px] font-mono text-slate-500 pt-1">
                          Estimated time: {step.timeEstimate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (1 Col): Organizer Contact & Actions */}
          <div className="space-y-6">
            
            {/* Action Box */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/[0.08] space-y-4">
              <h3 className="font-bold text-white text-base">Opportunity Readiness Status</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your Skill DNA matches <strong className="text-emerald-400">{opportunity.matchScore}%</strong> of the required technical criteria.
              </p>

              <div className="pt-2 space-y-3">
                <Link href={`/readiness?target=${opportunity.id}`} className="block">
                  <Button variant="cyan" size="md" className="w-full font-bold">
                    <Target className="w-4 h-4" />
                    <span>Make Me 100% Ready</span>
                  </Button>
                </Link>

                <Button variant="secondary" size="md" className="w-full">
                  <Send className="w-4 h-4" />
                  <span>Transmit Verified Skill DNA</span>
                </Button>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] text-slate-400 font-mono space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified by SkillBridge AI Engine</span>
                </div>
                <p>No resume PDF required. Organizer receives direct proof artifacts.</p>
              </div>
            </div>

            {/* Organizer Contact Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/[0.08] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Organizer & Lab Lead
              </h3>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/20 bg-slate-800">
                  <img
                    src={opportunity.organizerContact.avatar}
                    alt={opportunity.organizerContact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {opportunity.organizerContact.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {opportunity.organizerContact.role}
                  </p>
                  <p className="text-[11px] text-cyan-400 font-mono">
                    {opportunity.organizerContact.labOrDepartment}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
