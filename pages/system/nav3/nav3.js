define(['avalon', 'text!./nav3.html', 'css!./nav3.css'], function (avalon, nav3) {
    avalon.templateCache.nav3 = nav3;

    // 定义model
    var nav3Ctrl = avalon.define({
        $id: "nav3Ctrl",
        text:"I am nav3 page!"
    });
});
