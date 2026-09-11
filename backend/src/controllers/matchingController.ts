import { Request, Response } from 'express';
import { MatchRequest } from '../types';
import { profiles } from '../data/profiles';
import { opportunities } from '../data/opportunities';
import { matchStudentToOpportunity } from '../services/matchingService';

export const matchStudentOpportunity = (req: Request, res: Response) => {
  const { studentId, opportunityId } = req.body as Partial<MatchRequest>;

  // --- Validate request ---
  const errors: string[] = [];

  if (!studentId || typeof studentId !== 'string') {
    errors.push('studentId is required and must be a string');
  }

  if (!opportunityId || typeof opportunityId !== 'string') {
    errors.push('opportunityId is required and must be a string');
  }

  if (errors.length > 0) {
    res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors,
    });
    return;
  }

  // --- Look up student ---
  const student = profiles.find((p) => p.id === studentId);
  if (!student) {
    res.status(404).json({
      status: 'error',
      message: `Student with id '${studentId}' not found`,
    });
    return;
  }

  // --- Look up opportunity ---
  const opportunity = opportunities.find((o) => o.id === opportunityId);
  if (!opportunity) {
    res.status(404).json({
      status: 'error',
      message: `Opportunity with id '${opportunityId}' not found`,
    });
    return;
  }

  // --- Run the matching engine ---
  const result = matchStudentToOpportunity(student, opportunity);

  res.status(200).json({
    status: 'success',
    data: result,
  });
};
