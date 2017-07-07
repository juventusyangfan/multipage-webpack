/**
 * Created by yangfan on 2017/7/5.
 */
require('lessDir/base.less');
require('cssDir/reset.css');
require('cssDir/customPublic.css');
require('cssDir/component.css');

$(()=> {
    //头部下拉菜单方法
    var dd_timer = null;
    $(".dd_inner a").each(function (n) {
        $(this).unbind().bind({
            mouseover: function () {
                clearTimeout(dd_timer);
                $(".dd_inner a").removeClass("act");
                $(this).addClass("act");
                $(".dropdown_layer").hide().eq(n).show();
            },
            mouseout: function () {
                dd_timer = setTimeout(function () {
                    $(".dd_inner a").removeClass("act");
                    $(".dropdown_layer").hide();
                }, 200);
            }
        });
    });
    $(".dropdown_layer").unbind().bind({
        mouseover: function () {
            clearTimeout(dd_timer);
        },
        mouseout: function () {
            dd_timer = setTimeout(function () {
                $(".dd_inner a").removeClass("act");
                $(".dropdown_layer").hide();
            }, 200);
        }
    });
    $(".layer_list a").unbind().bind({
        mouseover: function () {
            var main = $(this),
                par = main.parents(".dropdown_layer"),
                lista = par.find(".layer_list a");
            if (main.attr("index") == undefined) {
                var len = par.find(".layer_list a").length;
                for (var i = 0; i < len; i++) {
                    lista.eq(i).attr("index", i);
                }
            }
            lista.removeClass("active");
            main.addClass("active");
            par.find(".layer_sub").hide();
            par.find(".layer_sub").eq(main.attr("index")).show();
        }
    });

    //图片轮播公共方法
    $.fn.initPicPlayer = function () {
        var main = $(this);
        var btns = main.find(".js_pagination a");//滚动按钮
        var container = main.find(".js_slidesContainer");//轮播滚动的容器
        var left = main.find(".js_left");
        var right = main.find(".js_right");
        var imgWidth = main.width()//图片滚动宽度
        var iconClass = "active";//按钮选中样式
        var selectedBtn;//选中的按钿
        var playID;//自动播放的id
        var selectedIndex;//选中图片的索引

        //设置容器和图片宽度
        //container.css("width", imgWidth * btns.length + "px");
        //container.find("a").css("width", imgWidth + "px");
        container.find(".js_slidesCell").eq(0).css("display", "block");

        for (var i = 0; i < btns.length; i++) {
            (function () {
                var index = i;
                btns[i].onclick = function () {
                    if (selectedBtn == this) {
                        return;
                    }
                    setSelectedItem(index);
                    return main;
                };
            })();
        }
        setSelectedItem(0);

        function setSelectedItem(index) {
            selectedIndex = index;
            clearInterval(playID);
            if (container.find(".js_slidesCell").is(":animated")) {
                return;
            }
            container.find(".js_slidesCell").css({"zIndex": 0})
            container.find(".js_slidesCell").eq(index).css("zIndex", 1).fadeIn(500, function () {
                container.find(".js_slidesCell").each(function (n) {
                    if (n != index) {
                        $(this).css({"display": "none"})
                    }
                });
                //自动播放方法
                playID = setTimeout(function () {
                    if (btns.length == 1) { //如果只有一张图片 则不滚动。
                        return;
                    }
                    var index = selectedIndex + 1;
                    if (index >= btns.length) {
                        index = 0;
                    }
                    setSelectedItem(index);
                }, 5000);
            });

            if (selectedBtn) {
                $(selectedBtn).removeClass(iconClass);
            }
            selectedBtn = btns[parseInt(index)];
            btns.removeClass(iconClass);
            var that = btns[selectedIndex];
            $(that).addClass(iconClass);
        }

        main.bind({
            mouseover: function () {
                left.css("display", "block");
                right.css("display", "block");
            },
            mouseout: function () {
                left.css("display", "none");
                right.css("display", "none");
            }
        });
        $("body").on("click", left, function () {
            if (container.is(":animated")) {
                return;
            }
            if (selectedIndex == 0) {
                selectedIndex = btns.length;
            }
            setSelectedItem(selectedIndex - 1);
            return false;
        });
        $("body").on("click", right, function () {
            if (container.is(":animated")) {
                return;
            }
            if (selectedIndex == btns.length - 1) {
                selectedIndex = -1;
            }
            setSelectedItem(parseInt(selectedIndex + 1));
            return false;
        });
        return main;
    };
});