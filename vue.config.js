module.exports = {
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
