/* 
https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Reversed Strings:

Complete the solution so that it reverses the string passed into it.
*/
const solution = (str) => {
    const long = str.length;
    if (long > 1){
        let reversedString = "";
        for (let i = long -1; i >= 0; i -= 1){
            reversedString += str[i]
        };
        return reversedString;
    }else if(long === 0){
        return "";
    }else{
        return str;
    };
};
console.log(solution("Tomas"));