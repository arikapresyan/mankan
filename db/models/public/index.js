const users = require('./users');
const common = require('./common');
/**
 *
 * @param seq
 * @returns {{Company}}
 */
module.exports = (seq) => ({
  users: users(seq),
  common: common(seq),

});
