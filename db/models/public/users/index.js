const User = require('./User');
const ConfirmCode = require('./ConfirmCode');


/**
 *
 * @param seq
 * @returns {{Company}}
 */
module.exports = (seq) => ({
  User: User(seq),
  ConfirmCode: ConfirmCode(seq),

});
