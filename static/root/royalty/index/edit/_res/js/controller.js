var app = angular.module('indexEdit', ['toastr']);
app.controller('indexEditCtrl', function($scope,indexSer,$stateParams,$state,toastr){
    var indexEdit ={id: $stateParams.id};

    //获取ID
    indexSer.findIndexId(indexEdit).then(function(response){
        if(response.data.code==0){
            $scope.indexEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    /*取消*/
    $scope.cancel = function(){
        $state.go('root.royalty.index.list[12]',{id:null,name:null});
    };
    //编辑点击提交
    $scope.indexEditFun = function(){
        var vm = $scope;

        indexSer.editIndex(vm.indexEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.royalty.index.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});