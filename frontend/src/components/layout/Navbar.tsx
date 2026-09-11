"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, 
  Search, 
  Bell, 
  Dna, 
  Compass, 
  Target, 
  Building2, 
  Menu, 
  X,
  CheckCircle2
} from "lucide-react";
import { currentStudent } from "@/data/studentProfile";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: Dna },
    { href: "/skills", label: "Skill DNA", icon: Sparkles },
    { href: "/opportunities", label: "Opportunities", icon: Compass },
    { href: "/readiness", label: "Readiness Plan", icon: Target },
    { href: "/organizer", label: "Organizer Portal", icon: Building2 },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#080c14]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-emerald-500/20 border border-cyan-500/40 group-hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all">
              <Dna className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-white text-lg">SkillBridge</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">AI</span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono hidden sm:block">EVIDENCE-BACKED TALENT</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-sm mx-4">
            <div className={`relative w-full transition-all duration-200 ${searchFocused ? "scale-[1.01]" : ""}`}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search skills, verified evidence, roles..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full h-9 pl-9 pr-8 text-xs bg-slate-900/90 border border-white/10 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 border border-slate-700/80 rounded px-1.5 py-0.5">
                âK
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            
            {/* Campus Node Badge */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px]">Stanford Node</span>
            </div>

            {/* Notifications */}
            <button 
              aria-label="Notifications"
              className="relative p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-colors"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            </button>

            {/* Student Profile Pill */}
            <Link 
              href="/dashboard" 
              className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all group"
            >
              {/* Avatar */}
              <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-white/20 bg-slate-800">
                <img
                  src={currentStudent.avatar}
                  alt={currentStudent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {currentStudent.name}
                  </span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                  {currentStudent.verifiedSkillsCount} verified skills
                </p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 space-y-2">
            <div className="px-2 mb-3">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search skills, opportunities..."
                  className="w-full h-9 pl-9 pr-3 text-xs bg-slate-900 border border-white/10 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 text-sm rounded-xl font-medium transition-colors ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
}
