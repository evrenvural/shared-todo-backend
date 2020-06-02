import mongoose, { Schema } from 'mongoose';
import schemaName from './util';

const user = Schema({
  name: { type: String, required: true },
  todoList: [{ type: Schema.Types.ObjectId, ref: schemaName.TODO_LIST }]
});

mongoose.model(schemaName.USER, user);
