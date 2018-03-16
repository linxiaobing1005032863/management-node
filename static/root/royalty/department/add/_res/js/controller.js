var app = angular.module('departmentAdd', ['toastr']);
app.controller('departmentAddCtrl', function ($scope, departmentSer, $state, toastr) {
//获取体系
    departmentSer.DepartmentplanId().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeSty = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取地区
    departmentSer.patAare().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeAare = response.data.data;
        }
        else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取部门
    departmentSer.patDartment().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeGroup = response.data.data;
        }
        else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取指标名称
    departmentSer.surveyplanName().then(function (response) {
        if (response.data.code == '0') {
            $scope.nameList = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    //获取指标编号
    departmentSer.surveyplanNum().then(function (response) {
        if (response.data.code == '0') {
            $scope.numList = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.honor = [{departmentBetCTOS: [{departmentBetETOS: [{departmentBetFTOS: [{}]}]}]}];
    $scope.add = function () {
        var obj = {departmentBetCTOS: [{departmentBetETOS: [{}]}]};
        $scope.honor.push(obj);
    }
    $scope.del = function (flag) {
        $scope.honor.splice(flag, 1);
    }
    $scope.opdd = function (index) {
        var obj = {departmentBetETOS: [{departmentBetFTOS: [{}]}]};
        $scope.honor[index].jobsBetCTOS.push(obj);
    }
    $scope.opel = function (index, flag) {
        $scope.honor[index].departmentBetCTOS.splice(flag, 1);
    }
    $scope.dad = function (outerIndex, index) {
        var obj = {departmentBetFTOS: [{}]};

        $scope.honor[outerIndex].departmentBetCTOS[index].departmentBetETOS.push(obj);
    }
    $scope.ded = function (outerIndex, index, flag) {
        $scope.honor[outerIndex].departmentBetCTOS[index].departmentBetETOS.splice(flag, 1);
    }
    $scope.aisp = function (outerIndex, twoIndex, index) {
        var obj = {};
        $scope.honor[outerIndex].departmentBetCTOS[twoIndex].departmentBetETOS[index].departmentBetFTOS.push(obj);
    }
    $scope.disp = function (outerIndex, twoIndex, index, flag) {
        $scope.honor[outerIndex].departmentBetCTOS[twoIndex].departmentBetETOS[index].departmentBetFTOS.splice(flag, 1);
    }
    $scope.deportment=false;
    $scope.more=function(){
        $scope.deportment=!$scope.deportment
    }
    $scope.cancel=function(){
        $state.go('root.royalty.department.list[12]');
    }

    //添加
    $scope.departmentAddFun = function () {

        var data = {
            betTime : angular.element('.betTime').val(),
            area: $scope.area,
            projectGroup: $scope.projectGroup,
            projectName:$scope.projectName,
            scoreProfit:$scope.scoreProfit,
            planProfit:$scope.planProfit,
            practiceProfit:$scope.practiceProfit,
            departmentBetBTOS: angular.copy($scope.honor)
        }
        var addData = converFormData(data);

        departmentSer.addDepartment(addData).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.royalty.department.list[12]');
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
                                                for (var name4 in sItem) {
                                                    var val4 = sItem[name4]
                                                    if (val4 instanceof Array) {
                                                        val4.forEach(function (wItem, wIndex) {
                                                            objToFormData(wItem, obj, name + '[' + index + '].' + name2 + '[' + dIndex + '].' + name3+'['+sIndex+'].'+name4, wIndex);
                                                        })
                                                    } else {
                                                        if ((typeof val4) != 'function') {
                                                            obj[name + '[' + index + '].' + name2 + '[' + dIndex + '].' + name3+'['+sIndex+'].'+name4] = val4;
                                                        }
                                                    }

                                                }

                                            })
                                        } else {
                                            if ((typeof val3) != 'function') {
                                                obj[name + '[' + index + '].' + name2 + '[' + dIndex + '].' + name3] = val3;
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




