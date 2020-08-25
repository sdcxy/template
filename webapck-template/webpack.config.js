
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  entry: './src/main.js', // 入口文件 需要创建src目录并创建main.js文件
  output: { // 配置出口文件，这里需要用到node的path
    filename: 'bundle.js', // 出口文件
    path: path.resolve(__dirname, 'dist')  // 出口文件路径
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },//处理css文件的规则
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.(PNG|JPE?G|GIF|SVG|ICO)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html') // 指定index.html位置
    }),
    new VueLoaderPlugin()
  ]

}