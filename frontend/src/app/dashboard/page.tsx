import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { SkillDNA } from "@/components/dashboard/SkillDNA";
import { EvidenceVisualization } from "@/components/dashboard/EvidenceVisualization";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard";
import { SkillGapSection } from "@/components/dashboard/SkillGapSection";
import { OpportunityUnlockPreview } from "@/components/dashboard/OpportunityUnlockPreview";
import { MakeReadyCTA } from "@/components/dashboard/MakeReadyCTA";
import { EvidenceTimeline } from "@/components/dashboard/EvidenceTimeline";
import { opportunitiesList } from "@/data/opportunitiesData";
import { Compass, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Student Dashboard | SkillBridge AI",
  description: "Evidence-backed skill profile, explainable opportunity matching, and personalized readiness roadmaps."
};

export default function DashboardPage() {
  // Top 3 realistic campus & community opportunities
  const recommendedOpportunities = opportunitiesList.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* 1. Header with Student Profile Context */}
        <DashboardHeader />

        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3 & 4. Skill DNA & Evidence Pillars */}
        <div className="space-y-8">
          {/* Skill DNA Card */}
          <SkillDNA />

          {/* Evidence Visualization */}
          <EvidenceVisualization />
        </div>

        {/* 5 & 6. Recommended Opportunities & Explainable Match Previews */}
        <section id="recommended-opportunities" className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Compass className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Recommended Opportunities (3 Top Matches)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Contextual campus and community roles ranked by algorithmic Match and immediate Readiness scores.
              </p>
            </div>

            <Link
              href="/opportunities"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 transition-all shrink-0"
            >
              <span>Browse All 47 Roles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {recommendedOpportunities.map((opp, idx) => (
              <OpportunityCard 
                key={opp.id} 
                opportunity={opp} 
                // Show the explainable match preview open by default on the first card (AI Research Intern) for immediate demonstration
                initialShowExplain={idx === 0} 
              />
            ))}
          </div>
        </section>

        {/* 7. Skill Gap Section */}
        <SkillGapSection />

        {/* 8. "Make Me Ready" CTA */}
        <MakeReadyCTA />

        {/* 9. Opportunity Unlock Preview */}
        <OpportunityUnlockPreview />

        {/* 10. Activity / Evidence Timeline */}
        <EvidenceTimeline />

      </main>

      <Footer />
    </div>
  );
}
