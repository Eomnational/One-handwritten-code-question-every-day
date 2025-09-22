function test1(arr){
    return arr.flat(Infinity);
}

let arr=[1,[2,3],[4,[5,6]]];


function test2(arr){
    let res=[];
    arr.forEach((i) => {
        if(i instanceof Array){
            res=res.concat(test2(i));
        }else{
            res.push(i);
        }
    });

    return res;
}


console.log(test2(arr));