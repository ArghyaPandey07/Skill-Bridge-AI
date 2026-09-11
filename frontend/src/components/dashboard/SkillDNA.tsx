"use client";

import React, { useState } from "react";
import { studentSkills } from "@/data/skillsData";
import { SkillCard } from "./SkillCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Dna, Filter, Sparkles, PlusCircle } from "lucide-react";
import Link from "next/link";

export function SkillDNA() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterTabs = ["All", "Core AI & Data", "Systems & Frontend", "Identified Gaps"];

  const filteredSkills = studentSkills.filter((skill) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Identified Gaps") return skill.isGap === true;
    return skill.category === selectedFilter;
  });

  return (
    <Card className="border-white/[0.08] bg-[#0c1220]/90">
      <CardHeader className="pb-4 border-b border-white/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Dna className="w-4 h-4" />
              </div>
              <CardTitle className="text-lg font-bold text-white">
                Student Skill DNA
              </CardTitle>
            </div>
            <CardDescription>
              Algorithmic skill profile inferred from live GitHub repositories, project code, credentials, and proctored evaluations.
            </CardDescription>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/skills"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 transition-colors shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full DNA Graph</span>
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 pt-3 overflow-x-auto pb-1">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                selectedFilter === tab
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
