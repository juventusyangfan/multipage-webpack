/**
 * Created by yangfan on 2017/7/4.
 */
var dirVars = require('../base/dir-vars.config.js');

module.exports = {
    rules: [
        {
            test: /\.js$/,
            include: dirVars.srcRootDir,
            loader: 'babel-loader',
            options: {
                presets: [['es2015', {loose: true}]],
                cacheDirectory: true,
                plugins: ['transform-runtime']
            }
        },
        {
            test: /\.html$/,
            include: dirVars.srcRootDir,
            loader: 'html-loader'
        },
        {
            test: /\.ejs$/,
            include: dirVars.srcRootDir,
            loader: 'ejs-loader'
        },
        {
            // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
            // 如下配置，将小于8192byte的图片转成base64码
            test: /\.(png|jpg|gif)$/,
            include: dirVars.srcRootDir,
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: './static/img/[hash].[ext]'
            }
        }
    ]
};