/* 
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

Even or Odd:

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
const evenOrOdd = (number) => {
    if(number % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    };
};
console.log(evenOrOdd(2));