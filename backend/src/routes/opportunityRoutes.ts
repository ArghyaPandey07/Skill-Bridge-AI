import { Router } from 'express';
import { getAllOpportunities, getOpportunityById } from '../controllers/opportunityController';

const router = Router();

router.get('/', getAllOpportunities);
router.get('/:id', getOpportunityById);

export default router;
