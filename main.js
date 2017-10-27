// 配置
require.config({
    baseUrl: './',
    paths: {
        avalon: ["lib/avalon/avalon"],
        mmRouter: ['lib/avalon/mmRouter/mmRouter'],
        mmHistory: ['lib/avalon/mmRouter/mmHistory'],
        mmState: ['lib/avalon/mmRouter/mmState'],
        mmPromise: ['lib/avalon/mmPromise/mmPromise'],
        text: ['lib/require/text'],
        css: ['lib/require/css'],
        jquery: ['lib/jquery/jquery-1.12.4'],
        jqueryCookie: ['lib/jquery/jquery.cookie-1.4.1'],
        domReady: ['lib/require/domReady'],
        utilTool: ['js/util.tool'],
        utilRouter: ['js/util.router']
    },
    shim: {
        avalon: {exports: "avalon"},
        mmHistory: {deps: ['avalon']},
        mmRouter: {deps: ['avalon']}
    },
    priority: ['text']
});

// 引入路由
require(['avalon', 'utilRouter', 'domReady!'],
    function (avalon, utilRouter) {
        // 初始化主model
        var root = avalon.define({
            $id: "root",
            content: "",
            routerObj: null
        });
        utilRouter.init(); // 初始化路由
    });
