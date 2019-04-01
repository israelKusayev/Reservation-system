const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { createToken } = require('../utils/jwt.js');

const router = express.Router();

// login
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password)
    return res.status(400).json({ msg: 'Please enter all fields' });

  // Check for existing user
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ msg: 'User does not exists' });

  // Validate password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).send({ msg: 'Invalid password' });

  // Create token
  const token = createToken(user);

  return res.status(200).send({ token, user });
});
module.exports = router;
