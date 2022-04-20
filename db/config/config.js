const config = require('./');

/**
 *
 * @type {{development: {url: string}, production: {url: string}}}
 */
module.exports = {
  development: {
    url: config.POSTGRES,
  },
  production: {
    url: config.POSTGRES,
  },

};
