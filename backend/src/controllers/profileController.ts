import { Request, Response } from 'express';
import { StudentProfile, Skill, CreateProfileInput } from '../types';
import { profiles } from '../data/profiles';

/**
 * Convert simple skill name strings into Skill objects with sensible defaults.
 * The matching engine can enrich these with real levels/evidence later.
 */
const toSkillObjects = (skillNames: string[]): Skill[] =>
  skillNames.map((name) => ({
    name,
    level: 'beginner' as const,
    evidence: '',
    confidence: 0.5,
  }));

export const createProfile = (req: Request, res: Response) => {
  const { name, education, branch, year, skills, interests, projects, experience } = req.body as Partial<CreateProfileInput>;

  // --- Required field validation ---
  const errors: string[] = [];

  if (!name || typeof name !== 'string') {
    errors.push('name is required and must be a string');
  }

  if (!education || typeof education !== 'string') {
    errors.push('education is required and must be a string');
  }

  if (!branch || typeof branch !== 'string') {
    errors.push('branch is required and must be a string');
  }

  if (year === undefined || typeof year !== 'number' || !Number.isInteger(year) || year < 1 || year > 6) {
    errors.push('year is required and must be an integer between 1 and 6');
  }

  if (!Array.isArray(skills) || skills.length === 0) {
    errors.push('skills is required and must be a non-empty array of strings');
  } else if (!skills.every((s) => typeof s === 'string' && s.trim().length > 0)) {
    errors.push('each skill must be a non-empty string');
  }

  if (!Array.isArray(interests) || interests.length === 0) {
    errors.push('interests is required and must be a non-empty array of strings');
  }

  if (!Array.isArray(projects)) {
    errors.push('projects is required and must be an array of strings');
  }

  if (!Array.isArray(experience)) {
    errors.push('experience is required and must be an array of strings');
  }

  if (errors.length > 0) {
    res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors,
    });
    return;
  }

  // --- Build the profile ---
  const newProfile: StudentProfile = {
    id: `stu-${String(profiles.length + 1).padStart(3, '0')}`,
    name: name!,
    education: education!,
    branch: branch!,
    year: year!,
    skills: toSkillObjects(skills!),
    interests: interests!,
    projects: projects!,
    experience: experience!,
  };

  profiles.push(newProfile);

  res.status(201).json({
    status: 'success',
    message: 'Profile created successfully',
    data: newProfile,
  });
};

export const getAllProfiles = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    count: profiles.length,
    data: profiles,
  });
};

export const getProfileById = (req: Request, res: Response) => {
  const { id } = req.params;
  const profile = profiles.find((p) => p.id === id);

  if (!profile) {
    res.status(404).json({
      status: 'error',
      message: `Profile with id '${id}' not found`,
    });
    return;
  }

  res.status(200).json({
    status: 'success',
    data: profile,
  });
};
