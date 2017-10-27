// 用于定义不同类型的ajax请求
define(['avalon', 'jquery'],
    function (avalon, $) {
        return {
            /* 检测浏览器的版本 */
            isLowIE: function () {
                return !$.support.leadingWhitespace || this.isIE9(); // !$.support.leadingWhitespace 用于检测IE6-8
            },
            /* 检测IE特殊版本IE9 */
            isIE9: function () {
                // 先判断是否是IE
                if (/msie/.test(navigator.userAgent.toLowerCase())) {
                    // 检测浏览器的版本
                    var browser = navigator.appName;
                    var b_version = navigator.appVersion;
                    var version = b_version.split(";");
                    var trim_Version = version[1].replace(/[ ]/g, "");
                    return (trim_Version === "MSIE9.0"); // 再来检测IE 9
                }
                return false;
            },
            /* 处理导航栏的选中状态的样式交互问题 */
            handleMainNavBarHash: function (arr) {
                var hashArr = window.location.hash.split("#!/");
                hashStr = hashArr[1].split("?")[0];
                var flag = false;
                $(".navbar-list").children("li").removeClass("cur"); // 去除所有选中样式
                var num = 0; // 用于标识找到对应路由的下标
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (("/" + hashStr).indexOf(arr[i].name) !== -1) {
                        flag = true;
                        num = i;
                    }
                }
                // 没找到匹配的
                if (!flag) {
                    return;
                }
                $(".navbar-list").children("." + arr[num].navClass).addClass("cur"); // 当前加上cur类
            },
            /* 处理导航栏的选中状态的样式交互问题 */
            handleSysNavBarHash: function (arr) {
                var hashArr = window.location.hash.split("#!/");
                hashStr = hashArr[1].split("?")[0];
                $(".navbar-list").children().removeClass("cur"); // 去除主视图所有选中样式
                $(".system-left-col").children("a").removeClass("cur"); // 去除主视图所有选中样式

                var flag = false;
                $(".navbar-list").children("li").removeClass("cur"); // 去除所有选中样式
                var num = 0; // 用于标识找到对应路由的下标
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (("/" + hashStr).indexOf(arr[i].name) !== -1) {
                        flag = true;
                        num = i;
                    }
                }
                // 没找到匹配的
                if (!flag) {
                    return;
                }
                $(".system-left-col").children("." + arr[num].navClass).addClass("cur"); // 系统管理特定部分添加选中状态
                $(".navbar-list").children(".navSystem").addClass("cur"); // 主导航上的系统管理添加选中样式
            },
        }
    });
