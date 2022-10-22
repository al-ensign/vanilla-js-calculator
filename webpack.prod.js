/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { merge } = require("webpack-merge");
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CompressionPlugin = require('compression-webpack-plugin');
const config = require("./webpack.config.js");


module.exports = merge(
    config, {
        mode: "production",
        plugins: [
            new CompressionPlugin({
                algorithm: 'gzip'
                })
            ],
        optimization: {
            minimize: true,
            minimizer: [
                new ESBuildMinifyPlugin({
                    target: 'es6'
                })
            ]
        },
        devtool: 'source-map',
        output: {
            filename: 'bundle.prod.js',
            publicPath: '/',
            path: path.resolve(__dirname, 'dist'),
            clean: true
            },
    }
);