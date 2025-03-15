
var arr = [10, 20, 30, 40]
/*改变原数组  */
//push
res=arr.push(50);
console.log('push:arr',arr);
console.log('push:res',res);


//pop
res=arr.pop();
console.log('pop:arr',arr);
console.log('pop:res',res);

//reverse
res=arr.reverse();
console.log('reverse:arr',arr);
console.log('reverse:res',res);

//splice
res=arr.splice(0,1);
console.log('splice:arr',arr);
console.log('splice:res',res);

/*不改变原数组  */
//concat
var arr1 = [1, 2, 3];
var arr2 = ["a", "b", "c"];
var arr3 = ["A", "B", "C"];
var rel = arr1.concat(arr2, arr3);
console.log('concat:arr1',arr1);
console.log('concat:rel',rel);

//join
var list = ["a", "b", "c", "d"]; // "a-b-c-d"
var result = list.join("-");     //"a-b-c-d"
var result = list.join("/");     //"a/b/c/d"
var result = list.join("");      //"abcd"
var result = list.join();        //  a,b,c,d
console.log('join:list',list);
console.log('join:result',result);


var arr = [
    {name: '123', age: 9},
    {name: '张三', age: 18},
    {name: '李四', age: 20},
]
const names=arr.map((item)=>{
    return item.name;
})

console.log('names',names);

const newArr = arr.map((item)=>({...item,age:item.age+1}));
console.log('newArr',newArr);


//reduce
const nameToAge=arr.reduce((acc,cur)=>{
    acc[cur.name]=cur.age;
    return acc;
},{});
console.log('nameToAge',nameToAge);

//filter
const filterArr=arr.filter((item)=>item.age%2===0);
console.log('filterArr',filterArr);

const filterArr1=arr.filter((item)=>item.name.length>2);
console.log('filterArr1',filterArr1);


//foreach
arr.forEach(item => item.age += 1);
console.log(arr);

