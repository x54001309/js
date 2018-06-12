

/**
 * 将{Date}转换为{String}
 */
const timeFormatter = {

  /**
   * @desc 将Date对象转换成yyyyMMddHHmmss格式字符串
   * @param {Date} src
   * @return {String}
   */
  full: function(src) {
    const date = src || new Date();
    let dist = String(date.getFullYear());
    let monthNum = date.getMonth() + 1;
    dist = dist + (monthNum < 10 ? '0' + monthNum : String(monthNum));
    let dayNum = date.getDate();
    dist = dist + (dayNum < 10 ? '0' + dayNum : String(dayNum));
    let hourNum = date.getHours();
    dist = dist + (hourNum < 10 ? '0' + hourNum : String(hourNum));
    let minuteNum = date.getMinutes();
    dist = dist + (minuteNum < 10 ? '0' + minuteNum : String(minuteNum));
    let secondNum = date.getSeconds();
    dist = dist + (secondNum < 10 ? '0' + secondNum : String(secondNum));
    return dist;
  },
};

module.exports = timeFormatter;
