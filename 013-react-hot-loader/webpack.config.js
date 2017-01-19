'use strict';

const path = require('path');

/*
    参考URL：
        https://blog.mismithportfolio.com/web/20161214hmr
        https://github.com/gaearon/react-hot-loader
        https://github.com/gaearon/react-hot-boilerplate/tree/next

*/


const webpack = require('webpack');

module.exports = {

    entry : [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/static/'
    },
    // output : {
    //     filename : 'app.bundle.js'
    // },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                // loader : 'babel',

                // 順番が大切なようだ。
                loaders : [ 'react-hot', 'babel' ],

                // loadersの時は指定できないみたいなので、babelrcにする.
                // query : {
                //     presets : ['es2015', 'react']
                // }
            }
        ]
    },
    devServer : {
        hot : true,
        contentBase : '.',
        port : 3000,
        inline : true
    },
    plugins : [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}