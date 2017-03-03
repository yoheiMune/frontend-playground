const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    filename: './app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};

// npm install --save react-addons-linked-state-mixin