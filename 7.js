//flat
function test1(arr){
    
    return arr.flat(Infinity);
}    


//递归
function test2(arr){
    let arr1=[];
    arr.forEach( (item)=> {
        if(item instanceof Array){
            arr1=arr1.concat(test2(item));

        }
        else{
            arr1.push(item);
        }
    });
    return arr1;
}

//reduce
function test3(arr){

   return arr.reduce((prev,val)=>{
    return prev.concat(Array.isArray(val)?test3(val):val);
   },[]); 
}

//...
function test4(arr){
    let arr1=[];
    let flag=true;
    arr.forEach((item)=>{
        if(Array.isArray(item)){
                arr1.push(...item);
                flag=false;
        }else{
            arr1.push(item);
        }
    });
    if(flag){
        return arr1;
    }
    return test4(arr1);

}