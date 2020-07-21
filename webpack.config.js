
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ],
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          { 
            test: /\.png$/, 
            loader: "file-loader" 
          }
        ],
    }
}