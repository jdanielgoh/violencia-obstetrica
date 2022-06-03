const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  productionSourceMap: true,
  outputDir: 'dist',
  publicPath: '/',
  filenameHashing: true,
  
  configureWebpack: {
    plugins: [
      new CopyPlugin([
          { from: "src/assets/data/", to: "data/" }
      ]),
    ],
  },
};
