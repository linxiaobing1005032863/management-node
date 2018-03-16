var app = angular.module('manageList', ['ng-pagination','toastr','angularjs-dropdown-multiselect']);
app.controller('manageListCtrl',function($scope,manageSer,toastr,$state,$location,$stateParams){
    $scope.aaa=[{unmetAllocationJobs:null,unmetAllocation:null}];
    $scope.bbb=[{unmetAllocationDepartment:null,unmetAllocation:null}];
    $scope.ccc=[{unmetAllocationJobs:null,unmetAllocation:null}];

    $scope.collect=function(){
        var vm=$scope;
        vm.num={
            projectName:vm.projectName
        };
        manageSer.listManage(vm.num).then(function(response){
            if(response.data.code==0){
                $scope.allLists= response.data.data;
            }
        })
    }
    //获取项目名称
    manageSer.anageplanNum().then(function (response) {
        if (response.data.code == '0') {
            $scope.numList = response.data.data;
        } else {
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

