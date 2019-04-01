const jwt = require('jsonwebtoken');
const config = require('../config/default.json');

/**
 *
 * @param {{_id:string, name:string}} user
 */
const createToken = user => {
  return jwt.sign({ _id: user._id, name: user.name }, config.secretKey, {
    expiresIn: 3600
  });
};

module.exports = { createToken };
