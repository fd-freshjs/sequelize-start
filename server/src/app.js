const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { handleErrorMW } = require('./middlewares/error-handler');

// запуск указанных миграций
const { migrate } = require('./db/migrations');
const db = require('./db/models');
migrate(db.sequelize);

const app = express();

app.use(express.json());

app.use(cors());

// app.use('/public', express.static('/public'));

// path /
app.use('/api', router);

app.use(handleErrorMW);

module.exports = app;