var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "./build");
var APP_DIR = path.resolve(__dirname, "./src/client");
var IMG_DIR = path.resolve(__dirname, "./img");

const config = {
  entry: {
    main: APP_DIR + "/index.js"
  },
  mode: "development",
  output: {
    filename: "bundle.js",
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(jsx|js)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["react", "es2015"] // Transpiles JSX and ES6
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: IMG_DIR,
        loader: "url-loader?limit=30000&name=img/[name].[ext]"
      }
    ]
  }
};

module.exports = config;
