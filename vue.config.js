module.exports = {
  lintOnSave: true,
  outputDir:'dist',
  assetsDir:'assets',
  productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  configureWebpack: {
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  },
  // chainWebpack: config => {
  //   // A, remove the plugin
  //   config.plugins.delete('prefetch');
  //   config.plugins.delete('preload');
  // },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  pluginOptions: { // 第三方插件配置
  },
  devServer: {
    host: "127.0.0.1",
    port: "8888"
  }

}

