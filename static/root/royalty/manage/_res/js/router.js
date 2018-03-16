var app = angular.module('manage', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.royalty.manage", {
        url : "/manage",
        views : {
            "content@root.royalty" : {
                templateUrl : "root/royalty/manage/_res/html/index.html",
                controller:"manageCtrl"
            },"menu@root.royalty" : {
                templateUrl : "root/royalty/manage/_res/html/menu.html",
                controller:"manageMenuCtrl"
            }
        }
    }).state("root.royalty.manage.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.royalty.manage":{
                templateUrl : "root/royalty/manage/list/_res/html/index.html",
                controller:'manageListCtrl'
            }
        }
    })
});