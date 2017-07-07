/**
 * Created by yangfan on 2017/7/4.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dirVars = require('../base/dir-vars.config.js');
var pageArr = require('../base/page-entries.config.js');

var configPlugins = [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery'
    }),
/**抽出通用部分**/
    new webpack.optimize.CommonsChunkPlugin({
        name: 'commons/commons',
        filename: '[name]/bundle.js',
        minChunks: 4
    }),
    new ExtractTextPlugin('[name]/styles.css')
];

pageArr.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}/page.html`,
        template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
        chunks: [page, 'commons/commons'],
        hash: true,
        xhtml: true
    });
    configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;