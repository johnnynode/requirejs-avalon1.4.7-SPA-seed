define(['avalon', 'text!./nav5.html', 'css!./nav5.css'], function (avalon, nav5) {
    avalon.templateCache.nav5 = nav5;

    // 定义model
    var nav5Ctrl = avalon.define({
        $id: "nav5Ctrl",
        text:"I am nav5 page!"
    });
});
