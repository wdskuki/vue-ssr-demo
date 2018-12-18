/* webpack.client.js */
const path = require('path');
const projectRoot = path.resolve(__dirname, '..');


module.exports = {
  entry: ['babel-polyfill', path.join(projectRoot, 'entry/entry-client.js')],
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: '[name].js?[chunkhash]',
    chunkFilename: 'js/[name].js?[chunkhash]',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: projectRoot,
      exclude: /node_modules/,
      options: {
        presets: ['es2015']
      }
    }
    ]
  },
  plugins: [],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': path.resolve('./src'),
    }
  }
};
