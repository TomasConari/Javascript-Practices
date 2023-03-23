let nums = [1, 2, 3, 4, 5];
let sumArray = [];
for (let i = 0; i < nums.length - 1; i++) {
  let sum = nums[i] + nums[i+1];
  sumArray.push(sum);
};
console.log(sumArray);