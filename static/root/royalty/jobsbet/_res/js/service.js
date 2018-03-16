var app = angular.module('jobsbetServer',[]);
app.factory('jobsbetSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listJobsbet: listJobsbet,
        countJobsbet :countJobsbet,
        addJobsbet :addJobsbet,
        findJobsbetId:findJobsbetId,
        editJobsbet :editJobsbet,
        JobsbetDelete:JobsbetDelete,
        JobsbetplanId:JobsbetplanId,
        patJobsbet:patJobsbet,
        surveyplanName:surveyplanName,
        surveyplanNum:surveyplanNum,
        patAare:patAare,
        patJobs:patJobs,
        jobsbetCollect:jobsbetCollect,
        projectName:projectName


    };
    function menuPermission(data) {
        return $http.get('/jobsbet/guidePermission/'+data);
    }
    function listJobsbet(data) {
        return $http.get('/jobsbet/list',{
            params:data
        })
    }
    function countJobsbet(){
        return $http.get('/jobsbet/count')
    }
    //添加
    function addJobsbet(data){
        return $http.post('/jobsbet/add',data)
    }
    //id查询
    function findJobsbetId(data){
        return $http.get('/jobsbet/jobs',{
            params:data
        })
    }
    //编辑
    function editJobsbet(data){
        return $http.post('/jobsbet/edit',data)
    }
    //删除
    function JobsbetDelete(data){
        return $http.get('/jobsbet/delete',{
            params: data
        })
    }
    //获取体系
    function JobsbetplanId(){
        return $http.get('/departmentbet/system')
    }
    //获取部门
    function patJobsbet() {
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
    //获取岗位
    function patJobs(){
        return $http.get('/jobsbet/jobs')
    }
    //获取项目名称
    function projectName() {
        return $http.get('/jobsbet/projectName')
    }
    //汇总
    function  jobsbetCollect(data) {
        return $http.get('/jobsbet/jobsCollect',{
            params:data
        })
    }
});
