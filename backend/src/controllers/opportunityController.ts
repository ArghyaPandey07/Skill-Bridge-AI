import { Request, Response } from 'express';
import { opportunities } from '../data/opportunities';

export const getAllOpportunities = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    count: opportunities.length,
    data: opportunities,
  });
};

export const getOpportunityById = (req: Request, res: Response) => {
  const { id } = req.params;
  const opportunity = opportunities.find((opp) => opp.id === id);

  if (!opportunity) {
    res.status(404).json({
      status: 'error',
      message: `Opportunity with id '${id}' not found`,
    });
    return;
  }

  res.status(200).json({
    status: 'success',
    data: opportunity,
  });
};
