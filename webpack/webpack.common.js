const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        app: path.resolve(__dirname, '../src/ts/app.ts'),
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    output: {
        filename: 'js/[name].bundle.js',
        sourceMapFilename: "js/[name].bundle.js.map",
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        libraryTarget: "umd"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.bundle.css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'js/*',
                'css/*'
            ]
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../src/assets"),
                    to: "assets"
                },
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};
