const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");


module.exports = merge(
    config, {
    mode: "development",
    optimization: {
        minimize: false
    },
    devtool: 'eval-source-map',
    optimization: {
        minimize: false
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 9000,
        hot: true,
        open: true,
        liveReload: true,
        historyApiFallback: true,
        client: {
            overlay: {
                errors: true,
                warnings: false
            },
        },
    },
    output: {
        filename: 'bundle.dev.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        clean: true
        },
});