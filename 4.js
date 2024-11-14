function throttle(fn,interval){
        let lasttime=0;
    return function(){
        const now=Date.now();
        if(now-lasttime>=interval){
            lasttime=now();
            fn.apply(this,arguments);
        }
    };
}


