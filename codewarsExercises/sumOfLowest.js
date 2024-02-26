/* 
https://www.codewars.com/kata/558fc85d8fd1938afb000014

Sum of two lowest positive integers:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
const sumTwoSmallestNumbers = (numbers) => {
    numbers.sort((num1, num2) => num1 - num2);
    for(let i = 0; i < numbers.length; i += 1){
        if((numbers[i] >= 0) && (numbers[i] % 1 === 0)){
            return numbers[i] + numbers[i + 1];
        };
    };
};

const numbersArray = [10, 5, 3, 20, 6, 0.5, -1];
console.log(sumTwoSmallestNumbers(numbersArray));