var app = angular.module('royalty',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.royalty", {
        url: "/royalty",
        views: {
            "content@root": {
                templateUrl: "root/royalty/_res/html/index.html",
                controller: "royaltyCtrl"
            },"nav@root": {
                templateUrl: "root/royalty/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})