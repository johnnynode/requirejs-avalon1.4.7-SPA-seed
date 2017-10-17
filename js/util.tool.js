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
            handleMainNavBarHash: function (selectorStr, arr) {
                var hashArr = window.location.hash.split("#!/");
                hashStr = hashArr[1].split("?")[0];
                _hashStr = "/" + hashStr;
                avalon.log(hashStr);
                return;
                var flag = false;
                $(selectorStr).children().removeClass("cur"); // 去除所有选中样式
                console.log("hashStr: " + hashStr);
                console.log("_hashStr: " + _hashStr);
                for (var i = 0, len = arr.length; i < len; i++) {

                    console.log("arr[i]: " + arr[i]);
                    if (_hashStr.indexOf(arr[i]) !== -1) {
                        flag = true;
                        console.log(0);
                    }
                }
                // 没找到匹配的
                if (!flag) {
                    return;
                }
                console.log(1);
                $(selectorStr).children("." + hashStr).addClass("cur"); // 当前加上cur类
                console.log(2);
            },
            /* 处理导航栏的选中状态的样式交互问题 */
            handleSysNavBarHash: function (navSelectorStr, sysSelectorStr) {
                var hashArr = window.location.hash.split("/"); // 获取hash并分离路径
                $(navSelectorStr).children().removeClass("cur"); // 主导航栏上去除所有选中样式
                $(sysSelectorStr).children().removeClass("cur"); // 系统管理去除所有选中样式
                $(sysSelectorStr).children("." + hashArr[2]).addClass("cur"); // 系统管理特定部分添加选中状态
            },
        }
    });
