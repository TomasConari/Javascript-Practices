/* 
https://edabit.com/challenge/Q3n42rEWanZSTmsJm

Find the Smallest and Biggest Numbers:

Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
*/
const minMax = (arr) => {
    if(arr.length === 1){
        return [arr[0], arr[0]];
    }else{
        arr.sort((num1, num2) => num1 - num2);
        return [arr[0], arr[arr.length - 1]];
    };
};
console.log(minMax([5, 10, 8, 7, 14, 11, 3]));