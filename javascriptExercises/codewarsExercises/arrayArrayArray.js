/* 
https://www.codewars.com/kata/57eb936de1051801d500008a

Array Array Array:

You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/
const explode = (x) => {
    if(typeof x[1] === 'number' && typeof x[0] === 'number'){
        const sum = x[0] + x[1];
        return Array.from({length:sum}).fill(x);
    };
    if(typeof x[0] === 'number'|| typeof x[1] === 'number'){
        let sum = 0;
        typeof x[0] === 'number'?sum = x[0]: sum = x[1];
    return Array.from({length:sum}).fill(x);
    };
    if(typeof x[1] !== 'number' && typeof x[0] !=='number'){
        return 'Void!';
    };
};
const numbers = ["a",5];
console.log(explode(numbers));