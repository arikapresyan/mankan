const bluebird = require('bluebird');
const Sequelize = require('sequelize');
const redis = require('redis');
console.log(redis.Multi.prototype);
const {
  POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASS, DATABASE_NAME, REDIS_URL,
} = require('../server/config');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// 'postgres://postgres:post@localhost:5432/postgres';
const models = require('./models');

const logging = process.env.SEQUELIZE_LOG !== 'production' ? (msg) => { console.log(msg); } : false;
// const seq = new Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASS}@${POSTGRES_HOST}:${POSTGRES_PORT}/${DATABASE_NAME}`, {
// const seq = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres', {
const seq = new Sequelize('postgres://postgres:post@localhost:5432/postgres', {

  dialect: 'postgres',
  dialectOptions: {
    useUTC: false,
  },
  timezone: 'Asia/Yerevan',
  pool: {
    max: 20,
    min: 0,
    idle: 20000,
    acquire: 20000,
    evict: 30000,
    handleDisconnects: true,
  },
  // define: {
  //   charset: 'utf8',
  //   collate: 'utf8_general_ci',
  // },
  logging,

});
const redisClient = redis.createClient(REDIS_URL);

if (process.env.NODE_ENV !== 'production') {
  redisClient.config('SET', 'notify-keyspace-events', 'KEAx');
}
redisClient.on('error', (err) => {
  throw err;
});

seq.redis = redisClient;

seq.authenticate()
  .then(() => {
    console.log(`You are connect to database postgres://${POSTGRES_USER}:${POSTGRES_PASS}@${POSTGRES_HOST}:${POSTGRES_PORT}/${DATABASE_NAME}`);
  })
  .catch((err) => {
    throw err;
  });
module.exports = Object.assign(seq, models(seq));
