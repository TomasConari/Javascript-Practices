/* 
https://www.codewars.com/kata/525f50e3b73515a6db000b83

Create Phone Number:

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/
const createPhoneNumber = (numbers) => {
    const numberStr = numbers.join("");
    if((numberStr.length <= 10) && (numberStr.length > 0)){
        let cellphoneNumber = "(";
        for(let i = 0; i <= 2; i += 1){
            cellphoneNumber += numberStr[i];
        };
        cellphoneNumber += ") "
        for(let i = 3; i <= 9; i += 1){
            cellphoneNumber += numberStr[i];
            if(i === 5){
                cellphoneNumber += "-"
            };
        };
        return cellphoneNumber;
    };
};
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))