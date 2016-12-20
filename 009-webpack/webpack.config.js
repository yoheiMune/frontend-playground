// webpack.config.js
module.exports = {
    entry : './react-app.js',
    output : {
        filename : 'react-app.bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['react', 'es2015']
                }
            }
        ]        
    },
    cache : true
};

// webpack.config.js
// let webpack = require('webpack');
// module.exports = {
//     entry : './main.js',
//     output : {
//         filename : 'main.bundle.js'
//     },
//     plugins : [
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false
//             }
//         })
//     ],
//     devtool : 'source-map'
// };