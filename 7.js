function test1(arr){
    arr=Array.from(new Set(arr));
    return arr;
}

function test2(arr){
    let res=[];
    arr.forEach((i) => {
        if(!res.includes(i)){
            res.push(i);
        }
    });

    return res;
}


function test3(arr){
    let res=[]
    let map=new Map();
    arr.forEach((i)=>{
        if(!map.has(i)){
            map.set(i,true);
            res.push(i);
        }
    })

    return res;
}

let arr=[1,2,3,4,4,5,5,6];

console.log(test3(arr));