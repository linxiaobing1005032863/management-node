var app = angular.module('royalty', [{
    files: ['root/royalty/_res/js/service.js']
}]);
app.controller('royaltyCtrl', function ($scope,$state) {
    if ($state.current.url == '/royalty') {//默认加载列表
         $state.go('root.royalty.index');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
    $scope.$on('page',function(event,msg){
        $scope.$broadcast('pageId',msg)
    });
    $scope.$on('fourId', function (event, msg) {
        $scope.$broadcast('loveId', msg)
    });

}).controller('navCtrl',function($scope,$state,$location,royaltySer){
    $scope.navCla='index';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'index';
    $scope.navClass = function(name){
        $scope.navCla = name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    };
    /*物资入库*/
    $scope.visible = false;
    $scope.visible1 = false;
    $scope.storage = false;
    $scope.material = function () {
        $scope.storage = !$scope.storage;
    }
    $scope.toggle = function () {
        if($scope.visible1 = true){
            $scope.visible1=false;
        }
        $scope.visible = !$scope.visible;
    }
    $scope.toggle1 = function () {
        if($scope.visible = true){
            $scope.visible=false;
        }
        $scope.visible1 = !$scope.visible1;
    }

    /*档案库*/
    $scope.archive = true;
    $scope.archives = function () {
        $scope.archive = !$scope.archive;
    }

    /*知此知彼*/
    $scope.know= true;
    $scope.knows = function () {
        $scope.know = !$scope.know;
    }
    /*公告通知*/
    $scope.notice= false;
    $scope.notices = function () {
        $scope.notice = !$scope.notice;
    }
    /*管理提成*/
    $scope.roy = true;
    $scope.roy1 = false;
    $scope.alty = false;
    $scope.dividend = function () {
        $scope.alty = !$scope.alty;
    }
    $scope.royalty = function () {
        if($scope.roy1 = true){
            $scope.roy1=false;
        }
        $scope.roy = !$scope.roy;
    }
    $scope.royalty1 = function () {
        if($scope.roy = true){
            $scope.roy=false;
        }
        $scope.roy1 = !$scope.roy1;
    }



  // 前面下拉导航权限
    royaltySer.navPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    // 设置导航权限
    royaltySer.navPermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    $scope.showsList2 = [
        {id:"1",item:"管理提成",menuList:[
            {name1:'指标库',msg:'indexlibrary'},
            {name2:'体系间对赌表',msg:'systembet'},
            {name3:'部门间对赌表',msg:'departmentbet'},
            {name4:'岗位间对赌表',msg:'jobsbet'},
            {name5:'对赌指标总呈现',msg:'managecommission'},
            {name6:'管理提成管理汇总',msg:'royaltycollect'}
        ],showIs:false}
    ];
    $scope.showsList3 = [
        {id:"1",item:"设置",menuList:[{name6:'设置',msg:'setting'}],showIs:false},
    ];


    if(active){
        for(var i = 0; i < $scope.showsList.length; i++) {
            var n = $scope.showsList[i].menuList;
            for (var j = 0; j < n.length; j++) {
                var m = n[j].msg;
                if (m == active) {
                    $scope.showsList[i].showIs = true;
                    break;
                }
            }
        }
    }
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };

});


app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();
                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-head').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});





