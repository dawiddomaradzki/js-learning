const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    basicStrings: "./src/js/basicStrings.js",
    basicLoops: "./src/js/basicLoops.js",
    basicFunctions: "./src/js/basicFunctions.js",
    basicArrays: "./src/js/basicArrays.js",
    caesarCipher: "./src/js/caesarCipher.js",
    arraysUsers: "./src/js/arraysUsers.js",
    arraysCities: "./src/js/arraysCities.js",
    objectsFirst: "./src/js/objectsFirst.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/*.DS_Store"],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: [
        "index",
        "basicStrings",
        "basicLoops",
        "basicFunctions",
        "basicArrays",
        "caesarCipher",
        "arraysUsers",
        "arraysCities",
        "objectsFirst",
      ],
      filename: "index.html",
    }),
  ],
};
