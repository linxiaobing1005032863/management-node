var app = angular.module('collectServer',[]);
app.factory('collectSer',function ($http) {
    return {
        menuPermission:menuPermission,
        dayCollect:dayCollect,
        monthCollect: monthCollect,
        weekCollect :weekCollect,
        totalCollect :totalCollect,
        findWeek:findWeek,
        yearCollect:yearCollect

    };
    function menuPermission(data) {
        return $http.get('/jobsbet/guidePermission/'+data);
    }
    //管理提成管理日汇总
    function  dayCollect(data) {
        return $http.get('/royaltycollect/dayCollect',{
            params:data
        })
    }
    //管理提成管理月汇总
    function  monthCollect(data) {
        return $http.get('/royaltycollect/monthCollect',{
            params:data
        })
    }
    //管理提成管理周汇总
    function  weekCollect(data) {
        return $http.get('/royaltycollect/weekCollect',{
            params:data
        })
    }
    //管理提成管理累计汇总
    function  totalCollect(data) {
        return $http.get('/royaltycollect/totalCollect',{
            params:data
        })
    }
    //获取当前月有几周
    function  findWeek(data) {
        return $http.get('/royaltycollect/findWeek',{
            params:data
        })
    }
    //获取年份
    function yearCollect() {
        return $http.get('/royaltycollect/year')
    }
});
