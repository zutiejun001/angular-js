app.controller("mainctrl",function ($scope) {
    $scope.nav1=['首页','简介','信息','操作'];
    $scope.nav2=['设置栏目','更多设置','分割线'];
    $scope.users=[
        {name:'小王',pro:'设计师，博客',head:'images/a1.jpg',id:5},
        {name:'张琳',pro:'作家，杂志编辑',head:'images/a2.jpg',id:9},
        {name:'李小明',pro:'艺术总监，电影剪辑',head:'images/a3.jpg',id:4},
        {name:'赵大成',pro:'音乐家,运动员',head:'images/a4.jpg',id:2}
    ];
});

