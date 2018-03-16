var app = angular.module('jobsbetAdd', ['toastr']);
app.controller('jobsbetAddCtrl', function ($scope, jobsbetSer, $state, toastr) {
//获取体系
    jobsbetSer.JobsbetplanId().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeSty = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取地区
    jobsbetSer.patAare().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeAare = response.data.data;
        }
        else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取部门
    jobsbetSer.patJobsbet().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeGroup = response.data.data;
        }
        else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取指标名称
    jobsbetSer.surveyplanName().then(function (response) {
        if (response.data.code == '0') {
            $scope.nameList = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    //获取指标编号
    jobsbetSer.surveyplanNum().then(function (response) {
        if (response.data.code == '0') {
            $scope.numList = response.data.data;
        } else {
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取岗位
    jobsbetSer.patJobs().then(function (response) {
        if (response.data.code == '0') {
            $scope.typeJobs = response.data.data;
        }
        else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    $scope.honor = [{jobsBetCTOS: [{jobsBetETOS: [{jobsBetFTOS: [{jobsBetGTOS:[{}]}]}]}]}];
    $scope.add = function () {
        var obj = {jobsBetCTOS: [{jobsBetETOS: [{jobsBetFTOS:[{}]}]}]};
        $scope.honor.push(obj);
    }
    $scope.del = function (flag) {
        $scope.honor.splice(flag, 1);
    }
    $scope.opdd = function (index) {
        var obj = {jobsBetETOS: [{jobsBetFTOS: [{jobsBetGTOS:[{}]}]}]};
        $scope.honor[index].jobsBetCTOS.push(obj);
    }
    $scope.opel = function (index, flag) {
        $scope.honor[index].jobsBetCTOS.splice(flag, 1);
    }
    $scope.dad = function (outerIndex, index) {
        var obj = {jobsBetFTOS: [{jobsBetGTOS:[{}]}]};

        $scope.honor[outerIndex].jobsBetCTOS[index].jobsBetETOS.push(obj);
    }
    $scope.ded = function (outerIndex, index, flag) {
        $scope.honor[outerIndex].jobsBetCTOS[index].jobsBetETOS.splice(flag, 1);
    }
    $scope.aisp = function (outerIndex, twoIndex, index) {
        var obj = {jobsBetGTOS: [{}]};
        $scope.honor[outerIndex].jobsBetCTOS[twoIndex].jobsBetETOS[index].jobsBetFTOS.push(obj);
    }
    $scope.disp = function (outerIndex, twoIndex, index, flag) {
        $scope.honor[outerIndex].jobsBetCTOS[twoIndex].jobsBetETOS[index].jobsBetFTOS.splice(flag, 1);
    }
    $scope.aispl= function (outerIndex,threeIndex, twoIndex, index) {
        var obj = {};
        $scope.honor[outerIndex].jobsBetCTOS[threeIndex].jobsBetETOS[twoIndex].jobsBetFTOS[index].jobsBetGTOS.push(obj);
    }
    $scope.displ = function (outerIndex,threeIndex, twoIndex, index, flag) {
        $scope.honor[outerIndex].jobsBetCTOS[threeIndex].jobsBetETOS[twoIndex].jobsBetFTOS[index].jobsBetGTOS.splice(flag, 1);
    }
    $scope.jobsbet=false;
    $scope.more=function(){
        $scope.jobsbet=!$scope.jobsbet
    }
    $scope.cancel=function(){
        $state.go('root.royalty.jobsbet.list[12]');
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
            jobsBetBTOS: angular.copy($scope.honor)
        }
        var addData = converFormData(data);
        jobsbetSer.addJobsbet(addData).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.royalty.jobsbet.list[12]');
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
                                                            for (var name5 in wItem) {
                                                                var val5 = wItem[name5]
                                                                if (val5 instanceof Array) {
                                                                    val5.forEach(function (fItem, fIndex) {
                                                                        objToFormData(fItem, obj, name + '[' + index + '].' + name2 + '[' + dIndex + '].' + name3+'['+sIndex+'].'+ name4+'['+wIndex+'].'+name5, fIndex);
                                                        })
                                                      } else {
                                                                    if ((typeof val5) != 'function') {
                                                                        obj[name + '[' + index + '].' + name2 + '[' + dIndex + '].' + name3+'['+sIndex+'].'+name4+'['+wIndex+'].'+name5] = val5;
                                                                    }
                                                                }

                                                            }

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




