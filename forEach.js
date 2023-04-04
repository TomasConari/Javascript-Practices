const nums = [1,2,3,4,5];
const sumList = [];
nums.forEach((num, i) => {
  if(i !== nums.length - 1) {
    sumList.push(num + nums[i + 1]);
  };
});
console.log(sumArray);