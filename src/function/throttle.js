
/**
 * @desc 函数节流
 * 适用于限制'resize'和'scroll'等函数的调用频率
 *
 * @param {Number} delay 0或者更大的毫秒数。对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
 * @param {Boolean} noTrailing 可选，默认为false。
 *                             如果noTrailing为true，当节流函数被调用，
 *                             每过'delay'毫秒'callback'也将执行一次。
 *                             如果noTrailing为false或者未传入，'callback'将在最后一次调用节流函数
 *                             后在执行一次。（延迟`delay`毫秒之后，节流函数没有被调用，内部计数器会复位)
 * @param {Function} callback 延迟毫秒后执行的函数。'this'上下文和所有参数都是按原样传递的，
 *                            执行去节流功能时，调用'callback'。
 * @param {Boolean} debounceMode 如果'debounceMode'为true,'clear'在'delay'ms后执行。
 *                         如果'debounceMode'为false,'callback'在'delay'ms之后执行。
 * @return {Function} 新的节流函数
 */
function throttle(delay, noTrailing, callback, debounceMode) {
  let timeoutID;
  let lastExec = 0;

  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }

  /**
   *
   */
  function wrapper() {
    const self = this;
    let elapsed = Number(new Date()) - lastExec;
    const args = arguments;

    /**
     * @desc Execute 'callback' and update the 'lastExec' timestamp.
     */
    function exec() {
      lastExec = Number(new Date());
      callback.apply(self, args);
    }

    /**
     * @desc If 'debounceMode' is true (at begin) this is used to clear the flag
     * to allow future 'callback'.
     */
    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      exec();
    }

    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    if (debounceMode === undefined && elapsed > delay) {
      exec();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  return wrapper;
};

module.exports = throttle;
