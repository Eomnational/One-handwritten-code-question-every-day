nums=[1,2,3];

function test(nums){

   let flag=0,max=0
  for(let i=0;i<nums.length;i++){
    if(nums[i]>=max){
        max=nums[i];
        flag=i;
    }
  }
  return console.log([max,flag]);

}

test([1,2,3,43,6,5,34,76,534]);