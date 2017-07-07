/**
 * Created by yangfan on 2017/7/4.
 */
var dirVars = require('./base/dir-vars.config.js');
module.exports = {
    path: dirVars.buildDir,
    publicPath: '/',
    filename: '[name]/entry.js',
    chunkFilename: '[id].bundle.js'
};