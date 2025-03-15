function debounce(fn){
    let timer=null;
    return function(){
        if(timer) clearTimeout(timer);
        timer=setTimeout(() => {
            fn.call(this,arguments);
            timer=null;
        }, 1000);
    }
}


function test(fn,interval){
    let lasttime=0;
    return function(){
        let nowtime=Date.now()
        if(nowtime-lasttime>=interval){
            lasttime=nowtime;
            fn.apply(this,arguments)
        }
    }
}