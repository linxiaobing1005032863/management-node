var app = angular.module('index', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.royalty.index", {
        url : "/index",
        views : {
            "content@root.royalty" : {
                templateUrl : "root/royalty/index/_res/html/index.html",
                controller:"indexCtrl"
            },"menu@root.royalty" : {
                templateUrl : "root/royalty/index/_res/html/menu.html",
                controller:"indexMenuCtrl"
            }
        }
    }).state("root.royalty.index.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.royalty.index":{
                templateUrl : "root/royalty/index/list/_res/html/index.html",
                controller:'indexListCtrl'
            }
        }
    }).state("root.royalty.index.add[12]",{
            url:"/add[12]",
            views:{
                "content@root.royalty.index":{
                    templateUrl : "root/royalty/index/add/_res/html/index.html",
                    controller:'indexAddCtrl'
                }
            }
        }).state("root.royalty.index.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.royalty.index":{
                templateUrl : "root/royalty/index/edit/_res/html/index.html",
                controller:'indexEditCtrl'
            }
        }
    })
});