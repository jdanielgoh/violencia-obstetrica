const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  productionSourceMap: true,
  outputDir: 'dist',
  publicPath: process.env.VUE_APP_BASE_ROUTE || '/',
  filenameHashing: process.env.VUE_APP_HASH || false,

  configureWebpack: {
    plugins: [
      new CopyPlugin([
          { from: "src/assets/data/", to: "data/" }
      ]),
    ],
  },
};
