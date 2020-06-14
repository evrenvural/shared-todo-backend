import express from 'express';
import bodyParser from 'body-parser';

import './src/model';
import { connectWithDatabase } from './config';
import routes from './src/route';

const app = express();

connectWithDatabase();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000);
