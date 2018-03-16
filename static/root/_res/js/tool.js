Array.prototype.reUndefined = function(){
    var arr = this;

    if(arr instanceof Array){

        for(var i = 0;i<arr.length;i++){

            if(arr[i]==''){

                arr.splice(i,1);

            }

        }

    }

};
