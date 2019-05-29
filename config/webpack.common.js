const path = require('path')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry:  ['babel-polyfill', './src/index.jsx'],
  module: {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        include: path.resolve(process.cwd(), 'src'),
        exclude: /node_modules/,
        loader:  'babel-loader'
      },
      {
        test: /\.css$/,
        use:  ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '^runtime.*js$',
      template:     'src/index.html'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename:   '[name].js',
    path:       path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  }
}
