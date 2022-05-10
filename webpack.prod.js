var path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    index: "./src/index.tsx",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({}),
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "./assets" }],
    }),
    new CompressionPlugin(),
  ],
  output: {
    filename: "[name].[chunkhash].bundle.js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "./",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "css"],
    plugins: [new TsConfigPathsPlugin(/* { tsconfig, compiler } */)],
  },
  module: {
    rules: [
      {
        test: /\.([jt]sx?)?$/,
        use: "swc-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
          "less-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  externals: {},
};
