const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/grafphics.html', // Исходный HTML-файл
      filename: 'index.html', // Куда сохранить в dist
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname), 
    hot: true, 
    liveReload: true,
    port: 3000, 
    open: true, 
  },
};