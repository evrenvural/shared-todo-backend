import { Router } from 'express';
import { model } from 'mongoose';

import schemaName from '../../model/util';

// Initial
const router = Router();
const Todo = model(schemaName.TODO);
const TodoList = model(schemaName.TODO_LIST);

// Functions

/**
 * POST request to add todo to todoList
 * @params todoListId
 * @body text: String
 * @return addedTodo: Todo
 */
async function createTodo(req, res) {
  const { todoListId } = req.params;
  const { text } = req.body;

  try {
    const todoList = await TodoList.findById(todoListId);
    const todo = new Todo({ text });

    todoList.todos.push(todo);
    await todoList.save();

    res.status(200).send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
}

router.post('/:todoListId', createTodo);

export default router;
