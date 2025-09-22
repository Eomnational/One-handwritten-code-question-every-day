function deepClone(obj,map=new WeakMap()){
     if(typeof obj!=='object'||typeof obj==null){
        return obj;
     }

     if(map.has(obj)){
        return map.get(obj);
     }

     let cloneobj=Array.isArray() ? []:{};
     map.set(obj,cloneobj);

     for(let key in obj){
        if(obj.hasOwnProperty(key)){
            cloneobj[key]=deepClone(obj[key],map);
        }
     }

     return cloneobj;
}


let a={ val:100};
a.target=a;

let newA=deepClone(a);
console.log(newA);