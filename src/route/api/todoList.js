import { Router } from 'express';
import { model } from 'mongoose';

import schemaName from '../../model/util';
import { generateUniqueCode } from '../../helper';

// Initial
const router = Router();
const TodoList = model(schemaName.TODO_LIST);

// Functions
/**
 * POST request to create new todoList
 * @params userId
 * @body title: String
 * @return createdTodoList: TodoList
 */
async function createTodoList(req, res) {
  const { userId } = req.params;
  const { title } = req.body;
  const User = model(schemaName.USER);

  try {
    const user = await User.findById(userId);
    const generatedCode = await generateUniqueCode(TodoList);
    const createdTodoList = new TodoList({
      title: title,
      createdBy: user.name,
      code: generatedCode
    });

    user.todoLists.push(createdTodoList);

    await createdTodoList.save();
    await user.save();

    res.status(201).send(createdTodoList);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Routes
router.post('/:userId/create', createTodoList);

export default router;
