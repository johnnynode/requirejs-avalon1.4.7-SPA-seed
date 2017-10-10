// 配置
require.config({
    baseUrl: './',
    paths: {
        avalon: ["lib/avalon/avalon"],
        mmHistory: ['lib/avalon/mmHistory'],
        mmRouter: ['lib/avalon/mmRouter/mmRouter'],
        mmState: ['lib/avalon/mmRouter/mmState'],
        mmPromise: ['lib/avalon/mmPromise/mmPromise'],
        text: ['lib/require/text'],
        css: ['lib/require/css'],
        jquery: ['lib/jquery/jquery-1.12.4'],
        jqueryCookie: ['lib/jquery/jquery.cookie-1.4.1'],
        domReady: ['lib/require/domReady'],
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
        utilRouter.init(); // 初始化路由

    });
