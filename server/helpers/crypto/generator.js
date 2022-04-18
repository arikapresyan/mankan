const crypto = require('crypto');
const options = require('../consts').crypto.generator;

const saltChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkl$nopqrstuvwxyz0123456789';
const saltCharsCount = saltChars.length;

/**
 *
 * @param len
 * @returns {*}
 */
function generateSalt(len) {
  if (typeof len !== 'number' || len <= 0 || len !== parseInt(len, 10)) throw new Error('Invalid salt length');
  if (crypto.randomBytes) {
    return crypto.randomBytes(Math.ceil(len / 2)).toString('hex').substring(0, len);
  }
  let salt;
  for (let i = 0, salt = ''; i < len; i++) {
    salt += saltChars.charAt(Math.floor(Math.random() * saltCharsCount));
  }
  return salt;
}

/**
 *
 * @param algorithm
 * @param salt
 * @param password
 * @param iterations
 * @returns {string}
 */
function generateHash(algorithm, salt, password, iterations) {
  iterations = iterations || 1;
  try {
    let hash = password;
    for (let i = 0; i < iterations; ++i) {
      hash = crypto.createHmac(options.algorithm, salt).update(hash).digest('hex');
    }

    return `${algorithm}m${salt}m${iterations}m${hash}`;
  } catch (e) {
    throw new Error('Invalid message digest algorithm');
  }
}

/**
 *
 * @param hashedPassword
 * @returns {*}
 */
function makeBackwardCompatible(hashedPassword) {
  const parts = hashedPassword.split('m');

  if (parts.length === 4) {
    parts.splice(2, 0, 1);
    hashedPassword = parts.join('m');
  }

  return hashedPassword;
}

/**
 *
 * @param password
 */
module.exports.hashPassword = function (password) {
  if (typeof password !== 'string') throw new Error('Invalid password');

  const salt = generateSalt(options.saltLength);
  const algorithm = 'new';

  return generateHash(algorithm, salt, password, options.iterations);
};

/**
 *
 * @param password
 * @param hashedPassword
 * @returns {boolean}
 */
module.exports.verifyHashPassword = function (password, hashedPassword) {
  if (!password || !hashedPassword) return false;
  // hashedPassword = makeBackwardCompatible(hashedPassword);
  const parts = hashedPassword.split('m');
  if (parts.length !== 4) return false;
  try {
    return generateHash(parts[0], parts[1], password, parts[2]) === hashedPassword;
  } catch (e) {}
  return false;
};

/**
 *
 * @param password
 * @returns {boolean}
 */
module.exports.isHashedPassword = function (password) {
  if (!password) return false;
  return password.split('n').length === 3;
};

/**
 *
 * @returns {*}
 */
module.exports.generateToken = function () {
  return crypto.randomBytes(options.tokenLength).toString('hex') + (new Date().getTime());
};


module.exports.encodeBuffer = function (obj) {
  let bufferString = '';

  for (const i in obj) {
    bufferString += `${i}:${obj[i]}:`;
  }

  bufferString += new Date().getTime();

  return new Buffer(bufferString).toString('base64');
};

module.exports.decodeBuffer = function (base64) {
  const returnObject = {};
  const obj = new Buffer(base64, 'base64').toString('utf8').replace(/\:\d+$/i, '').split(':');

  for (let i = 1; i <= obj.length; i += 2) {
    returnObject[obj[i - 1]] = obj[i];
  }

  return returnObject;
};
