//filter the even and odd numbers of numbers's array and add them into their respective array (even or odd)
const numbers = [1,2,3,4,5,6,7,8,9,0];
const oddNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
const evenNumbers = numbers.filter((number) => {
    return number % 2 !== 0;
});
console.log(oddNumbers,evenNumbers);