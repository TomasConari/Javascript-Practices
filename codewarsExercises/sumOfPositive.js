/* 
https://www.codewars.com/kata/5715eaedb436cf5606000381

Sum of positive:

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
const positiveSum = (arr) => {
    if(arr.length > 0){
        let sum = 0;
        for(let i = 0; i < arr.length; i += 1){
            if(arr[i] > 0){
                sum += arr[i];
            };
        };
        return sum;
    }else{
        return 0;
    };
};

const numsArray = [20,30,15,35,-20,-30,-15,-35];
console.log(positiveSum(numsArray));