module.exports = {
  POSTGRES: process.env.POSTGRES || 'postgres://postgres:post@localhost:5432/postgres',
  // POSTGRES: process.env.POSTGRES || 'postgres://postgres:postgres@localhost:5432/postgres',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
};
