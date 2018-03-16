var app = angular.module('departmentEdit', ['toastr']);
app.controller('departmentEditCtrl', function ($scope, departmentSer,$stateParams,$state,toastr) {
    var basicData ={id: $stateParams.id};
    //根据id 获取数据
    departmentSer.findDepartmentId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.add = response.data.data;
            $scope.honor=$scope.add.departmentBetBBOS
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
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

    $scope.honor = [{departmentBetCBOS: [{departmentBetDBOS: [{departmentBetEBOS: [{}]}]}]}];
    $scope.add = function () {
        var obj = {departmentBetCBOS: [{departmentBetDBOS: [{}]}]};
        $scope.honor.push(obj);
    }
    $scope.del = function (flag) {
        $scope.honor.splice(flag, 1);
    }
    $scope.opdd = function (index) {
        var obj = {departmentBetDBOS: [{departmentBetEBOS: [{}]}]};
        $scope.honor[index].jobsBetCTOS.push(obj);
    }
    $scope.opel = function (index, flag) {
        $scope.honor[index].departmentBetCBOS.splice(flag, 1);
    }
    $scope.dad = function (outerIndex, index) {
        var obj = {departmentBetEBOS: [{}]};

        $scope.honor[outerIndex].departmentBetCBOS[index].departmentBetDBOS.push(obj);
    }
    $scope.ded = function (outerIndex, index, flag) {
        $scope.honor[outerIndex].departmentBetCBOS[index].departmentBetDBOS.splice(flag, 1);
    }
    $scope.aisp = function (outerIndex, twoIndex, index) {
        var obj = {};
        $scope.honor[outerIndex].departmentBetCBOS[twoIndex].departmentBetDBOS[index].departmentBetEBOS.push(obj);
    }
    $scope.disp = function (outerIndex, twoIndex, index, flag) {
        $scope.honor[outerIndex].departmentBetCBOS[twoIndex].departmentBetDBOS[index].departmentBetEBOS.splice(flag, 1);
    }

    $scope.deportment=false;
    $scope.more=function(){
        $scope.deportment=!$scope.deportment
    }
    $scope.cancel=function(){
        $state.go('root.royalty.department.list[12]');
    }


    //添加
    $scope.departmentEditFun = function () {
        var data = {
            id:$stateParams.id,
            betTime : angular.element('.betTime').val(),
            area: $scope.add.area,
            projectGroup: $scope.add.projectGroup,
            projectName:$scope.add.projectName,
            scoreProfit:$scope.add.scoreProfit,
            planProfit:$scope.add.planProfit,
            practiceProfit:$scope.add.practiceProfit,
            departmentBetBTOS: angular.copy($scope.honor)
        }
        departmentData(data.departmentBetBTOS)
        var addData = converFormData(data);

        departmentSer.editDepartment(addData).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.royalty.department.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});

function departmentData(si) {
    for(var i in si){
        si[i].departmentBetCTOS=si[i].departmentBetCBOS;
        si[i].departmentBetCBOS=null;
        for(var j in si[i].departmentBetCTOS){
            si[i].departmentBetCTOS[j].departmentBetETOS=si[i].departmentBetCTOS[j].departmentBetDBOS
            si[i].departmentBetCTOS[j].departmentBetDBOS=null;
            for(var k in si[i].departmentBetCTOS[j].departmentBetETOS){
                si[i].departmentBetCTOS[j].departmentBetETOS[k].departmentBetFTOS=si[i].departmentBetCTOS[j].departmentBetETOS[k].departmentBetEBOS;
                si[i].departmentBetCTOS[j].departmentBetETOS[k].departmentBetEBOS=null;
            }
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


