var app = angular.module('royalty');
app.factory('royaltySer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/indexlibrary/sonPermission');
    }
    function setPermission(){
        return $http.get('/indexlibrary/setButtonPermission');
    }
});