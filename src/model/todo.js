import mongoose, { Schema } from 'mongoose';

import schemaName from './util';

const Todo = Schema({
  isChecked: { type: Boolean, default: false },
  text: { type: String, required: true }
});

mongoose.model(schemaName.TODO, Todo);

export default Todo;
