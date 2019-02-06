'use strict';
var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: "./built/webapp/pages/shared-screen/client.js",
    output: {
        path: __dirname,
        filename: "./built/webapp/static/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko'],
        modules: ['./', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            },
            {
                test: /\.(less|css)$/,
                loader: "style-loader!css-loader!less-loader!"
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader',
                query: {
                    name: 'static/images/[hash].[ext]',
                    publicPath: '/'
                }
            }
        ]
    },
    plugins: [
            // Avoid publishing files when compilation failed:
            new webpack.NoEmitOnErrorsPlugin(),

            // Write out CSS bundle to its own file:
            // new ExtractTextPlugin({ filename: 'static/bundle.css', allChunks: true })
    ]
};