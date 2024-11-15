//Set
function test1(arr){
    arr=Array.from(new Set(arr));
    return arr;
}

//includes
function test2(arr){
    let arr1=[];
    arr.forEach((item) => {
        if(!arr1.includes(item) ){
            arr1.push(item);
        }
        
    });

    return arr1;
}    

//Map
function test3(arr){
    let arr1=[];
    let map=new Map();
    arr.forEach((item)=>{
        if(!map.has(item)){
            map.set(item,true);
            arr1.push(item);
        }
    });
    return arr1;
}

