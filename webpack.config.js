const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    game: "./src/public/game.ts"
  },
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/public")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: "./src/public", to: "./", ignore: ["**/*.ts"] }]),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
