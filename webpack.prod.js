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
                    { loader:  MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')({
                                'overrideBrowserslist': ['> 1%', 'last 2 versions']
                            })],
                        }
                    },
                    {
                        loader: 'sass-loader', options: {
                            sassOptions: {
                                importer: globImporter()
                            }
                        }
                    }]
                }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "./src/css/[name].[contentHash].css"
    },
    ), new CleanWebpackPlugin()]

})