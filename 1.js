function debounce(func,delay){
    let timer=null;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer=setTimeout(()=>{
            func.apply(this,args);
        },delay);
    }
    
}


// 原始函数
function sayHello(name) {
  console.log(`Hello, ${name}！`);
}

// 防抖处理，延迟 1000ms
const debouncedSayHello = debounce(sayHello, 1000);

// 快速多次调用
debouncedSayHello('Alice'); // 不会立即执行
debouncedSayHello('Bob');   // 会重置计时
debouncedSayHello('Tom');   // 会重置计时

// 只有等你停止调用 1 秒后，才会输出：Hello, Tom！