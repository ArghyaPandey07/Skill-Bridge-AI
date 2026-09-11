export interface StudentProfile {
  id: string;
  name: string;
  avatar: string;
  role: string;
  institution: string;
  classYear: string;
  verifiedSkillsCount: number;
  totalEvidenceCount: number;
  overallDnaConfidence: number;
  opportunitiesUnlocked: number;
  highAffinityMatchesCount: number;
  targetFocus: string;
  dnaUpdatedDate: string;
}

export const currentStudent: StudentProfile = {
  id: "student-alex-chen",
  name: "Alex Chen",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  role: "Undergraduate Researcher & Engineer",
  institution: "Stanford University",
  classYear: "Class of 2026",
  verifiedSkillsCount: 12,
  totalEvidenceCount: 14,
  overallDnaConfidence: 84,
  opportunitiesUnlocked: 47,
  highAffinityMatchesCount: 3,
  targetFocus: "Autonomous Systems & AI Research",
  dnaUpdatedDate: "Today at 2:15 PM"
};
