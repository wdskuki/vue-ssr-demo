/* webpack.client.js */
const path = require('path');
const projectRoot = path.resolve(__dirname, '..');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: ['babel-polyfill', path.join(projectRoot, 'entry/entry-client.js')],
  output: {
    path: path.join(projectRoot, 'dist/client'),
    filename: 'bundle.client.js',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: [/node_modules/],
    }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.less', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve('./src'),
    }
  }
};
