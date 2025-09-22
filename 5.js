function shallowCopy(obj){
    if(typeof obj !=='object'||typeof obj ==null){
        return obj;
    }

    let copyObj=Array.isArray()? [] : {};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            copyObj[key]=obj[key];
        }
    }

    return copyObj;

}


const original = {
  name: 'Tom',
  age: 20,
  address: { city: 'Beijing' },  // 嵌套对象（引用类型）
  hobbies: ['reading', 'coding'] // 嵌套数组（也是引用类型）
};

// 执行浅拷贝
const copied = shallowCopy(original);

// ✅ 测试1：修改第一层基本类型
copied.name = 'Jerry';
console.log('original.name:', original.name); // 'Tom'，原对象不变 ✅
console.log('copied.name:', copied.name);     // 'Jerry'，拷贝对象变了 ✅