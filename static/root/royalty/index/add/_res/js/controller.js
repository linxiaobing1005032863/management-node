var app = angular.module('indexAdd', ['toastr']);
app.controller('indexAddCtrl', function($scope, indexSer,$state,toastr){
    /*取消*/
    $scope.cancel = function(){
        $state.go('root.royalty.index.list[12]',{id:null,name:null});
    };
    //添加
    $scope.addIndexFun = function(){
        var vm = $scope;
        indexSer.addIndex(vm.IndexAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.royalty.index.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



