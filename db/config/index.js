module.exports = {
 // POSTGRES: 'postgres://postgres:post@134.0.119.110:5432/postgres',
   POSTGRES: 'postgres://postgres:post@localhost:5432/postgres',
  REDIS_URL: process.env.REDIS_URL || 'redis://host.docker.internal:6379',
};
