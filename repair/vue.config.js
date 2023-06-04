const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  parallel:false,
  assetsDir:'static',
  publicPath:'./',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback:{
        fs: false
      }
    },
    externals: {
      './cptable': 'var cptable',
    },
  },
  pluginOptions:{
    electronBuilder:{
      nodeIntegration:true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          outputStyle: 'expanded'
        }
      }
    }
  }
})
