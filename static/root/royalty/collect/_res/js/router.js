var app = angular.module('collect', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.royalty.collect", {
        url : "/collect",
        views : {
            "content@root.royalty" : {
                templateUrl : "root/royalty/collect/_res/html/index.html",
                controller:"collectCtrl"
            },"menu@root.royalty" : {
                templateUrl : "root/royalty/collect/_res/html/menu.html",
                controller:"collectMenuCtrl"
            }
        }
    })/*.state("root.royalty.department.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.royalty.department":{
                templateUrl : "root/royalty/department/list/_res/html/index.html",
                controller:'departmentListCtrl'
            }
        }
    }).state("root.royalty.department.add[12]",{
            url:"/add[12]",
            views:{
                "content@root.royalty.department":{
                    templateUrl : "root/royalty/department/add/_res/html/index.html",
                    controller:'departmentAddCtrl'
                }
            }
        }).state("root.royalty.department.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.royalty.department":{
                templateUrl : "root/royalty/department/edit/_res/html/index.html",
                controller:'departmentEditCtrl'
            }
        }
    })*/.state("root.royalty.collect.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.royalty.collect":{
                templateUrl : "root/royalty/collect/collect/_res/html/index.html",
                controller:'collectCollectCtrl'
            }
        }
    })
});