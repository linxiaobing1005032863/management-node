var app = angular.module('manageServer',[]);
app.factory('manageSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listManage : listManage,
        anageplanNum:anageplanNum


    };
    function menuPermission(data) {
        return $http.get('/managecommission/guidePermission/'+data);
    }
    function listManage(data) {
        return $http.get('/managecommission/collect',{
            params:data
        })
    }
    //获取项目名称
    function anageplanNum(){
        return $http.get('/managecommission/projectName')
    }

});
