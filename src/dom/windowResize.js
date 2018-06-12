
/**
 * @desc H5软键盘缩回、弹起回调，当软件盘弹起会改变当前window.innerHeight,监听这个值变化
 * @param {Function} downCb 当软件盘弹起后，缩回的回调
 * @param {Function} upCb 当软件盘弹起的回调
 */
function windowResize(downCb, upCb) {
  const clientHeight = window.innerHeight;
  downCb = typeof downCb === 'function' ? downCb : function() { };
  upCb = typeof upCb === 'function' ? upCb : function() { };
  window.addEventListener('resize', () => {
    const height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  });
}

module.exports = windowResize;
