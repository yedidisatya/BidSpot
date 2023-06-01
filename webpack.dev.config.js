const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const { publicPath } = require('./paths');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: publicPath,
      watch: true
    },
    historyApiFallback: true,
    port: 1847,
    open: true,
    allowedHosts: 'all',
    hot: 'only'
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      failOnError: false,
      lintDirtyModulesOnly: true
    })
  ]
});
