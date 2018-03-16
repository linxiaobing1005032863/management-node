var app = angular.module('jobsbet', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.royalty.jobsbet", {
        url : "/jobsbet",
        views : {
            "content@root.royalty" : {
                templateUrl : "root/royalty/jobsbet/_res/html/index.html",
                controller:"jobsbetCtrl"
            },"menu@root.royalty" : {
                templateUrl : "root/royalty/jobsbet/_res/html/menu.html",
                controller:"jobsbetMenuCtrl"
            }
        }
    }).state("root.royalty.jobsbet.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.royalty.jobsbet":{
                templateUrl : "root/royalty/jobsbet/list/_res/html/index.html",
                controller:'jobsbetListCtrl'
            }
        }
    }).state("root.royalty.jobsbet.add[12]",{
            url:"/add[12]",
            views:{
                "content@root.royalty.jobsbet":{
                    templateUrl : "root/royalty/jobsbet/add/_res/html/index.html",
                    controller:'jobsbetAddCtrl'
                }
            }
        }).state("root.royalty.jobsbet.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.royalty.jobsbet":{
                templateUrl : "root/royalty/jobsbet/edit/_res/html/index.html",
                controller:'jobsbetEditCtrl'
            }
        }
    }).state("root.royalty.jobsbet.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.royalty.jobsbet":{
                templateUrl : "root/royalty/jobsbet/collect/_res/html/index.html",
                controller:'jobsbetCollectCtrl'
            }
        }
    })
});