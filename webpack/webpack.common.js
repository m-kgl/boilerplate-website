const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.ts',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets",
                    to: "assets",
                    globOptions: {
                        /*
                           TODO:
                             stops the favicon from also moving to the assets folder
                             remove comment when having data in assets
                             if out-commented it prevents from throwing an error due to no files in assets
                        */
                        // ignore: ["**/assets/favicon.ico"],
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            favicon: './src/assets/favicon.ico',
            title: 'Index template',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: 'css/'
                        }
                    },
                    "extract-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
};
