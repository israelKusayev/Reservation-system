const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = express.Router();

router.post('/add', async (req, res) => {
  const rest = new Restaurant({ ...req.body });
  await rest.save();
  res.status(201).send({ msg: 'success' });
});
module.exports = router;
