//given an array with different data types, fill a new one with the Int data type only.
const items = [1,"d",2,3,"a",true,"c",4,true,true,false,"b"];
const intArray = items.filter((element) => typeof element === "number");
console.log(intArray);