import path from 'path'
import webpack from 'webpack'
import terserPlugin from 'terser-webpack-plugin'

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    'script.js': path.join(__dirname, 'themes/theme/source/_js/script.js'),
  },
  output: {
    filename: '[name]',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules\/(core-js|webpack)/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },
  optimization: {
    minimizer: [
      new terserPlugin({
        extractComments: false,
        terserOptions: {
          output: {
            comments: /^!|@preserve|@license|@cc_on|@author/i,
          },
        },
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
}