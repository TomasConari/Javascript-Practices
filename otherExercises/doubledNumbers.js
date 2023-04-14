//Having received an array of numbers, create a new array with the same numbers as the previous one multiplied by 2
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
  doubledNumbers.push(numbers[i] * 2);
};
console.log(doubledNumbers);