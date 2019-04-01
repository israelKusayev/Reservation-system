const express = require('express');
const monggose = require('mongoose');
const cors = require('cors');
const logger = require('./utils/logger');
const dbConfig = require('./config/db.json');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Use Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Connect to Mongo
monggose
  .connect(dbConfig.connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch(err => logger.error('Failed to connect to MongoDB', err));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('listening on http://localhost:' + port));
