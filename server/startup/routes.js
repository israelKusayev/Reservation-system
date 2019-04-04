const express = require('express');
const cors = require('cors');

module.exports = app => {
  // middlewares
  app.use(cors());
  app.use(express.json());

  // routes
  app.use('/api/users', require('../routes/users'));
  app.use('/api/auth', require('../routes/auth'));
  app.use('/api/restaurant', require('../routes/restaurants'));

  // error middlewae
  app.use(require('../middlewares/error'));
};
