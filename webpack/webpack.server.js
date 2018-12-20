/* webpack.server.js */
const path = require('path')
const projectRoot = path.resolve(__dirname, '..')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = {
  // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
  target: 'node',
  entry: ['babel-polyfill', path.join(projectRoot, 'entry/entry-server.js')],
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(projectRoot, 'dist/server'),
    filename: 'bundle.server.js',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader'],
    },
    {
      test: /\.js$/,
      use: ['babel-loader'],
      include: projectRoot,
      exclude: /node_modules/,
    },
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new VueSSRServerPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.less', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve('./src'),
    }
  }
}
