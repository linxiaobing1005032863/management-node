var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.royalty.setting", {
        url : "/setting",
        views : {
            "content@root.royalty" : {
                templateUrl : "root/royalty/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.royalty" : {
                templateUrl : "root/royalty/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.royalty.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.royalty.setting":{
                templateUrl : "root/royalty/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.royalty.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.royalty.setting":{
                templateUrl : "root/royalty/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});