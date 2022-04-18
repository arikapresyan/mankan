const jwt = require('jsonwebtoken');
const db = require('../../db');
const config = require('../config');


const { redis } = db;
module.exports = {
  authAdmin: async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer')) {
        const err = new Error('Access denied');
        err.status = 401;
        throw err;
      }

      const token = authHeader.slice(7);
      let exists = await redis.existsAsync(`tokens:${token}`);
      if (!exists) {
        exists = await redis.existsAsync(`permanentToken:${token}`);
      }
      if (!exists) {
        const err = new Error('Invalid Access token');
        err.status = 401;
        throw err;
      }
      const decoded = await jwt.verify(
        token,

        config.AUTHORIZATION_TOKEN_SECRET,
      );
      if (!decoded) {
        const err = new Error('Invalid Access token');
        err.status = 401;
        throw err;
      }

      redis.set(`tokens:${token}`, JSON.stringify(decoded), 'EX', 3600);
      let data;
      if (decoded.userId) {
        data = await db.public.users.User.findOne({
          where: {
            id: decoded.userId,
          },
          attributes: {
            exclude: ['password'],
          },
          raw: true,

        });
      }
      if (!data) {
        const err = new Error('Invalid Access token');
        err.status = 401;
        throw err;
      }
      if (data.role !== 0) {
        const err = new Error('Access denied');
        err.status = 401;
        throw err;
      }
      req.user = data;
      return next();
    } catch (err) {
      return next(err);
    }
  },
  authUser: async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer')) {
        const err = new Error('Access denied');
        err.status = 401;
        throw err;
      }


      const token = authHeader.slice(7);
      let exists = await redis.existsAsync(`tokens:${token}`);
      if (!exists) {
        exists = await redis.existsAsync(`permanentToken:${token}`);
      }
      if (!exists) {
        const err = new Error('Invalid Access token');
        err.status = 401;
        throw err;
      }
      const decoded = await jwt.verify(
        token,
        config.AUTHORIZATION_TOKEN_SECRET,
      );
      if (!decoded) {
        const err = new Error('Invalid Access token');
        err.status = 401;
        throw err;
      }


      let data;
      if (decoded.userId) {
        data = await db.public.users.User.findOne({
          where: { id: decoded.userId },
          attributes: {
            exclude: ['password'],
            raw: true,
          },

        });
      }
      if (!data || !data.isEmailConfirmed) {
        const err = new Error('Invalid Access token');
        err.status = 401;
        throw err;
      }

      redis.set(`tokens:${token}`, JSON.stringify(decoded), 'EX', 3600);
      req.user = data;
      return next();
    } catch (err) {
      return next(err);
    }
  },

  checkCode: async (req, res, next) => {
    try {
      const { token } = req.params;
      if (!token) {
        const err = new Error('Page Not Found');
        err.status = 404;
        throw err;
      }

      const decoded = await jwt.verify(
        token,
        config.AUTHORIZATION_TOKEN_SECRET,
      );

      if (decoded.type !== 'password' && decoded.type !== 'email' && decoded.type !== 'changeEmail') {
        const err = new Error('invalid token');
        err.status = 401;
        throw err;
      }

      return next();
    } catch (err) {
      return next(err);
    }
  },

};
