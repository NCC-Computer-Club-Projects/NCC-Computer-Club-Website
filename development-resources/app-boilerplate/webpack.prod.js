const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // minimize css for production builds

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // extract source maps and include in final bundle
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  },
});