const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  parallel:false,
  assetsDir:'static',
  publicPath:'./',
  transpileDependencies: true,
  configureWebpack: {
    resolve: { fallback: { fs: false } }
  },
  pluginOptions:{
    electronBuilder:{
      nodeIntegration:true
    }
  }
})
