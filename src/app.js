const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

// app.use('/public', express.static('/public'));

// path /
app.use('/api', router);

module.exports = app;