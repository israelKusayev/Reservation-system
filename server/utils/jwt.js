const jwt = require('jsonwebtoken');

const secretKey = 'myJwtSecretKey';

/**
 *
 * @param {{_id:string, name:string}} user
 */
const createToken = user => {
  return jwt.sign({ _id: user._id, name: user.name }, secretKey, {
    expiresIn: 3600
  });
};

module.exports = { createToken };
