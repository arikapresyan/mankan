const ip = require('ip');
require('dotenv').config();

const config = {
  PORT: process.env.PORT || 3000,
  IP: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'localhost' : ip.address(), // 'localhost',
  AUTHORIZATION_TOKEN_SECRET: process.env.AUTHORIZATION_TOKEN_SECRET || 'LOCAL_SECRET_KEY',
  NODE_ENV: process.env.NODE_ENV || 'production',
  DATABASE_NAME: process.env.DATABASE_NAME || 'postgres',
  POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
  POSTGRES_PASS: process.env.POSTGRES_PASS || 'post',
  POSTGRES_HOST: !process.env.POSTGRES_HOST || process.env.NODE_ENV === 'development' ? 'localhost' : ip.address(),
  POSTGRES_PORT: process.env.PORT || 5432,
  // POSTGRES_URL: process.env.POSTGRES || 'postgres://postgres:post@host.docker.internal:5432/postgres',
  REDIS_URL: process.env.REDIS_URL || 'redis://host.docker.internal:6379',
};


module.exports = config;
