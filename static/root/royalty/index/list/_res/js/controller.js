var app = angular.module('indexList', ['ng-pagination','toastr']);
app.controller('indexListCtrl',function($scope,indexSer,toastr,$stateParams,$state,$location) {
    $scope.a1=function(){
        $scope.visible = true;
    }
    $scope.$emit('changeId', null);
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){
        $scope.delShow = false;
        $state.go('root.royalty.index.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){
        var data = {
            id:$stateParams.id
        };
        indexSer.IndexDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.abili.itemsCount-count)%10){
                    $state.go('root.royalty.index.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.royalty.index.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.materLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        $scope.$emit('page',$location.search().page);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.materLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };


    function activatePage(page) {
        var listData = {
            page:page||1
        };
        indexSer.listIndex(listData).then(function(response){
            if(response.data.code==0) {
                $scope.materLists = response.data;
                if ($stateParams.id) {
                    if ($stateParams.id.indexOf('&')) {
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.materLists.data, function (obj) {
                        if (obj.id == $stateParams.id.split('&')[0]) {
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    indexSer.countIndex().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
            /*$scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;*/
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
});
app.filter('cos', function(){
    return function (val) {
        var result;
        switch(val) {
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }
});

app.filter('statusCover',function(){
    return function(val){
        var result;
        switch(val){
            case "BUY":
                result = "购买入库";
                break;
            case "LEND":
                result = "外借入库";
                break;
            case "TRANSFER":
                result = "调动入库";
                break;
        }
        return result;
    }

});
app.filter('Cover',function(){
    return function(val){
        var result;
        switch(val){
            case "INTACT":
                result = "完好";
                break;
            case "MANUAL_DAMAGE":
                result = "人为损坏";
                break;
            case "NATURAL_DAMAGE":
                result = "自然损坏";
                break;
            case "REPAIRING":
                result = "维修中";
                break;
            case "SCRAP":
                result = "已报废";
                break;
        }
        return result;
    }

});

app.filter('Use',function(){
    return function(val){
        var result;
        switch(val){
            case "RECEIVE":
                result = "领用";
                break;
            case "CHECKOUT":
                result = "外借";
                break;
            case "TRANSFER":
                result = "调动";
                break;
            case "INSTOCK":
                result = "在库";
                break;
        }
        return result;
    }

});