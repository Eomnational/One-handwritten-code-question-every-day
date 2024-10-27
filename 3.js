function debounce(fn){
    let timer=null;

    return function(){
        if(timer) clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.call(this,arguments);
            timer=null;
        },100);

    };
}