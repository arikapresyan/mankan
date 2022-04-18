const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();


const bodyParser = require('body-parser');
const path = require('path');

const http = require('http').Server(app);
const io = require('socket.io')(http);
const { PORT, IP } = require('./server/config/index');


global.io = io;
const {
  user, vocation, product, admin,
} = require('./server/routes');

require('dotenv').config();

app.use(compression());
app.use(cors());
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

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'build'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(`${__dirname}/public`));
app.use('/api/user', user);
app.use('/api/vocation', vocation);
app.use('/api/product', product);
app.use('/api/admin', admin);

// appClient.set('views', path.join(__dirname, 'out'));
// appClient.use(express.static(path.join(__dirname, 'out')));
//
// appAdmin.set('views', path.join(__dirname, 'public'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

// appAdmin.use((req, res, next) => {
//   console.log('in admin');
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });
//
// appClient.use((req, res, next) => {
//   console.log('in admin');
//   res.sendFile(path.resolve(__dirname, 'out', 'index.html'));
// });

// app.use(vhost('yandex.work', appClient));
// app.use(vhost('www.mankan.am', appClient));
// app.use(vhost('admin.mankan.am', appAdmin));
// // app.use(vhost('api.yandex.work', app));
// app.use(vhost('www.admin.mankan.am', appAdmin));
// app.use(vhost('api.mankan.am', appAdmin));
// app
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
// Add headers
// app.use((req, res, next) => {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'https://admin.mankan.am https://mankan.am http://admin.mankan.am http://mankan.am');
//
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);
//
//   // Pass to next layer of middleware
//   next();
// });
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
  return res.status(404).send({ message: err.message, status: err.status });
});

io.on('connection', (socket) => {
  console.log('A user connected');
  // socket.send('Sent a message 4seconds after connection!');
  socket.on('clientEvent', (d) => {
    console.log(d);
    // socket.emit('received_data', { data: 'Barev dzez' });
  });


  socket.on('csv_create_error', (d) => {
    console.log('**************************** csv create  Erorr************************');
    console.log(d);
    // socket.emit('received_data', { data: 'Barev dzez' });
  });
  socket.on('csv_download_error', (d) => {
    console.log('**************************** csv download Erorr************************');
    console.log(d);
    // socket.emit('received_data', { data: 'Barev dzez' });
  });
  socket.on('newEvent', (d) => {
    socket.emit('received_data', { data: 'barevDzez' });
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
http.listen(process.env.PORT || 3000, () => {
  console.error(`Server started on ${IP}:${PORT}`);
});
