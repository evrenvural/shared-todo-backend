import { Router } from 'express';
import { model } from 'mongoose';

import schemaName from '../../model/util';

// Initial
const router = Router();
const Todo = model(schemaName.TODO);

// Functions
function getAllTodos(req, res, next) {
  // Callback
  Todo.find((error, todos) => {
    if (error) return next(error);

    res.status(200).send(todos);
  });
}

function getTodoByTodoId(req, res, next) {
  const { todoId } = req.params;

  Todo.findById(todoId, (error, todo) => {
    if (error) return next(error);

    res.status(200).send(todo);
  });
}

function createTodo(req, res) {
  const todo = new Todo(req.body);

  todo.save();

  res.status(201).send(todo);
}

// Routes
router.get('/getAll', getAllTodos);
router.get('/:todoId', getTodoByTodoId);
router.post('/create', createTodo);

export default router;
