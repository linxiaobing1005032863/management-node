var app = angular.module('system', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.royalty.system", {
        url : "/system",
        views : {
            "content@root.royalty" : {
                templateUrl : "root/royalty/system/_res/html/index.html",
                controller:"systemCtrl"
            },"menu@root.royalty" : {
                templateUrl : "root/royalty/system/_res/html/menu.html",
                controller:"systemMenuCtrl"
            }
        }
    }).state("root.royalty.system.list[12]",{
        url:"/list[12]?id=&name=&page=&num=",
        views:{
            "content@root.royalty.system":{
                templateUrl : "root/royalty/system/list/_res/html/index.html",
                controller:'systemListCtrl'
            }
        }
    }).state("root.royalty.system.add[12]",{
            url:"/add[12]",
            views:{
                "content@root.royalty.system":{
                    templateUrl : "root/royalty/system/add/_res/html/index.html",
                    controller:'systemAddCtrl'
                }
            }
        }).state("root.royalty.system.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.royalty.system":{
                templateUrl : "root/royalty/system/edit/_res/html/index.html",
                controller:'systemEditCtrl'
            }
        }
    }).state("root.royalty.system.collect[12]",{
        url:"/collect[12]",
        views:{
            "content@root.royalty.system":{
                templateUrl : "root/royalty/system/collect/_res/html/index.html",
                controller:'systemcollectCtrl'
            }
        }
    })
});