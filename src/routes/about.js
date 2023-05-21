import { Router } from 'express';
import { about } from '../controllers';

const router = Router();

router.get('/about', about);

export default router;
