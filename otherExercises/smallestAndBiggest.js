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
    if (arr.length <= 0){
        return [];
    } else if (arr.length === 1){
        return arr;
    } else {
        let smallestNum = arr[0];
        let biggestNum = arr[0];
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i] > biggestNum){
                biggestNum = arr[i];
            };
            if (arr[i] < smallestNum){
                smallestNum = arr[i];
            };
        };
        return [smallestNum, biggestNum];
    };
};
console.log(minMax([5, 3, 6, 1, 8, 4, 2, 7, 9, 0]));