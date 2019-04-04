const monggose = require('mongoose');
const winston = require('winston');
const dbConfig = require('../config/db.json');

// Connect to MongoDb
module.exports = () => {
  monggose
    .connect(dbConfig.connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => {
      winston.info('MongoDB Connected...');
    })
    .catch(err => winston.error('Failed to connect to MongoDB', err));
};
