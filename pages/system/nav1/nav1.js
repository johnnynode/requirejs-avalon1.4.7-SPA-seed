define(['avalon', 'text!./nav1.html', 'css!./nav1.css'], function (avalon, nav1) {
    avalon.templateCache.nav1 = nav1;

    // 定义model
    var nav1Ctrl = avalon.define({
        $id: "nav1Ctrl",
        text:"I am nav1 page!"
    });
});
