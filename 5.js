function curry(fn) {
    const arity = fn.length; 
  
       function curried(...args){
        if(args.length>=arity){
            return fn.apply(this,args);
        }
        return function(...newargs){
            return curried.apply(this,args.concat(newargs));
        }
       }
       return curried;
  }
  

function add(a, b, c) {
    return a + b + c;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1)(2)(3)); // 输出 6
  console.log(curriedAdd(1, 2)(3)); // 输出 6
  console.log(curriedAdd(1)(2, 3)); // 输出 6
  