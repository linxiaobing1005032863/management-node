var app = angular.module('setting', [{
    files:[
        "root/royalty/setting/_res/js/service.js"
    ]
}]);
app.controller('settingCtrl',function ($scope,$state) {

    if ($state.current.url == '/setting') {//默认加载列表
        $state.go('root.royalty.setting.list[12]')
    }

}).controller('settingMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]'){
            $scope.menuClass = 'listMenu';
        }
    });

    $scope.$on('listId',function(event,id){
        $scope.editId=id;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.list = function(){
        $state.go('root.royalty.setting.list[12]');
        $scope.menuClass = 'listMenu'
    };
    $scope.edit = function(){
        if($scope.editId){
            $state.go('root.royalty.setting.edit[12]',{id:$scope.editId,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
});

app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "LEVEL":
                result = "层级";
                break;
            case "MODULE":
                result = "模块";
                break;
            case "POSITION":
                result = "岗位";
                break;
            case "DEPART":
                result = "部门";
                break;
        }
        return result;
    }

});


