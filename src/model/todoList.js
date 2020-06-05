import mongoose, { Schema } from 'mongoose';

import schemaName from './util';
import Todo from './todo';

const todoList = Schema({
  title: { type: String, required: true },
  createdBy: { type: String, required: true },
  code: { type: String, trim: true, required: true, unique: true },
  completePercent: { type: Number, min: 0, max: 100, default: 0 },
  todos: [Todo]
});

mongoose.model(schemaName.TODO_LIST, todoList);
