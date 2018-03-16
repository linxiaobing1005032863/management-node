var app = angular.module('indexServer',[]);
app.factory('indexSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listIndex : listIndex,
        countIndex:countIndex,
        addIndex:addIndex,
        findIndexId:findIndexId,
        editIndex:editIndex,
        IndexDelete:IndexDelete,


    };
    function menuPermission(data) {
        return $http.get('/indexlibrary/guidePermission/'+data);
    }
    function listIndex(data) {
        return $http.get('/indexlibrary/list',{
            params:data
        })
    }
    function countIndex(){
        return $http.get('/indexlibrary/count')
    }
    //添加
    function addIndex(data){
        return $http.post('/indexlibrary/add',data)
    }
    //id查询
    function findIndexId(data){
        return $http.get('/indexlibrary/back',{
            params:data
        })
    }
    //编辑
    function editIndex(data){
        return $http.post('/indexlibrary/edit',data)
    }
    //删除
    function IndexDelete(data){
        return $http.get('/indexlibrary/delete',{
            params: data
        })
    }
});
