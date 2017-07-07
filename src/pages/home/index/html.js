/**
 * Created by yangfan on 2017/7/6.
 */
const config = require('configModule');
const content = require('./content.ejs');
const layout = require('layout');
const topMenu = require('../../../public-resource/components/top-menu/html.ejs')()
const list = require('../../../public-resource/components/list/html.ejs')({
    titles: ['品名', '材质', '规格', '数量', '价格区间', ''],
    content: [{
        pm: '螺纹钢',
        cz: 'HRB400',
        gg: 'Ф18*9m',
        sl: '1019',
        jgqj: '￥<span>3540.00</span><span style="margin: 0 5px;">-</span>￥<span>3830.00</span>',
        zk: '<i class="tra"></i>'
    }, {
        pm: '螺纹钢',
        cz: 'HRB400',
        gg: 'Ф18*9m',
        sl: '1019',
        jgqj: '￥<span>3540.00</span><span style="margin: 0 5px;">-</span>￥<span>3830.00</span>',
        zk: '<i class="tra"></i>'
    }, {
        pm: '螺纹钢',
        cz: 'HRB400',
        gg: 'Ф18*9m',
        sl: '1019',
        jgqj: '￥<span>3540.00</span><span style="margin: 0 5px;">-</span>￥<span>3830.00</span>',
        zk: '<i class="tra"></i>'
    }]

});//引用子模板一定要回调，不然返回相关方法
const pageNav = require('../../../public-resource/components/page-nav/html.ejs')();
//图片
const goods1 = require('./imgs/eq/goods1.jpg');
const goods2 = require('./imgs/eq/goods2.jpg');
const goods3 = require('./imgs/eq/goods3.jpg');

const dirsConfig = config.DIRS;
const renderData = Object.assign({}, dirsConfig, {topMenu, list, pageNav, goods1, goods2, goods3});

module.exports = layout.init({
    pageTitle: ''
}).run(content(renderData));