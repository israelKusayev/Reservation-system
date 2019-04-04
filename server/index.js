const express = require('express');
const winston = require('winston');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db.js')();

const port = process.env.PORT || 4000;
app.listen(port, () => winston.info('listening on http://localhost:' + port));
