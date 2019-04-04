const winston = require('winston');

module.exports = (err, req, res, next) => {
  winston.error('Exception chaught in error middleware - ', err);
  res.status(500).send({ msg: 'somthing went wrong' });
};
