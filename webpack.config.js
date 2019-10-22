const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico',
  filename: 'index.html'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          path.resolve(__dirname, './src/redux'),
          path.resolve(__dirname, './src/registerServiceWorker.js')
        ],
        use: ['eslint-loader']
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2eot|ttf|pdf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2eot|ttf|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};
