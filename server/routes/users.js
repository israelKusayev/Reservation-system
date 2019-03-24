const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    throw new Error();
    let { name, email, password } = req.body;

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

    const token = jwt.sign(
      { _id: newUser._id, name: newUser.name },
      'myJwtSecretKey',
      { expiresIn: 3600 }
    );

    res.send({ token });
  } catch (error) {
    winston.error('fdsfddf', error);
    // winston.err('error', 'some error', () => console.log('error ....'));
    // console.log(error);
  }
});
module.exports = router;
