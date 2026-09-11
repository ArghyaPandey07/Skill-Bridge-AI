import { StudentProfile, Opportunity, MatchResult } from '../types';

// --- Scoring Weights ---
const WEIGHTS = {
  requiredSkills: 0.60,
  preferredSkills: 0.20,
  interests: 0.10,
  evidence: 0.10,
};

// --- Helpers ---

/** Normalise a string for case-insensitive comparison. */
const normalise = (s: string): string => s.trim().toLowerCase();

/**
 * Check whether `needle` appears as a word/phrase inside `haystack`
 * using case-insensitive substring matching.
 */
const containsKeyword = (haystack: string, needle: string): boolean =>
  normalise(haystack).includes(normalise(needle));

/**
 * Return the student's skill names as a normalised Set for O(1) lookups.
 */
const getStudentSkillSet = (student: StudentProfile): Set<string> =>
  new Set(student.skills.map((s) => normalise(s.name)));

// --- Component Scorers ---

/**
 * Score how many of the target skills the student has (0–100).
 * Returns the matched and missing skill names (original casing).
 */
const scoreSkills = (
  studentSkillSet: Set<string>,
  targetSkills: string[],
): { score: number; matched: string[]; missing: string[] } => {
  if (targetSkills.length === 0) {
    return { score: 100, matched: [], missing: [] };
  }

  const matched: string[] = [];
  const missing: string[] = [];

  for (const skill of targetSkills) {
    if (studentSkillSet.has(normalise(skill))) {
      matched.push(skill);
    } else {
      missing.push(skill);
    }
  }

  const score = Math.round((matched.length / targetSkills.length) * 100);
  return { score, matched, missing };
};

/**
 * Score interest overlap between the student and the opportunity (0–100).
 *
 * Checks whether each student interest appears in the opportunity's
 * type, title, or description.  This keeps scoring deterministic and
 * transparent — no external API required.
 */
const scoreInterests = (
  student: StudentProfile,
  opportunity: Opportunity,
): { score: number; matches: string[] } => {
  if (student.interests.length === 0) {
    return { score: 0, matches: [] };
  }

  // Common aliases so "Artificial Intelligence" matches "AI" and vice-versa
  const INTEREST_ALIASES: Record<string, string[]> = {
    'artificial intelligence': ['ai', 'machine learning', 'deep learning'],
    'web development': ['web', 'frontend', 'backend', 'full-stack', 'full stack'],
    'data science': ['data', 'analytics', 'data analysis', 'data visualization'],
    'open source': ['open-source', 'oss', 'github'],
    'machine learning': ['ml', 'ai', 'deep learning'],
    'cybersecurity': ['security', 'cyber'],
    'cloud computing': ['cloud', 'aws', 'azure', 'gcp'],
  };

  // Build a single search corpus from opportunity metadata
  const corpus = [
    opportunity.title,
    opportunity.description,
    opportunity.type,
    opportunity.organization,
  ]
    .join(' ')
    .toLowerCase();

  const matches: string[] = [];

  for (const interest of student.interests) {
    const normInterest = normalise(interest);

    // Direct substring match
    if (corpus.includes(normInterest)) {
      matches.push(interest);
      continue;
    }

    // Check aliases for this interest
    const aliases = INTEREST_ALIASES[normInterest] || [];
    const aliasHit = aliases.some((alias) => corpus.includes(alias));
    if (aliasHit) {
      matches.push(interest);
    }
  }

  const score = Math.round((matches.length / student.interests.length) * 100);
  return { score, matches };
};

/**
 * Score whether the student's projects and experience provide evidence
 * relevant to the opportunity's required and preferred skills (0–100).
 *
 * Uses transparent keyword matching: for each required/preferred skill,
 * check if any project or experience entry mentions that skill.
 */
const scoreEvidence = (
  student: StudentProfile,
  opportunity: Opportunity,
): number => {
  const allTargetSkills = [
    ...opportunity.requiredSkills,
    ...opportunity.preferredSkills,
  ];

  if (allTargetSkills.length === 0) {
    return 100;
  }

  // Combine all evidence text into one searchable corpus
  const evidenceCorpus = [...student.projects, ...student.experience]
    .join(' ')
    .toLowerCase();

  // Also pull in per-skill evidence from the Skill objects
  const skillEvidenceCorpus = student.skills
    .map((s) => s.evidence)
    .join(' ')
    .toLowerCase();

  const fullCorpus = `${evidenceCorpus} ${skillEvidenceCorpus}`;

  let evidenceHits = 0;
  for (const skill of allTargetSkills) {
    if (containsKeyword(fullCorpus, skill)) {
      evidenceHits++;
    }
  }

  return Math.round((evidenceHits / allTargetSkills.length) * 100);
};

// --- Explanation Builder ---

const buildExplanation = (
  student: StudentProfile,
  opportunity: Opportunity,
  matchedRequired: string[],
  missingRequired: string[],
  matchedPreferred: string[],
  interestMatches: string[],
  overallScore: number,
): string => {
  const parts: string[] = [];

  // Strength label
  let strength: string;
  if (overallScore >= 75) strength = 'Strong match';
  else if (overallScore >= 50) strength = 'Moderate match';
  else if (overallScore >= 25) strength = 'Weak match';
  else strength = 'Low match';

  // Required skills
  if (matchedRequired.length > 0) {
    parts.push(
      `${strength} because you have ${matchedRequired.join(', ')}, which ${matchedRequired.length === 1 ? 'is' : 'are'} required for this opportunity.`,
    );
  } else {
    parts.push(
      `${strength} — you do not currently have any of the required skills (${opportunity.requiredSkills.join(', ')}).`,
    );
  }

  // Missing required skills
  if (missingRequired.length > 0) {
    parts.push(`You are missing: ${missingRequired.join(', ')}.`);
  }

  // Preferred skills
  if (matchedPreferred.length > 0) {
    parts.push(
      `You also have preferred skills: ${matchedPreferred.join(', ')}.`,
    );
  }

  // Interest alignment
  if (interestMatches.length > 0) {
    parts.push(
      `Your interests in ${interestMatches.join(', ')} align well with this opportunity.`,
    );
  }

  return parts.join(' ');
};

// --- Public API ---

/**
 * Compare a student profile against an opportunity and produce a
 * detailed, explainable MatchResult.
 *
 * This function is the single entry-point for matching logic.
 * It can later be swapped for an AI/embedding-based implementation
 * without changing the controller or route layer.
 */
export const matchStudentToOpportunity = (
  student: StudentProfile,
  opportunity: Opportunity,
): MatchResult => {
  const studentSkillSet = getStudentSkillSet(student);

  // 1. Required skills (60%)
  const required = scoreSkills(studentSkillSet, opportunity.requiredSkills);

  // 2. Preferred skills (20%)
  const preferred = scoreSkills(studentSkillSet, opportunity.preferredSkills);

  // 3. Interest alignment (10%)
  const interests = scoreInterests(student, opportunity);

  // 4. Evidence / experience (10%)
  const evidenceScore = scoreEvidence(student, opportunity);

  // 5. Weighted overall score
  const rawScore =
    required.score * WEIGHTS.requiredSkills +
    preferred.score * WEIGHTS.preferredSkills +
    interests.score * WEIGHTS.interests +
    evidenceScore * WEIGHTS.evidence;

  const overallScore = Math.round(Math.min(100, Math.max(0, rawScore)));

  // 6. Explanation
  const explanation = buildExplanation(
    student,
    opportunity,
    required.matched,
    required.missing,
    preferred.matched,
    interests.matches,
    overallScore,
  );

  return {
    opportunityId: opportunity.id,
    opportunityTitle: opportunity.title,
    overallScore,
    matchedRequiredSkills: required.matched,
    missingRequiredSkills: required.missing,
    matchedPreferredSkills: preferred.matched,
    missingPreferredSkills: preferred.missing,
    interestMatches: interests.matches,
    skillGaps: required.missing, // Skill gaps = required skills the student is missing
    breakdown: {
      requiredSkillScore: required.score,
      preferredSkillScore: preferred.score,
      interestScore: interests.score,
      evidenceScore,
    },
    explanation,
  };
};
