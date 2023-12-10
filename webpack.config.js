const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname + "/src"),
  entry: "./js/index",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),    
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.woff$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]"
        }
      },
      {
        test: /\.(svg|png|jpg)$/,
        type: "asset/resource",
        generator:{
          filename: "img/[name][ext]"
        }
      },
    ],
  },
};



