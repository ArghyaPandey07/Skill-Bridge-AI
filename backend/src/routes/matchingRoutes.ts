import { Router } from 'express';
import { matchStudentOpportunity } from '../controllers/matchingController';

const router = Router();

router.post('/', matchStudentOpportunity);

export default router;
