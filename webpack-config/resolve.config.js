/**
 * Created by yangfan on 2017/7/5.
 */
var path = require('path');
var dirVars = require('./base/dir-vars.config.js');

module.exports = {
// 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
    alias: {
        /* 各种目录 */
        iconfontDir: path.resolve(dirVars.publicDir, 'iconfont/'),
        configDir: dirVars.configDir,
        vendorDir: dirVars.vendorDir,

        /* libs */
        libs: path.resolve(dirVars.libsDir, 'libs.modules'),

        /* less */
        lessDir: path.resolve(dirVars.publicDir, 'less'),

        /* scss */
        scssDir: path.resolve(dirVars.publicDir, 'scss'),

        /* css */
        cssDir: path.resolve(dirVars.publicDir, 'css'),

        /* layout */
        layout: path.resolve(dirVars.layoutDir, 'layout/html'),

        /* logic */
        cm: path.resolve(dirVars.logicDir, 'common.module'),
        cp: path.resolve(dirVars.logicDir, 'common.page'),

        /* config */
        configModule: path.resolve(dirVars.configDir, 'common.config')
    },

    // 当require的模块找不到时，尝试添加这些后缀后进行寻找
    extensions: ['.js', '.css', '.less']
};