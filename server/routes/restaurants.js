const express = require('express');
const { Restaurant, validateRestaurant } = require('../models/Restaurant');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/add', auth, async (req, res) => {
  // validation
  const { error } = validateRestaurant(req.body);
  if (error) return res.status(400).send({ msg: error.details[0].message });

  // create restaurant and save
  const rest = new Restaurant({ ...req.body, creator: req.user._id });
  await rest.save();
  res.status(201).send({ msg: 'success' });
});

module.exports = router;
