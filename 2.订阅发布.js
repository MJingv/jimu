<!DOCTYPE html>
<html>
<head>
    <title>订阅发布js</title>
</head>
<body>
<script type="text/javascript">
    var event={
        cacheList:[],//缓存列表
        listen:function(key,fn){//订阅者消息添加到缓存列表
            if(!this.cacheList[key]){
                this.cacheList[key]=[];
            }
            this.cacheList[key].push(fn);

        },
        trigger:function () {//绑定
            var key=Array.prototype.shift.call(arguments);
            fns=this.cacheList[key];
            if(!fns||fns.length==0){
                return false;
            }
            for(var i=0,fn;fn=fns[i++];){
                fn.apply(this.arguments);
            }
        }
        remove:function(key,fn){//取消订阅
            fns=this.cacheList[key];
            if(!fns){//若没人订阅
                return ;
            }
            if (!fn) {//若没有传值
                fns&&(fns.length==0)
            }else {
                for(var l=fns.length-1;l>=0;l--){
                    var _fn=fns[l];
                    if (_fn===fn) {//删除订阅的回调函数
                        fns.splice(l,1);
                    }
                }
                
            }
        }
    };
    var installEvent=function(obj){//给所有对象增加订阅
        for(var i in event){
            obj[i]=event[i];
        }
    }
   
</script>
</body>
</html>