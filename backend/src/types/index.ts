// Skill proficiency levels
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// Types of opportunities available to students
export type OpportunityType =
  | 'research'
  | 'internship'
  | 'campus-project'
  | 'event'
  | 'gig'
  | 'hackathon'
  | 'startup'
  | 'social-impact';

// Difficulty levels for opportunities
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

// --- Core Interfaces ---

export interface Skill {
  name: string;
  level: SkillLevel;
  evidence: string;     // How the student acquired/demonstrated this skill
  confidence: number;   // 0.0 – 1.0, self-reported or inferred confidence
}

export interface StudentProfile {
  id: string;
  name: string;
  education: string;
  branch: string;
  year: number;          // Current year of study (1-4 for undergrad, etc.)
  skills: Skill[];
  interests: string[];
  projects: string[];
  experience: string[];
}

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: OpportunityType;
  description: string;
  requiredSkills: string[];
  preferredSkills: string[];
  location: string;
  duration: string;
  difficulty: DifficultyLevel;
  deadline: string;      // ISO date string
}

export interface MatchResult {
  opportunityId: string;
  overallScore: number;  // 0 – 100
  matchedSkills: string[];
  missingSkills: string[];
  explanation: string;   // Human-readable reason for the match score
}

// --- API Input Types ---

/** Input shape accepted by POST /api/profile.
 *  Skills are simple strings here; they are converted to Skill[]
 *  internally so the matching engine can enrich them later. */
export interface CreateProfileInput {
  name: string;
  education: string;
  branch: string;
  year: number;
  skills: string[];
  interests: string[];
  projects: string[];
  experience: string[];
}
