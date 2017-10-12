define(['avalon', 'text!./nav4.html', 'css!./nav4.css'], function (avalon, nav4) {
    avalon.templateCache.nav4 = nav4;

    // 定义model
    var nav4Ctrl = avalon.define({
        $id: "nav4Ctrl",
        text:"I am nav4 page!"
    });
});
