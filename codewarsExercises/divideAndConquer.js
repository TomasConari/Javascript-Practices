/* 
https://www.codewars.com/kata/57eaec5608fed543d6000021

Divide and Conquer:

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/
const divCon = (x) => {
    let sum = 0;
    for(let i = 0; i < x.length; i += 1){
        if(typeof(x[i]) === "number"){
            sum += x[i];
        };
    };
    let count = 0;
    for(let i = 0; i < x.length; i += 1){
        if(typeof(x[i]) === "number"){
            count += 1;
        };
    };
    sum -= count;
    return sum;
};