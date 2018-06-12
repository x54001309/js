
/**
 * @desc 获取操作系统类型
 * @return {String}
 */
function getOS() {
  const userAgent = 'navigator' in window &&
    'userAgent' in navigator &&
    navigator.userAgent.toLowerCase() || '';
  const appVersion = 'navigator' in window &&
    'appVersion' in navigator &&
    navigator.appVersion.toLowerCase() || '';

  if (/mac/i.test(appVersion)) return 'MacOS';
  if (/win/i.test(appVersion)) return 'windows';
  if (/linux/i.test(appVersion)) return 'linux';
  if (/iphone/i.test(userAgent) ||
    /ipad/i.test(userAgent) ||
    /ipod/i.test(userAgent)) return 'ios';
  if (/android/i.test(userAgent)) return 'android';
  if (/win/i.test(appVersion) &&
    /phone/i.test(userAgent)) return ('windowsPhone');
}

module.exports = getOS;
