var app = angular.module('rootModule', []);
app.factory('rootSer', function($http){
    return {
        userLogout : userLogout,
    };

    function userLogout(data){
        return $http.get('/user/logout',{params:data});
    }
});