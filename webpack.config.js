const webpack = require('webpack');

const browserConfifg = {
    entry: "./src/browser/index.js",

    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: { presets: ["react-app"] }
            }
        ]
    }
};

const serverConfig = {
    entry: "./src/server/index.js",
    target: "node",
    output: {
        path: __dirname,
        filename: "server.js",
        librarytarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /js$/,
                loader: "file-loader",
                options: {
                    name: "public/media/[name].[ext]/",
                    publicPath: url => url.replace(/public/, "")
                }
            }
        ]
    }

};

module.exports = [browserConfifg, serverConfig];
