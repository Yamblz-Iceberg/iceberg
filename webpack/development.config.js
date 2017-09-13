const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpack = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const SOURCE_PATH = '../src';
const OUTPUT_PATH = '../www';
const PORT = 8080;

module.exports = merge([{
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${PORT}`,
        'webpack/hot/only-dev-server',
        path.join(__dirname, SOURCE_PATH, 'index.js')
    ],
    output: {
        path: path.join(__dirname, OUTPUT_PATH),
        filename: 'bundle.js',
        publicPath: `http://localhost:${PORT}/`
    },
    module: {
        rules: [
            {
                // preloader
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/svg/',
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpack({
            template: path.join(__dirname, '../src/index.html'),
            alwaysWriteToDisk: true,
            minify: {
                removeScriptTypeAttributes: true,
            }
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.join(__dirname, OUTPUT_PATH)
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        stats: 'errors-only',
        host: 'localhost',
        port: PORT,
        contentBase: path.join(__dirname, OUTPUT_PATH),
        historyApiFallback: true,
        publicPath: '/',
    }
}]);
