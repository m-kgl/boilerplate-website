const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        nodeEnv: 'production'
    }
});
