const randomItems = ["Hi","How","Are","You",1,2,3,4,5];
const firstNumber = randomItems.find(items => typeof items === "number");
console.log(firstNumber);