var app = angular.module('departmentServer',[]);
app.factory('departmentSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listDepartment: listDepartment,
        countDepartment :countDepartment,
        addDepartment :addDepartment,
        findDepartmentId:findDepartmentId,
        editDepartment :editDepartment,
        DepartmentDelete:DepartmentDelete,
        DepartmentplanId:DepartmentplanId,
        patDartment:patDartment,
        surveyplanName:surveyplanName,
        surveyplanNum:surveyplanNum,
        patAare:patAare,
        projectName:projectName,
        deparementCollect:deparementCollect


    };
    function menuPermission(data) {
        return $http.get('/departmentbet/guidePermission/'+data);
    }
    function listDepartment(data) {
        return $http.get('/departmentbet/list',{
            params:data
        })
    }
    function countDepartment(){
        return $http.get('/departmentbet/count')
    }
    //添加
    function addDepartment(data){
        return $http.post('/departmentbet/add',data)
    }
    //id查询
    function findDepartmentId(data){
        return $http.get('/departmentbet/department',{
            params:data
        })
    }
    //编辑
    function editDepartment(data){
        return $http.post('/departmentbet/edit',data)
    }
    //删除
    function DepartmentDelete(data){
        return $http.get('/departmentbet/delete',{
            params: data
        })
    }
    //获取体系
    function DepartmentplanId(){
        return $http.get('/departmentbet/system')
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
        return $http.get('/departmentbet/projectName')
    }
    //汇总
    function  deparementCollect(data) {
        return $http.get('/departmentbet/departmentCollect',{
            params:data
        })
    }
});
