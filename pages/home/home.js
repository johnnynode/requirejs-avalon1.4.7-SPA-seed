define(['avalon', 'text!./home.html', 'css!./home.css'], function (avalon, home) {
	avalon.templateCache.home = home;
	// 定义model对象
	var homeCtrl = avalon.define({
		$id: "homeCtrl",
		text: "I am home page!"
	});
});
