var app = angular.module('app', ['ngVerify','ipCookie','toastr',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie,rootSer,$location) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.royalty');
    }
    $scope.username = ipCookie('username');
    if($scope.username==undefined){
        $scope.username="登录用户"
    }else {
        $scope.logined=true;
    }
    $scope.login = function(){
        var absurl = $location.absUrl();
        window.location.href='http://user.issp.bjike.com/login?url='+absurl
    };
    $scope.logout = function(){
        var abs = window.location.host;
        var hashs = $location.url().split('?')[0];
        location.href="http://user.issp.bjike.com/login/logout?absurl="+abs+"&hash="+hashs;
    }
});
// 下拉导航的自定义指令
app.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return { 'h': w.height() };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.style = function () {
                return {
                    'height': (newValue.h - 50) + 'px',
                    /*'height': (newValue.h -10) + 'px',*/
                };
            };
        }, true);
        w.bind('resize', function () {
            scope.$apply();
        });
    }
});
