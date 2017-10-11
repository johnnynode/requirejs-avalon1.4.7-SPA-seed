define(['avalon', 'text!./list.html', 'css!./list.css'], function (avalon, lessonList) {
    avalon.templateCache.lessonList = lessonList;

    var lessonListCtrl = avalon.define({
        $id: "lessonListCtrl",
        text: "I am lesson list page"
    });

});
