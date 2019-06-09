'use strict';

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.disable('x-powered-by');
app.disable('etag');

app.use(bodyParser.json());
app.use(cors());

app.use('/cep', require('./routes'));

// Start do Servidor
app.listen(process.env.HTTP_PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.info(`Ready! (${process.env.NODE_ENV || 3000})`);
});
