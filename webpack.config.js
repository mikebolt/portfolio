const path = require("path");

const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
const environment = isProduction ? "production" : "development";

module.exports = {
  entry: "./src/index.js",
  mode: environment,
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    fallback: {
      fs: false,
      path: false,
    },
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({ fix: false }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Michael Casebolt / mikebolt",
      author: "Michael Casebolt",
      description: "Michael Casebolt's portfolio",
      template: "src/pageTemplate.html",
      scriptLoading: "module",
      cache: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/svg", to: "svg" },
        { from: "src/png", to: "png" },
        { from: "src/banners", to: "banners" },
      ],
    }),
  ],

  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
  devServer: {
    static: "./dist",
  },
};
