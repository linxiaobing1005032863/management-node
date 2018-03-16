
var app = angular.module('systemEdit', ['toastr']);
app.controller('systemEditCtrl', function($scope,systemSer,$stateParams,$state,toastr){
var basicData ={id: $stateParams.id};
//获取ID
$scope.honor = [{systemBetCBOS: [{systemBetDBOS: [{}]}]}];
$scope.addad = function () {
    var obj = {systemBetCBOS: [{systemBetDBOS: [{}]}]};
    $scope.honor.push(obj);
}
$scope.del = function (flag) {
    $scope.honor.splice(flag, 1);
}
$scope.opdd = function (index) {
    var obj = {systemBetDBOS: [{}]};
    $scope.honor[index].systemBetCBOS.push(obj);
}
$scope.opel = function (index, flag) {
    $scope.honor[index].systemBetCBOS.splice(flag, 1);
}
$scope.dad = function (outerIndex, index) {
    var obj = {};
    $scope.honor[outerIndex].systemBetCBOS[index].systemBetDBOS.push(obj);
}
$scope.ded = function (outerIndex, index, flag) {
    $scope.honor[outerIndex].systemBetCBOS[index].systemBetDBOS.splice(flag, 1);
}
    systemSer.findSystemId(basicData).then(function(response){
    if(response.data.code=='0'){
        $scope.add = response.data.data;
        $scope.honor=$scope.add.systemBetBBOS
    }else{
        toastr.error( response.data.msg, '温馨提示');
    }
});
    systemSer.surveyplanId().then(function (response) {
    if (response.data.code == '0') {
        $scope.typeSty = response.data.data;
    } else {
        toastr.error(response.data.msg, '温馨提示');
    }
});
//获取体系
    systemSer.surveyplanId().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeSty = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取地区
    systemSer.patAare().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeAare = response.data.data;
        }
        else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取部门
    systemSer.patDartment().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeGroup = response.data.data;
        }
        else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取指标名称
    systemSer.surveyplanName().then(function (response) {
        if (response.data.code == '0') {
            $scope.nameList = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    //获取指标编号
    systemSer.surveyplanNum().then(function (response) {
        if (response.data.code == '0') {
            $scope.numList = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.system = false;
    $scope.more=function(){
        $scope.system =!$scope.system
    }
    $scope.cancel=function(){
        $state.go('root.royalty.system.list[12]');
    }


//编辑点击提交
$scope.basicInfoEditFun = function(){
    var data = {
        id:$stateParams.id,
        projectName: $scope.add.projectName,
        score: $scope.add.score,
        betTime : angular.element('.betTime').val(),
        area: $scope.add.area,
        projectGroup: $scope.add.projectGroup,
        scoreProfit:$scope.add.scoreProfit,
        planProfit:$scope.add.planProfit,
        practiceProfit:$scope.add.practiceProfit,
        systemBetBTOS: angular.copy($scope.honor)
    }
    forbetDate(data.systemBetBTOS)
    var addData = converFormData(data);
    systemSer.editSystem(addData).then(function(response){
        if(response.data.code == 0){
            $state.go('root.royalty.system.list[12]');
            toastr.success( "编辑成功", '温馨提示');
        }else {
            toastr.error(  response.data.msg , '温馨提示');
        }
    });
};
});
function forbetDate(si) {
    for(var i in si){
        si[i].systemBetCTOS=si[i].systemBetCBOS;
        si[i].systemBetCBOS=null;
        for(var j in si[i].systemBetCTOS){
            si[i].systemBetCTOS[j].systemBetETOS=si[i].systemBetCTOS[j].systemBetDBOS;
            si[i].systemBetCTOS[j].systemBetDBOS=null;
        }
    }
}
//数据类型转换工具
function converFormData() {
    var objToFormData = function (obj, obj2, sec, flag) {
        if (obj) {
            var count = 0;
            for (var name in obj) {
                var val = obj[name];
                if (val instanceof Array) {
                    val.forEach(function (item, index) {
                        for (var name2 in item) {
                            var val2 = item[name2];
                            if (val2 instanceof Array) {
                                val2.forEach(function (dItem, dIndex) {
                                    for (var name3 in dItem) {
                                        var val3 = dItem[name3];
                                        if (val3 instanceof Array) {
                                            val3.forEach(function (sItem, sIndex) {
                                                objToFormData(sItem, obj, name + '[' + index + '].' + name2 + '[' + dIndex + '].' + name3, sIndex);
                                            })
                                        }else {
                                            if((typeof val3) != 'function'){
                                                obj[name + '[' + index + '].' + name2+'['+dIndex+'].'+name3] = val3;
                                            }
                                        }
                                    }
                                });
                            } else {
                                if ((typeof val2) != 'function') {
                                    obj[name + '[' + index + '].' + name2] = val2;
                                }
                            }
                        }
                    });
                    delete obj[name];
                } else if (sec) {
                    if ((typeof val) != 'function') {
                        obj2[sec + '[' + flag + '].' + name] = val;
                        count++;
                    }
                } else if (typeof val == 'object') {
                    for (var key in val) {
                        obj[name + '.' + key] = val[key];
                    }
                    delete obj[name];
                }
            }
        }
    }
    var _obj = $.extend(true, {}, arguments[0]);
    objToFormData(_obj);
    return _obj;
}

