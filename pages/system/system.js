define(['avalon', 'text!./system.html', 'css!./system.css'], function (avalon, system) {
    avalon.templateCache.system = system;

    // 定义model
    var systemCtrl = avalon.define({
        $id: "systemCtrl",
        sysContent: ""
    });
});
