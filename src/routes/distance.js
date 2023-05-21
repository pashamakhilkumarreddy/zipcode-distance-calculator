import { Router } from 'express';
import { getDistance } from '../controllers';

const router = Router();

router.get('/:zipcode1/:zipcode2', getDistance);

export default router;
