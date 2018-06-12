
/**
 * @desc 格式化现在距${endTime}的剩余时间
 * @param {Date} endTime
 * @return {String}
 */
function formatRemainTime(endTime) {
  const startDate = new Date();
  const endDate = new Date(endTime);
  const t = endDate.getTime() - startDate.getTime();
  let d = h = m = s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 60 / 60 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return d + '天' + h + '小时' + m + '分钟' + s + '秒';
}

module.exports = formatRemainTime;
