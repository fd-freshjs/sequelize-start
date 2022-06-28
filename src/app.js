const express = require('express');
const router = require('./routes');
const { handleErrorMW } = require('./middlewares/error-handler');


// запуск указанных миграций
const { migrate } = require('./migrations');
const db = require('./models');
migrate(db.sequelize);

const app = express();

app.use(express.json());

// app.use('/public', express.static('/public'));

// path /
app.use('/api', router);

app.use(handleErrorMW);

module.exports = app;