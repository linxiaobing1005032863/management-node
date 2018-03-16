var app = angular.module('systemAdd', ['toastr']);
app.controller('systemAddCtrl', function ($scope, systemSer, $state, toastr) {
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

    $scope.honor = [{systemBetCTOS: [{systemBetETOS: [{}]}]}];
    $scope.add = function () {
        var obj = {systemBetCTOS: [{systemBetETOS: [{}]}]};
        $scope.honor.push(obj);
    }
    $scope.del = function (flag) {
        $scope.honor.splice(flag, 1);
    }
    $scope.opdd = function (index) {
        var obj = {systemBetETOS: [{}]};
        $scope.honor[index].systemBetCTOS.push(obj);
    }
    $scope.opel = function (index, flag) {
        $scope.honor[index].systemBetCTOS.splice(flag, 1);
    }
    $scope.dad = function (outerIndex, index) {
        var obj = {};
        $scope.honor[outerIndex].systemBetCTOS[index].systemBetETOS.push(obj);
    }
    $scope.ded = function (outerIndex, index, flag) {
        $scope.honor[outerIndex].systemBetCTOS[index].systemBetETOS.splice(flag, 1);
    }
    $scope.system = false;
    $scope.more=function(){
        $scope.system =!$scope.system
    }
    $scope.cancel=function(){
        $state.go('root.royalty.system.list[12]');
    }

    //添加
    $scope.SystemAddFun = function () {

        var data = {
            betTime : angular.element('.betTime').val(),
            area: $scope.area,
            projectGroup: $scope.projectGroup,
            projectName:$scope.projectName,
            scoreProfit:$scope.scoreProfit,
            planProfit:$scope.planProfit,
            practiceProfit:$scope.practiceProfit,
            systemBetBTOS: angular.copy($scope.honor)
        }
        var addData = converFormData(data);

        systemSer.addSystem(addData).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.royalty.system.list[12]');
                toastr.success("已成功添加", '温馨提示');
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});

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




