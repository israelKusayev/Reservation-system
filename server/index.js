const express = require('express');
const monggose = require('mongoose');
const cors = require('cors');
const logger = require('./utils/logger');
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', require('./routes/users'));

monggose
  .connect(
    // 'mongodb+srv://israel:israel1243@cluster0-ig561.mongodb.net/test?retryWrites=true',
    'mongodb+srv://israel:israel1243@reservation-system-ntoih.gcp.mongodb.net/ReservationDB?retryWrites=true',
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch(err => console.log('ERROR', err));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('listening on http://localhost:' + port));
