/**
 * Created by yangfan on 2017/7/6.
 */
require('cp');
require('./page.css');
require('../../../public-resource/css/list.css');
require('../../../public-resource/css/pageNav.css');
const config = require('configModule');

$(() => {
    //首页banner轮播
    $(".js_slides").initPicPlayer();
});