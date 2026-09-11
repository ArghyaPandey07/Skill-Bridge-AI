"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { opportunitiesList, Opportunity } from "@/data/opportunitiesData";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard";
import { Compass, Search, Filter, Sparkles, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [minMatch, setMinMatch] = useState<number>(0);

  const typeFilters = ["All", "Campus Research Lab", "Student Organization", "Community Fellowship", "Civic Tech"];

  const filteredOpportunities = opportunitiesList.filter((opp) => {
    const matchesSearch = 
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.skillsRequired.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedType === "All" || opp.type === selectedType;
    const matchesScore = opp.matchScore >= minMatch;

    return matchesSearch && matchesType && matchesScore;
  });

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Compass className="w-5 h-5" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Campus & Community Opportunities
              </h1>
            </div>
            <p className="text-sm text-slate-400 max-w-2xl">
              Discover research labs, student initiatives, and civic projects matched against your verified Skill DNA.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
              47 total ecosystem roles
            </span>
          </div>
        </div>

        {/* Filter / Search Control Bar */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, lab name, or skill (e.g. PyTorch, SQL)..."
                className="w-full h-10 pl-9 pr-4 text-xs bg-slate-950/80 border border-white/10 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
              />
            </div>

            {/* Match Score Threshold Pill Buttons */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">Min Match:</span>
              <button
                onClick={() => setMinMatch(0)}
                className={`px-2.5 py-1 rounded-lg ${minMatch === 0 ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-slate-950 text-slate-400 border border-white/5"}`}
              >
                All
              </button>
              <button
                onClick={() => setMinMatch(75)}
                className={`px-2.5 py-1 rounded-lg ${minMatch === 75 ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-slate-950 text-slate-400 border border-white/5"}`}
              >
                75%+
              </button>
              <button
                onClick={() => setMinMatch(85)}
                className={`px-2.5 py-1 rounded-lg ${minMatch === 85 ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-slate-950 text-slate-400 border border-white/5"}`}
              >
                85%+ High Match
              </button>
            </div>
          </div>

          {/* Type Filter Pills */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.05] overflow-x-auto pb-1">
            <span className="text-xs font-mono text-slate-400 shrink-0">Category:</span>
            {typeFilters.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedType(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-medium shrink-0 transition-colors ${
                  selectedType === tab
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white bg-slate-950/60 border border-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Opportunities List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Showing {filteredOpportunities.length} opportunities</span>
            <span>Sorted by Match Affinity</span>
          </div>

          {filteredOpportunities.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-3xl bg-slate-900/40 border border-white/10 space-y-3">
              <p className="text-white font-semibold">No opportunities matching your criteria</p>
              <p className="text-xs text-slate-400">Try loosening your search query or minimum match score filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredOpportunities.map((opp) => (
                <OpportunityCard key={opp.id} opportunity={opp} initialShowExplain={false} />
              ))}
            </div>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
