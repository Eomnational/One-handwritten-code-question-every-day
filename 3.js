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

// 测试函数
var a = () => {
    console.log("123");
};

// 使用防抖函数
const debouncedA = debounce(a);

// 测试防抖
debouncedA();
debouncedA();
debouncedA();