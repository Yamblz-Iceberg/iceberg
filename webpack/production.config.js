const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpack = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { optimize: { UglifyJsPlugin } } = require('webpack');

const SOURCE_PATH = '../src';
const OUTPUT_PATH = '../www';

module.exports = merge([{
    entry: [
        path.join(__dirname, SOURCE_PATH, 'index.js')
    ],
    output: {
        path: path.join(__dirname, OUTPUT_PATH),
        filename: 'assets/js/bundle.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { 
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        { loader: 'sass-loader' }
                    ]
                })
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/assets/svg/'
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
                            outputPath: '/assets/fonts/',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            beautify: false,
            comments: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),
        new HtmlWebpack({
            filename: 'index.html',
            template: path.join(__dirname, SOURCE_PATH, 'index.html'),
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                sortAttributes: true,
                useShortDoctype: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyJS: true
            }
        }),
        new ExtractTextPlugin({
            filename: OUTPUT_PATH + '/assets/css/bundle.css',
            allChunks: true
        }),
    ]
}]);
