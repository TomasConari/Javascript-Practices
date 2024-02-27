/*
Create a program that, given a list of numbers, determines the odd numbers,
removes them and adds an even number of your choice
*/
let numbers = [1,2,3,4,5,6,7,8,9,10];
const replacementNumber = 2;//Introduced by user
for(let i = 0; i < numbers.length; i += 1){
    if((numbers[i] % 2) !== 0){
        numbers.splice(i, 1, replacementNumber);
    }else{
        console.log(numbers[i] + " is an even number");
    };
};

console.log(numbers);