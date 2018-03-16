var app = angular.module('collect', [{
    files:[
        "root/royalty/collect/_res/js/service.js"
    ]
}]);
app.controller('collectCtrl',function ($scope,$state) {
    if ($state.current.url == '/collect') {//默认加载列表
        $state.go('root.royalty.collect.collect[12]');
    }
}).controller('collectMenuCtrl',function($scope,$state,$rootScope,$location,collectSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'collectMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        collectSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    //监听到父Ctrl后改变事件
    $scope.$on("loveId", function (event, id) {
        $scope.popId = id;
    });

    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    /*$scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = '';

    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idList = ''
    };*/
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu';
        $scope.idList = ''
    };
    /*$scope.delete = function () {

        if ($scope.popId) {
            $state.go('root.royalty.department.list[12]', {id: $scope.popId, name: 'delete', page: $scope.page});
            $scope.menuClass = 'deleteMenu';

        }
    };
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.royalty.department.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };*/
});


