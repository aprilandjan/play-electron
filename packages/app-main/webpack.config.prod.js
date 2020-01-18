/**
 * Webpack config for production electron main process
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer');
const baseConfig = require('../../configs/webpack.config.base');
const CheckNodeEnv = require('../../internals/scripts/CheckNodeEnv');

CheckNodeEnv('production');

module.exports = merge.smart(baseConfig, {
  devtool: 'source-map',

  mode: 'production',

  target: 'electron-main',

  entry: path.join(__dirname, './src/index'),

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './dist/',
    filename: 'main.prod.js'
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        cache: true
      })
    ]
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode:
        process.env.OPEN_ANALYZER === 'true' ? 'server' : 'disabled',
      openAnalyzer: process.env.OPEN_ANALYZER === 'true'
    }),

    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG_PROD: false,
      START_MINIMIZED: false
    })
  ],

  node: {
    __dirname: false,
    __filename: false
  }
});