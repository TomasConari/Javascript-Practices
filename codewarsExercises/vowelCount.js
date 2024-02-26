/* 
https://www.codewars.com/kata/54ff3102c1bad923760001f3

Vowel Count:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
const vowels = ["a", "e", "i", "o", "u"];

const getCount = (str) => {
    let vowelCount = 0;
    for(let i = 0; i < str.length; i += 1){
        if(vowels.includes(str[i])){
            vowelCount += 1;
        };
    };
    return vowelCount;
};
console.log(getCount("iouzyxaerf"));