const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  mode: 'development',
  
  entry: './js/main.mjs',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new MinifyPlugin({})
  ]
};