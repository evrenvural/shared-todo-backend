import { Router } from 'express';
import { model } from 'mongoose';

import schemaName from '../../model/util';

// Initial
const router = Router();
const User = model(schemaName.USER);

// Functions

/**
 * GET request to get user
 *
 * @params userId: String
 * @return user: User
 */
function getUser(req, res) {
  const { userId } = req.params;

  User.findById(userId)
    .populate('todoLists')
    .then(user => {
      res.status(200).send(user);
    })
    .catch(err => res.status(400).send(err));
}

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
router.get('/:userId/get', getUser);
router.post('/create', createUser);

export default router;
