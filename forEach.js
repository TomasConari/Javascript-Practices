const nums = [1,2,3,4,5];
const sumList = [];
nums.forEach((num, index) => {
  if(index !== nums.length - 1) {
    sumList.push(num + nums[index + 1]);
  }
});
console.log(sumArray);