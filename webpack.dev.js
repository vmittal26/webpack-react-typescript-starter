const common = require("./webpack.common");
const merge = require("webpack-merge");
const globImporter = require('node-sass-glob-importer');

module.exports = merge(common, {
    mode: "development",
    module: {

        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'sass-loader', options: {
                            sassOptions: {
                                importer: globImporter()
                            }
                        }
                    }]
            },
        ]
    }
});