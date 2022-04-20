/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cronService = require('./server/services/cron');
const { port } = require('./config/config');
// const {
//     user, vocation, brand, productType,
// } = require('./server/routes');
const app = express();
// require('dotenv').config();

app.use(bodyParser.json(
  {
    parameterLimit: 1000000,
    limit: 1024 * 1024 * 1024,
    extended: true,
  },
));
app.use(bodyParser.urlencoded(
  {
    extended: true,
    parameterLimit: 1000000,
    limit: 1024 * 1024 * 1024,
  },
));

app.use(express.static(path.join(__dirname, 'uploads')));
app.set('views', path.join(__dirname, 'uploads'));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
// app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');


process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
})
  .on('uncaughtException', (err) => {
    console.log(err);
    console.error(`Caught exception: \n ${err}`);
  })
  .on('ECONNREFUSED', (err) => {
    console.error('ECONNREFUSED: \n', err);
  })
  .on('ELIFECYCLE', (err) => {
    console.error('ELIFECYCLE: \n', err);
  });


app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    return res.status(err.statusCode || err.status || 500)
      .send({ statusCode: err.statusCode || err.status, message: err.message || {} });
  }
  return next();
});
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  res.send({ message: err.message, status: err.status });
  return next(err);
});


app.listen(3001, () => {
  console.log(`Server listening on port ${3001}`);
});
