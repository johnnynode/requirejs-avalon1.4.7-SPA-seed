define(['avalon', 'text!./detail.html', 'css!./detail.css'], function (avalon, lessonDetail) {
	avalon.templateCache.lessonDetail = lessonDetail;
	// 定义model对象
	var lessonDetailCtrl = avalon.define({
		$id: "lessonDetailCtrl",
		cid: avalon.vmodels.root.routerObj.query.id, // 触发视图变化的机关
		text: "I am lesson detail page!"
	}).$watch("cid", function (cid) {
		cid = cid.split("timestamp=")[0]; // 去除时间戳
        avalon.log("cid: ", cid);
		// 在这里处理，同步数据更新的问题
        lessonDetailCtrl.text = "I am lesson detail page and the params is " + cid;
	});
});