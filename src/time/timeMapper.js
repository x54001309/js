/**
 * 时间映射工具
 */
const timeMapper = {

  /**
   * @desc 将yyyyMMddHHmmss格式转化为yyyy-MM-dd HH:mm:ss
   * @param {String} serverTime
   * @return {String}
   */
  serverToFull: function(serverTime) {
    return `${serverTime.substring(0, 4)}-${serverTime.substring(4, 6)}-${serverTime.substring(6, 8)} ${serverTime.substring(8, 10)}:${serverTime.substring(10, 12)}:${serverTime.substring(12, 14)}`;
  },
  /**
   * @desc 将yyyyMMddHHmmss格式转化为yyyy年MM月dd日HH时mm分ss秒
   * @param {String} serverTime
   * @return {String}
   */
  serverToFullCN: function(serverTime) {
    return `${serverTime.substring(0, 4)}年${serverTime.substring(4, 6)}月${serverTime.substring(6, 8)}日${serverTime.substring(8, 10)}时${serverTime.substring(10, 12)}分${serverTime.substring(12, 14)}秒`;
  },
  /**
   * @desc 将yyyyMMddHHmmss格式转化为yyyy/MM/ddTHH:mm:ss
   * @param {String} serverTime
   * @return {String}
   */
  serverToFullUTC: function(serverTime) {
    return `${serverTime.substring(0, 4)}-${serverTime.substring(4, 6)}-${serverTime.substring(6, 8)}T${serverTime.substring(8, 10)}:${serverTime.substring(10, 12)}:${serverTime.substring(12, 14)}`;
  },
  /**
   * @desc 将yyyyMMddHHmmss格式转化为mm:ss
   * @param {String} serverTime
   * @return {String}
   */
  serverToTimeShort(serverTime) {
    return `${serverTime.substring(10, 12)}:${serverTime.substring(12, 14)}`;
  },
};

module.exports = timeMapper;
