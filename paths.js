const path = require('path');
const { existsSync } = require('fs');

const buildPath = path.resolve(__dirname, 'build');
const publicPath = path.resolve(__dirname, 'public');
const isLocalDevelopment = process.env.NODE_ENV === 'development';
const webpackPublicPath = isLocalDevelopment ? '/' : './';


// Theme by Market
const defaultTheme = path.resolve(__dirname, 'src/styles/_variables.scss');




module.exports = {
  buildPath,
  publicPath,
  webpackPublicPath,
  defaultTheme
};
