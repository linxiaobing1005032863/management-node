var app = angular.module('jobsbetEdit', ['toastr']);
app.controller('jobsbetEditCtrl', function ($scope, jobsbetSer,$stateParams,$state,toastr) {
    var basicData ={id: $stateParams.id};
    //根据id 获取数据
    jobsbetSer.findJobsbetId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.add = response.data.data;
            $scope.honor=$scope.add.jobsBetBBOS
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
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

    $scope.honor = [{jobsBetCBOS: [{jobsBetDBOS: [{jobsBetEBOS: [{jobsBetFBOS:[{}]}]}]}]}];
    $scope.add = function () {
        var obj = {jobsBetCBOS: [{jobsBetDBOS: [{jobsBetEBOS:[{}]}]}]};
        $scope.honor.push(obj);
    }
    $scope.del = function (flag) {
        $scope.honor.splice(flag, 1);
    }
    $scope.opdd = function (index) {
        var obj = {jobsBetDBOS: [{jobsBetEBOS: [{jobsBetFBOS:[{}]}]}]};
        $scope.honor[index].jobsBetCBOS.push(obj);
    }
    $scope.opel = function (index, flag) {
        $scope.honor[index].jobsBetCBOS.splice(flag, 1);
    }
    $scope.dad = function (outerIndex, index) {
        var obj = {jobsBetEBOS: [{jobsBetFBOS:[{}]}]};

        $scope.honor[outerIndex].jobsBetCBOS[index].jobsBetDBOS.push(obj);
    }
    $scope.ded = function (outerIndex, index, flag) {
        $scope.honor[outerIndex].jobsBetCBOS[index].jobsBetDBOS.splice(flag, 1);
    }
    $scope.aisp = function (outerIndex, twoIndex, index) {
        var obj = {jobsBetGTOS: [{}]};
        $scope.honor[outerIndex].jobsBetCBOS[twoIndex].jobsBetDBOS[index].jobsBetEBOS.push(obj);
    }
    $scope.disp = function (outerIndex, twoIndex, index, flag) {
        $scope.honor[outerIndex].jobsBetCBOS[twoIndex].jobsBetDBOS[index].jobsBetEBOS.splice(flag, 1);
    }
    $scope.aispl= function (outerIndex,threeIndex, twoIndex, index) {
        var obj = {};
        $scope.honor[outerIndex].jobsBetCBOS[threeIndex].jobsBetDBOS[twoIndex].jobsBetEBOS[index].jobsBetFBOS.push(obj);
    }
    $scope.displ = function (outerIndex,threeIndex, twoIndex, index, flag) {
        $scope.honor[outerIndex].jobsBetCBOS[threeIndex].jobsBetDBOS[twoIndex].jobsBetEBOS[index].jobsBetFBOS.splice(flag, 1);
    }

    $scope.jobsbet=false;
    $scope.more=function(){
        $scope.jobsbet=!$scope.jobsbet
    }
    /*取消*/
    $scope.cancel = function(){
        $state.go('root.royalty.jobsbet.list[12]',{id:null,name:null});
    };

    //添加
    $scope.jobsbetEditFun = function () {
        var data = {
            id:$stateParams.id,
            betTime : angular.element('.betTime').val(),
            area: $scope.add.area,
            projectGroup: $scope.add.projectGroup,
            projectName:$scope.add.projectName,
            scoreProfit:$scope.add.scoreProfit,
            planProfit:$scope.add.planProfit,
            practiceProfit:$scope.add.practiceProfit,
            jobsBetBTOS: angular.copy($scope.honor)
        }
        jobsbetData(data.jobsBetBTOS)
        var addData = converFormData(data);

        jobsbetSer.editJobsbet(addData).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.royalty.jobsbet.list[12]');
                toastr.success("已成功编辑", '温馨提示');
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
});

function jobsbetData(si) {
    for(var i in si){
        si[i].jobsBetCTOS=si[i].jobsBetCBOS;
        si[i].jobsBetCBOS=null;
        for(var j in si[i].jobsBetCTOS){
            si[i].jobsBetCTOS[j].jobsBetETOS=si[i].jobsBetCTOS[j].jobsBetDBOS
            si[i].jobsBetCTOS[j].jobsBetDBOS=null;
            for(var k in si[i].jobsBetCTOS[j].jobsBetETOS){
                si[i].jobsBetCTOS[j].jobsBetETOS[k].jobsBetFTOS=si[i].jobsBetCTOS[j].jobsBetETOS[k].jobsBetEBOS;
                si[i].jobsBetCTOS[j].jobsBetETOS[k].jobsBetEBOS=null;
                for(var e in si[i].jobsBetCTOS[j].jobsBetETOS[k].jobsBetFTOS){
                    si[i].jobsBetCTOS[j].jobsBetETOS[k].jobsBetFTOS[e].jobsBetGTOS=si[i].jobsBetCTOS[j].jobsBetETOS[k].jobsBetFTOS[e].jobsBetFBOS;
                    si[i].jobsBetCTOS[j].jobsBetETOS[k].jobsBetFTOS[e].jobsBetFBOS=null;
                }
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


