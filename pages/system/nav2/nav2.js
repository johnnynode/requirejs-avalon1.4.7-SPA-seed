define(['avalon', 'text!./nav2.html', 'css!./nav2.css'], function (avalon, nav2) {
    avalon.templateCache.nav2 = nav2;

    // 定义model
    var nav2Ctrl = avalon.define({
        $id: "nav2Ctrl",
        text:"I am nav2 page!"
    });
});
