import mongoose, { Schema } from 'mongoose';
import schemaName from './util';

const todo = Schema({
  text: { type: String }
});

mongoose.model(schemaName.TODO, todo);
