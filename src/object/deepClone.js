
/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 * @return {Any}
 */
function deepClone(values) {
  let copy;

  if (null === value || 'object' !== typeof values) return values;

  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }

  if (values instanceof Array) {
    copy = [];
    for (let i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }

  if (values instanceof Object) {
    copy = {};
    for (let attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }
    return copy;
  }

  throw new Error('Unable to copy values! Its type isn\'t supported.');
}

module.exports = deepClone;
