var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/indexlibrary/v1/setButtonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //导航权限
    this.royNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 10000,
            uri : config()['rurl'] + '/indexlibrary/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
     /*设置*/
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.countSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    /*指标库*/
    this.indexPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indexlibrary/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.indexList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indexlibrary/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    // 添加指标库
    this.indexAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/indexlibrary/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //获取总条数
    this.getindexTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indexlibrary/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findindexId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indexlibrary/v1/back/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.indexEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/indexlibrary/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.indexDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/indexlibrary/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设置体系导航权限
    this.systemPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/systembet/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //体系列表
    this.systemList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/systembet/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    // 添加体系
    this.systemAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/systembet/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //体系获取总条数
    this.getsystemTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/systembet/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findsystemId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/systembet/v1/bet/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.systemEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/systembet/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.systemDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/systembet/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取体系
    this.surveyplanId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/systembet/v1/hierarchy',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取指标名称
    this.surveyplanName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/indexlibrary/v1/indexName',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取指标编号
    this.surveyplanNum = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/indexlibrary/v1/indexNum',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取部门
    this.patDartment = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/systembet/v1/department',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取地区
    this.patArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/systembet/v1/findArea',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取项目名称
    this.systemprojectName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/systembet/v1/projectName',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //汇总
    this.systemCollect= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/systembet/v1/systemCollect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

    //设置部门导航权限
    this.departmentPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentbet/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //部门列表
    this.departmentList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentbet/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    // 添加部门
    this.departmentAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentbet/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //部门获取总条数
    this.getdepartmentTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentbet/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.finddepartmentId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentbet/v1/department/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.departmentEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentbet/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.departmentDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentbet/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //部门体系
    this.getdepartmentSystem = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentbet/v1/system`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    //汇总
    this.departmentCollect= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/departmentbet/v1/departmentCollect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取项目名称
    this.departmentName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/departmentbet/v1/projectName',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };


    //设置岗位导航权限
    this.jobsbetPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/jobsbet/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //岗位列表
    this.jobsbetList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/jobsbet/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    // 添加岗位
    this.jobsbetAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/jobsbet/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //岗位获取总条数
    this.getjobsbetTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/jobsbet/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findjobsbetId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/jobsbet/v1/jobs/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.jobsbetEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/jobsbet/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.jobsbetDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/jobsbet/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取岗位
    this.jobsbeJob = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/jobsbet/v1/jobs`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    //汇总
    this.jobsCollect= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/jobsbet/v1/jobsCollect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取项目名称
    this.jobsbetName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/jobsbet/v1/projectName',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //设置对赌指标总呈现导航权限
    this.managePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/managecommission/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //对赌指标总呈现列表
    this.manageList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/managecommission/v1/collect?limit=10&projectName=${argvs.projectName}`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    //获取项目名称
    this.manageProjectName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/managecommission/v1/projectName`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    //管理提成管理日汇总
    this.dayCollect= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/royaltycollect/v1/dayCollect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //管理提成管理月汇总
    this.monthCollect= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/royaltycollect/v1/monthCollect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //管理提成管理周汇总
    this.weekCollect= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/royaltycollect/v1/weekCollect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //管理提成管理累计汇总
    this.totalCollect= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/royaltycollect/v1/totalCollect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取当前月有几周
    this.findWeek = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/royaltycollect/v1/findWeek/${argvs.year}/${argvs.month}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取年
    this.yearCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/royaltycollect/v1/year`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };

    return this;
};