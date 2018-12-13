import config from './index';

let UA = navigator.userAgent.toLowerCase() || navigator.userAgent.toLowerCase(),
  HREF = location.href,
  ENV = {},
  href = config.href;

function initENV() {
  // 根据href值设置当前开发环境（build,dev,local）
  for (let key in href) {
    let origin = new(URL || webkitURL)(href[key]).origin;
    let index = HREF.indexOf(origin);
    index == 0 && (ENV.env = key)
  }
  if (!ENV.env) {
    console.error('ENV.env不可为空，请确保当前测试页面的location.origin是~/src/config/index.js配置的href值之一!');
  }
  // ENV.ua = UA;
  // ENV.app = /closer-(android|ios)/.test(UA); // 贴近客户端
  // ENV.wx = /micromessenger/.test(UA); // 微信客户端
  // ENV.ios = /((iphone\sos)\s([\d_]+))|(-ios)/.test(UA); // ios
  // ENV.android = /((android);?[\s\/]+([\d.]+)?)|(-android)/.test(UA); // 安卓
  // ENV.version = UA.match(/closerapp\/version\/([0-9.]+)/) || '0';
  // ENV.weibo = /weibo/.test(UA); // 新浪微博
  // ENV.qq = /qq/.test(UA); // qq浏览器
  // ENV.safari = /version\/([\d.]+)([^S](safari)|[^M]*(mobile)[^S]*(safari))/.test(UA); // safari浏览器
  // ENV.chrome = /chrome\/([\d.]+)/.test(UA) || /crios\/([\d.]+)/.test(UA); // chrome浏览器
  // ENV.firefox = /firefox\/([\d.]+)/.test(UA); // firefox浏览器
  // ENV.ie = /msie\s([\d.]+)/.test(UA) || /trident\/[\d](?=[^\?]+).*rv:([0-9.].)/.test(UA); // ie浏览器

  // 是否dev环境，非线上环境时均设置dev=true
  ENV.dev = ENV.env != 'build';
  // 记录版本
  let version = UA.match(/closerapp\/version\/([0-9.]+)/);
  ENV.version = version ? version[1] : '';
  // 是否大于1.2版本
  ENV.v120 = checkVersion('1.2.0');

  console.log('当前环境变量window.ENV:', ENV);
  defineUrl();
  return ENV;
}
// 重定义url的getter
function defineUrl() {
  for (let key in config) {
    let val = config[key];
    Object.defineProperty(config, key, {
      get() {
        return val[ENV.env] || ''
      }
    })
  }
}
// 版本号比较，当ver2有值时，ver1代表Android的版本，ver2为ios版本
function checkVersion(ver1, ver2) {
  let version = ENV.version
  let ver = (!ver2 || ENV.android) ? ver1 : ver2;
  if (version && ver) {
    version = version.split('.');
    ver = ver.split('.');
    let len = Math.max(version.length, ver.length);
    for (let i = 0; i < len; i++) {
      let ver1 = parseInt(version[i] || 0),
        ver2 = parseInt(ver[i] || 0);
      if (ver1 >= ver2) {
        return true;
      }
    }
  }
  return false
}
export default initENV();