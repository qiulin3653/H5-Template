//具体配置：https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
  publicPath: '/finance',
  productionSourceMap: false,

  css: {
    extract: false
  },

  devServer: {
    host: '0.0.0.0',
    port: 8050,
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
