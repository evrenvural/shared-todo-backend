import { Router } from 'express';

import { todo, user, todoList } from './api';

const router = Router();

// Routes
router.use('/user', user);
router.use('/todo', todo);
router.use('/todoList', todoList);

export default router;
