/**
 * Created by yangfan on 2017/7/5.
 */
const config = require('configModule');
const content = require('./content.ejs');
const layout = require('layout');
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
const dirsConfig = config.DIRS;
const renderData = Object.assign({}, dirsConfig, {list, pageNav});

module.exports = layout.init({
    pageTitle: ''
}).run(content(renderData));
