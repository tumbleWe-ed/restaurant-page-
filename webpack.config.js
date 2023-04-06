const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js','./src/menu.js','./src/about.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  /** plugins: [
    // eslint-disable-next-line no-undef
    new HtmlWebpackPlugin({
     title: 'Development',
    }),
  ],* */
  devtool: 'inline-source-map',
  module: {

    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
