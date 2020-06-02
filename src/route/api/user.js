import { Router } from 'express';
import { model } from 'mongoose';

import schemaName from '../../model/util';

// Initial
const router = Router();
const User = model(schemaName.USER);

// Functions
/**
 * POST request to create new user
 *
 * @body name: String
 * @return createdUser: User
 */
function createUser(req, res) {
  const { name } = req.body;

  User.create({ name })
    .then(createdUser => res.status(201).send(createdUser))
    .catch(err => res.status(400).send(err));
}

// Routes
router.post('/create', createUser);

export default router;
