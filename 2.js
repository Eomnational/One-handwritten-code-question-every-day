 function throttle(func,delay){
    let lasttime=0;
    return function(...args){
        const nowtime=Date.now();
        if(nowtime-lasttime>=delay){
            func.apply(this,args);
            lasttime=nowtime;
        }
    }
 }