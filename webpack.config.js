var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./frontend/invaderGir.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/, /\.css$/],
        exclude: /(node_modules)/,
        loader: ['babel-loader', "style-loader!css-loader"],
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
