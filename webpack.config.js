var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        root: "./index.js",
        code: "./code/index.js",
        listings: "./listings/index.js",
        profile: "./profile/index.js",
        signup: "./signup/index.js"
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].entry.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};