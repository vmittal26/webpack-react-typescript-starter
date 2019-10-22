const common = require("./webpack.common");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader']
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "./src/css/[name].[contentHash].css"
    },
    ), new CleanWebpackPlugin()]

})