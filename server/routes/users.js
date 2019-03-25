const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const logger = require('../utils/logger');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    let { name, email, password } = req.body;
    console.log(req.body);

    // simple validation
    if (!name || !email || !password)
      return res.status(400).json({ msg: 'Please enter all fields' });

    // Check for existing user
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    // Create salt & hash
    const salt = await bcrypt.genSalt(10);
    console.log('salt');

    password = await bcrypt.hash(password, salt);

    let newUser = new User({ name, email, password });
    console.log(newUser);

    newUser = await newUser.save();

    // Create token
    const token = jwt.sign(
      { _id: newUser._id, name: newUser.name },
      'myJwtSecretKey',
      { expiresIn: 3600 }
    );

    res.send({ token });
  } catch (error) {
    logger.error('Post users error ', error);
    res.status(500).end();
  }
});
module.exports = router;
