const common = require("./webpack.common");
const merge = require("webpack-merge");
const globImporter = require('node-sass-glob-importer');

module.exports = merge(common, {
    mode: "development",
  
    module: {

        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: 'style-loader' },
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
            },
        ]
    },
    devtool:'cheap-module-eval-source-map',   
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 8081
    }
    
});