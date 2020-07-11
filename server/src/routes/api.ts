import { Router } from 'express';
import { sessionController } from '@controllers/session';

const error = require('../middleware/error');

const router = Router();

router.use('/session', sessionController);

router.use(error);

export { router as apiController };
