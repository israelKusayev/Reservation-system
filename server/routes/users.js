const express = require('express');
const User = require('../models/User');
const winston = require('winston');
const auth = require('../middlewares/auth');
const { hashPassword } = require('../utils/hashing');
const { createToken } = require('../utils/jwt.js');

const router = express.Router();

// Get user data
router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

// Register new user
router.post('/', async (req, res) => {
  let { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password)
    return res.status(400).send({ msg: 'Please enter all fields' });

  // Check for existing user
  const user = await User.findOne({ email });
  if (user) return res.status(400).send({ msg: 'User already exists' });

  // Create salt & hash
  password = await hashPassword(password);

  let newUser = new User({ name, email, password });
  newUser = await newUser.save();

  // Create token
  const token = createToken(newUser);

  res.send({ token, user: newUser });

  // logger.error('Post users error ', error);
});
module.exports = router;
