var app = angular.module('systemServer',[]);
app.factory('systemSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listSystem : listSystem,
        countSystem :countSystem,
        addSystem :addSystem,
        findSystemId:findSystemId,
        editSystem :editSystem,
        SystemDelete:SystemDelete,
        surveyplanId:surveyplanId,
        patDartment:patDartment,
        surveyplanName:surveyplanName,
        surveyplanNum:surveyplanNum,
        patAare:patAare,
        projectName:projectName,
        systemCollect:systemCollect


    };
    function menuPermission(data) {
        return $http.get('/systembet/guidePermission/'+data);
    }
    function listSystem(data) {
        return $http.get('/systembet/list',{
            params:data
        })
    }
    function countSystem(){
        return $http.get('/systembet/count')
    }
    //添加
    function addSystem(data){
        return $http.post('/systembet/add',data)
    }
    //id查询
    function findSystemId(data){
        return $http.get('/systembet/bet',{
            params:data
        })
    }
    //编辑
    function editSystem(data){
        return $http.post('/systembet/edit',data)
    }
    //删除
    function SystemDelete(data){
        return $http.get('/systembet/delete',{
            params: data
        })
    }
    //获取体系
    function surveyplanId(){
        return $http.get('/systembet/hierarchy')
    }
    //获取部门
    function patDartment() {
        return $http.get('/systembet/department')
    }
    //获取指标名称
    function surveyplanName(){
        return $http.get('/indexlibrary/indexName')
    }
    //获取指标编号
    function surveyplanNum(){
        return $http.get('/indexlibrary/indexNum')
    }
    //获取地区
    function patAare(){
        return $http.get('/systembet/findArea')
    }
    //获取项目名称
    function projectName() {
        return $http.get('/systembet/projectName')
    }
    //汇总
    function  systemCollect(data) {
        return $http.get('/systembet/systemCollect',{
            params:data
        })
    }
});
