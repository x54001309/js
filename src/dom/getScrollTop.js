
/**
 * @desc 获取滚到条距顶部的距离
 * @return {Number}
 */
function getScrollTop() {
  return (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;
}

module.exports = getScrollTop;
