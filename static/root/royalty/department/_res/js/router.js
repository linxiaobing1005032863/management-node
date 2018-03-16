var app = angular.module('department', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.royalty.department", {
        url : "/department",
        views : {
            "content@root.royalty" : {
                templateUrl : "root/royalty/department/_res/html/index.html",
                controller:"departmentCtrl"
            },"menu@root.royalty" : {
                templateUrl : "root/royalty/department/_res/html/menu.html",
                controller:"departmentMenuCtrl"
            }
        }
    }).state("root.royalty.department.list[12]",{
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
    }).state("root.royalty.department.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.royalty.department":{
                templateUrl : "root/royalty/department/collect/_res/html/index.html",
                controller:'departmentCollectCtrl'
            }
        }
    })
});