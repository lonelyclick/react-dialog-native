const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    'app': './src/index.js',
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist/'),
    publicPath: '/',
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
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.svg/,
        loader: 'svg-loader',
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
    new HtmlWebpackPlugin({
      title: 'Meipu Misc',
      template: path.resolve(__dirname, '../index.template.ejs'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: false,
    port: 8888,
    historyApiFallback: true,
    hot: true,
  },
};

module.exports = config;
