const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:"./src/index.tsx",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx",".js", ".jsx"]
    },
    module:{
        rules:[
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
          
            {
                test:/\html$/,
                use:["html-loader"]
            },
            {
                test:/\.(svg|png|jpe?g|gif)$/i,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name].[hash].[ext]",
                        outputPath:"images"
                    }
                }
            }
        ]   
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins:[new HTMLWebpackPlugin({
        template:"./src/index.html"
    })]    
}