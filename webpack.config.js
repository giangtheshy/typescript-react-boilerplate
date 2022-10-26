const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

let entry = ["react-hot-loader/patch", "./src/index.tsx"];
if (process.env.NODE_ENV === "development") {
  entry.push("webpack-dev-server/client?http://localhost:3000/");
}
// else {

// }

const config = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    static: "./dist",
    open: true,
    hot: true,
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
    allowedHosts: "all",
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  "primary-color": "#d90d54",
                  "link-color": "#d90d54",
                  "border-radius-base": "2px",
                  dark: true,
                  compact: true,
                },
              },
            },
          },
        ],
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/images/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
};

module.exports = config;
