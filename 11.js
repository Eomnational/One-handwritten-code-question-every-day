function handleCase(str){
    return str.replace(/_([a-z])/g,(_,letter)=>letter.toUpperCase());
}
function handleKey(obj){
   if(Array.isArray(obj)){
    return obj.map(handleKey);
   }else if(obj!==null&&typeof obj==='object'){
    return Object.keys(obj).reduce((acc,key)=>{
        const newKey=handleCase(key);
        acc[newKey]=handleKey(obj[key]);
        return acc;
    },{})
   }
   return obj;
}


const jsonData = {
    "user_name": "John",
    "user_age": 30,
    "address_info": {
      "city_name": "New York",
      "zip_code": "10001"
    }
  };
  
  console.log(handleKey(jsonData));