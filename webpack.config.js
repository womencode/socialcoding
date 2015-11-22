var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        root: "./index.js",
        code: "./code/index.js",
        common: "./common/index.js",
        listings: "./listings/index.js",
        profile: "./profile/index.js",
        signup: "./signup/index.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "js/[name].entry.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
};