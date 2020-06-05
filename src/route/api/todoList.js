import { Router } from 'express';
import { model } from 'mongoose';

import schemaName from '../../model/util';
import { generateUniqueCode } from '../../helper';

// Initial
const router = Router();
const User = model(schemaName.USER);
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

/**
 * PUT request to add todoList
 * @params userId
 * @body code: String
 * @return addTodoList: TodoList
 */
async function addTodoList(req, res) {
  const { userId } = req.params;
  const { code } = req.body;

  try {
    const user = await User.findById(userId);
    const { id } = await TodoList.findOne({ code });

    if (user.todoLists.includes(id)) {
      res.status(403).send({ error: 'This todo list has already been added.' });
      return;
    }

    user.todoLists.push(id);

    await user.save();

    res.status(200).send(id);
  } catch (err) {
    res.status(400).send(err);
  }
}

// Routes
router.post('/:userId/create', createTodoList);
router.put('/:userId/addTodoList', addTodoList);

export default router;
