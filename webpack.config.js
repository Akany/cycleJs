const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './main.js',
        vendor: './vendor.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'eval',

    devServer: {
        contentBase: './dist',
        port: 3000
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
