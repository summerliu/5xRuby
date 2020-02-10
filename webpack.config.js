/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const DotEnvPlugin = require('dotenv-webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const DEV_MODE = (process.env.NODE_ENV === 'development');
const SRC_BASE_PATH = path.resolve(__dirname, './src');
const OUTPUT_PATH = path.resolve(__dirname, './dist');

const config = {
    target: 'web',
    entry: {
        app: ['whatwg-fetch', 'url-polyfill', path.resolve(SRC_BASE_PATH, 'index.jsx')],
    },

    // where to dump the output of a production build
    output: {
        path: path.resolve(OUTPUT_PATH, 'build'),
        publicPath: '/build/',
        filename: '[name].[contenthash].js',
    },

    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    plugins: [
                        ['@babel/plugin-syntax-jsx'],
                        ['@babel/plugin-transform-react-jsx'],
                        ['@babel/plugin-proposal-class-properties'],
                        ['@babel/plugin-transform-react-display-name'],
                    ],
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: { sourceMap: DEV_MODE, modules: true, importLoaders: 2 }},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader', options: { sourceMap: DEV_MODE }},
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: { modules: true, importLoaders: 2 }},
                    {loader: 'postcss-loader'},
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[hash].[ext]',
                        limit: 1024,
                    },
                }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            react: 'react',
            'react-dom': 'react-dom',
        },
    },

    plugins: [
        new DotEnvPlugin({
            safe: true,
        }),
        new ExtractCssChunks({
            // Options simiar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css',
            // hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
            orderWarning: true, // Disable to remove warnings about conflicting order between imports
            reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
            cssModules: true, // if you use cssModules, this can help.
        }),
        new CleanWebpackPlugin({verbose: true}),
        new HtmlWebpackPlugin({
            template: path.resolve(SRC_BASE_PATH, 'index.html'),
            filename: path.resolve(OUTPUT_PATH, 'index.html'),
            favicon: path.resolve(SRC_BASE_PATH, 'components', 'assets', 'favicon.png'),
            title: '5 x Ruby',
            alwaysWriteToDisk: true, // only on when HtmlWebpackHarddiskPlugin is installed
            inject: 'body',
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        // serve up any static files from dist/
        contentBase: path.join(__dirname, 'dist'),
        // enable gzip compression:
        compress: true,
        // enable HMR
        hot: true,
        // watch the files served by the devServer.contentBase option.
        watchContentBase: false,
        host: '0.0.0.0',
        // for react-router-dom routing
        historyApiFallback: true,
    },
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.mode = 'development';
        config.devtool = 'source-map';
        config.output.filename = '[name].js?[hash]';
        config.output.chunkFilename = '[id].js?[hash]';
    }

    if (argv.mode === 'production') {
        config.mode = 'production';
        config.output.filename = '[name].[hash].js';
        config.output.chunkFilename = '[id].[hash].js';
    }
    return config;
};
