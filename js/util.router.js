// 用于定义不同类型的ajax请求
define(['avalon', 'mmHistory', 'mmRouter'],
    function (avalon) {
        // 定义主视图路由列表
        var mainArr = [
            "/home",
            "/category",
            "/lesson/list",
            "/lesson/detail"
        ];

        /* 主视图渲染 */
        function mainRender(path, callback) {
            avalon.log("main-path: ", path);
            require([path], function () {

                avalon.vmodels.root.content = path + ".html";
                callback && callback();
            });
        }

        // 导航回调
        function callback() {
            var path = this.path; // 获取路径
            avalon.vmodels.root.routerObj = this; // 挂载到根节点
            window.scrollTo && window.scrollTo(0, 0); // 滚动到顶部，解决单页应用存在的页面缓存问题
            avalon.log("path: ", path);
            // var flag = false; // 一个找到路由的标志
            // 对主路由进行循环判断
            for (var i = 0, len = mainArr.length; i < len; i++) {
                console.log("mainArr[i]: ",mainArr[i]);
                if (path === mainArr[i]) {
                    // flag = true;
                    // 针对有回调函数的单独处理
                    switch (path) {
                        case "/lesson/list":
                            mainRender("pages/lesson/list/list", function () {
                                // todo 可能有分页参数
                            });
                            break;
                        case "/lesson/detail":
                            mainRender("pages/lesson/detail/detail", function () {
                                if (avalon.vmodels.lessonDetailCtrl) {
                                    avalon.vmodels.lessonDetailCtrl.cid = avalon.vmodels.root.routerObj.query.id + "timestamp=" + new Date().getTime();
                                }
                            });
                            break;
                        default:
                            // 无需参数处理的路由
                            mainRender("pages" + mainArr[i] + mainArr[i]);
                    }
                    break;
                }
            }
        }

        return {
            init: function () {
                // 加载avalon路由
                avalon.router.get("/home", callback); // 首页模块
                avalon.router.get("/category", callback); // 分类模块
                avalon.router.get("/lesson/list", callback); // 课程列表
                avalon.router.get("/lesson/detail", callback); // 课程详情
                // avalon.router.get("/system/", callback); // 后台管理
                // avalon.router.get("/system/*path", callback); // 后台管理二级页面

                // 启动历史管理器
                avalon.history.start({
                    basepath: "/",
                    hashPrefix: "!",
                    fireAnchor: true,
                    html5Mode: false
                });

                // 处理默认路由
                avalon.router.error(function () {
                    avalon.router.navigate("/home");
                });

                // 开始扫描
                avalon.scan();
            }
        }
    });
