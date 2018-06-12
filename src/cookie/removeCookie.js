const setCookie = require('./setCookie');

/**
 * @desc 根据name删除cookie
 * @param {String} name
 */
function removeCookie(name) {
  setCookie(name, '1', -1);
}

module.exports = removeCookie;
