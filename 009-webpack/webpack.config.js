var webpack = require('webpack');

let config = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/, 
                loader: "style!css"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warning: false
            }
        })
    ]
}; 




module.exports = config;