const express = require('express');
const User = require('../models/User');
const logger = require('../utils/logger');
const { hashPassword } = require('../utils/hashing');
const { createToken } = require('../utils/jwt.js');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
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

    res.send({ token });
  } catch (error) {
    logger.error('Post users error ', error);
    res.status(500).end();
  }
});
module.exports = router;
