import { Router } from 'express';

import { todo } from './api';

const router = Router();

// Routes
router.use('/todo', todo);

export default router;
