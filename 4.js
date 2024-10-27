function throttle(fn,interval){
        let lasttime=0;
    return function(...args){
        const now=Date.now;
        if(now-lasttime>=interval){
            lasttime=now;
            fn.apply(this,args);
        }
    };
}