const bluebird = require('bluebird');
const Sequelize = require('sequelize');
const redis = require('redis');
const config = require('./config');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


const models = require('./models');

const logging = process.env.SEQUELIZE_LOG !== 'production' ? (msg) => { console.log(msg); } : false;
const seq = new Sequelize(config.POSTGRES, {
  logging,
  pool: {
    max: 20,
    min: 0,
    idle: 20000,
    acquire: 20000,
    evict: 30000,
    handleDisconnects: true,
  },
});
const redisClient = redis.createClient(config.REDIS_URL);

if (process.env.NODE_ENV !== 'production') {
  redisClient.config('SET', 'notify-keyspace-events', 'KEAx');
}
redisClient.on('error', (err) => {
  throw err;
});

seq.redis = redisClient;
seq.sequelize = Sequelize;

// seq.authenticate()
//   .then(() => {
//     console.log('database is connected');
//   })
//   .catch((err) => {
//     throw err;
//   });
module.exports = Object.assign(seq, models(seq));
