var app = angular.module('settingServer',[]);
app.factory('settingSer',function ($http) {
    return {
        listSetting : listSetting,
        countSetting:countSetting,
        getpermit:getpermit,
        getListpermit:getListpermit,
        editSetting:editSetting
    };
    function listSetting(data) {
        return $http.get('/listSetting',{params:data})
    }
    function countSetting() {
        return $http.get('/countSetting')
    }
    function getpermit(data) {
        return $http.get('/getpermit',{params:data})
    }
    function getListpermit(data) {
        return $http.get('/getListpermit',{params:data})
    }
    function editSetting(data) {
        return $http.post('/editSetting',data)
    }
});
