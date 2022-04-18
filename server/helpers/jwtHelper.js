// just a comment for learning git
// one more comment
// another comment

const jwt = require('jsonwebtoken');
const db = require('../../db');
const config = require('../config');

async function jwtHelper(auth, rememberMe) {
  try {
    let permanentToken;
    const token = await jwt.sign(auth, config.AUTHORIZATION_TOKEN_SECRET);
    db.redis.set(`tokens:${token}`, JSON.stringify(auth), 'EX', 3600);
    if (rememberMe) {
      permanentToken = token;
      db.redis.set(`permanentToken:${permanentToken}`, JSON.stringify(auth), 'EX', 3600000);
    }
    return token;
  } catch (err) {
    return err;
  }
}

module.exports = { jwtHelper };
