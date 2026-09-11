import { Router } from 'express';
import { createProfile, getAllProfiles, getProfileById } from '../controllers/profileController';

const router = Router();

router.post('/', createProfile);
router.get('/', getAllProfiles);
router.get('/:id', getProfileById);

export default router;
