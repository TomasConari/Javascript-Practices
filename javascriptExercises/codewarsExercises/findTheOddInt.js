/* 
https://www.codewars.com/kata/54da5a58ea159efa38000836

Find the odd int:

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
const findOdd = (arr) => {
    let count = 0;
    let result;
    for (let i = 0; i < arr.length; i += 1){
        for (let j = 0; j < arr.length; j += 1){
            if (arr[i] === arr[j]){
            count += 1;
            };
        };
        if (count % 2 !== 0){
            result = arr[i];
            return result;
        }; 
    };
};
console.log(findOdd([1, 1, 1, 1, 1, 2, 1, 4, 4, 2, 5, 5, 6, 6, 8, 2]));
