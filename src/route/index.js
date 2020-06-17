import { Router } from 'express';

import { todo, user, todoList } from './api';

const router = Router();

// Routes
router.use('/users', user);
router.use('/todos', todo);
router.use('/todo-lists', todoList);

export default router;
