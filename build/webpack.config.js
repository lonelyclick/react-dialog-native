const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    'react-dialog-native': './src/components/Dialog.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist/'),
    publicPath: '/',
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist/'),
    library: 'ReactDialogNative',
    libraryTarget: 'umd'
  },
  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'react',
      'root': 'React'
    },
    'react-dom': {
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'amd': 'react-dom',
      'root': 'ReactDOM'
    },
    'prop-types': {
      'commonjs': 'prop-types',
      'commonjs2': 'prop-types',
      'amd': 'prop-types',
      'root': 'PropTypes',
    },
    'dialog-polyfill': {
      'commonjs': 'dialog-polyfill',
      'commonjs2': 'dialog-polyfill',
      'amd': 'dialog-polyfill',
      'root': 'dialogPolyfill',
    },
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          cache: false,
          fix: false,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      isProd ? {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      } : {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
};

if (isProd) {
  config.plugins.push(new ExtractTextPlugin(`[name].css`));
}

module.exports = config;
