const hasClass = require('./hasClass');

/**
 * @desc 为元素移除class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

module.exports = removeClass;
