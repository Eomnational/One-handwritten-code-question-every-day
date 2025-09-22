function curry(fn){
    return function curried(...args){
        if(args.length>=fn.length){
            return fn.apply(this,args);
        }else{
            return function(...nextArgs){
                return curried.apply(this,args.concat(nextArgs));
            }
        }
    }
}



// 使用示例
function multiplyThree(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiplyThree);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24
