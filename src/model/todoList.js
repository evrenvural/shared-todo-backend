import mongoose, { Schema } from 'mongoose';
import schemaName from './util';

const todoList = Schema({
  userId: { type: Schema.Types.ObjectId, ref: schemaName.USER, required: true },
  title: { type: String, required: true },
  createdBy: { type: String, required: true },
  code: { type: String, trim: true, required: true },
  completePercent: { type: Number, min: 0, max: 100, default: 0 },
  todo: [{ type: Schema.Types.ObjectId, ref: schemaName.TODO }]
});

mongoose.model(schemaName.TODO_LIST, todoList);
