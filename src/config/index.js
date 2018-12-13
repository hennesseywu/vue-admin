/**
 * build: 线上使用
 * dev: qa环境
 * sandbox: sandbox环境
 * local: 本地调试
 */


export default {
  href: {
    build: 'https://t1.tiejin.cn',
    dev: 'https://t1-qa.tiejin.cn',
    sandbox: 'https://t1-sandbox.tiejin.cn',
    local: 'http://127.0.0.1:9999'
  },
  file: {
    build: 'https://file.tiejin.cn',
    dev: 'https://file-qa.tiejin.cn',
    sandbox: 'https://file-sandbox.tiejin.cn',
    local: 'https://file-sandbox.tiejin.cn'
  },
  server: {
    build: 'https://api.tiejin.cn/command/',
    dev: 'https://api-sandbox.tiejin.cn/command/',
    sandbox: 'https://api-sandbox.tiejin.cn/command/',
    local: 'https://api-sandbox.tiejin.cn/command/'
  },
  download: {
    build: 'https://download.tiejin.cn/?adid=closer-t1&fs=false&microlink=https%3a%2f%2fa.app.qq.com%2fo%2fsimple.jsp%3fpkgname%3dcom.ums.closer%26ckey%3dCK1409137336588',
    dev: 'https://download-qa.tiejin.cn/?adid=closer-t1&fs=false&microlink=https%3a%2f%2fa.app.qq.com%2fo%2fsimple.jsp%3fpkgname%3dcom.ums.closer%26ckey%3dCK1409137336588',
    sandbox: 'https://download-sandbox.tiejin.cn/?adid=closer-t1&fs=false&microlink=https%3a%2f%2fa.app.qq.com%2fo%2fsimple.jsp%3fpkgname%3dcom.ums.closer%26ckey%3dCK1409137336588',
    local: 'https://download-sandbox.tiejin.cn/?adid=closer-t1&fs=false&microlink=https%3a%2f%2fa.app.qq.com%2fo%2fsimple.jsp%3fpkgname%3dcom.ums.closer%26ckey%3dCK1409137336588'
  },
  wxAuthorization: {
    build: 'https://h5.tiejin.cn/redirect?redirectUrl=',
    dev: 'https://h5-sandbox.tiejin.cn/redirect?redirectUrl=',
    sandbox: 'https://h5-sandbox.tiejin.cn/redirect?redirectUrl=',
    local: 'https://h5-sandbox.tiejin.cn/redirect?redirectUrl='
  }
}