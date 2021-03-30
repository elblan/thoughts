module.exports = {
  pwa: {
    name: 'Thoughts',
    themeColor: '#e4fce1',
    msTileColor: '#5f78eb',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent'
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/thoughts/' : '/'
}
