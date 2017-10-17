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
        }
    });
