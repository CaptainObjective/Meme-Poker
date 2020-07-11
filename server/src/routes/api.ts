import { Router } from 'express';
import { sessionController } from '@controllers/session';
import { restError } from 'middleware/error';

const router = Router();

router.use('/session', sessionController);

router.use(restError);

export { router as apiController };
