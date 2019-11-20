const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Successfully connected',
  });
});

module.exports = app;
