define(['avalon', 'text!./category.html', 'css!./category.css'], function (avalon, category) {
	avalon.templateCache.category = category;
	// 定义model对象
	var categoryCtrl = avalon.define({
		$id: "categoryCtrl",
		text: "I am category page!"
	});
});
