const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        contentBase: './dist',
        hot: true,
    },
    optimization: {
        nodeEnv: 'development'
    }
});
