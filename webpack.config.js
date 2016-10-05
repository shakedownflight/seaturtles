// var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/src/index.js',
 
    output: {
        path: __dirname + '/client/public/',
        filename: 'bundle.js'
    },
 
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/client/public/'
    },
 
    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
};