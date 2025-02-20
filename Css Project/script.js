var ans = (function(){
    var a =12;

    return{
        getter :function(){
            console.log(a);
        },
        setter:function(val){
            a = val;
        }
    }
})()