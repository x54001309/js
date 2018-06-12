/**
 * 将{String}转换为{Date}
 */
const timeParser = {

  /**
   * @desc 将yyyyMMddHHmmss转为Date对象
   * @param {String} timeStr
   * @return {Date}
   */
  full: function(timeStr) {
    return new Date(parseInt(timeStr.substring(0, 4), 10),
      parseInt(timeStr.substring(4, 6), 10) - 1,
      parseInt(timeStr.substring(6, 8), 10),
      parseInt(timeStr.substring(8, 10), 10),
      parseInt(timeStr.substring(10, 12), 10),
      parseInt(timeStr.substring(12, 14), 10));
  },

};

module.exports = timeParser;
