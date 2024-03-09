/*for (let outer = 0; outer < 2; outer += 1 ){
    for (let inner = 0; inner < 3; inner += 1){
        console.log(outer + " " + inner);
    };
};

const arr1 = [[1,2,3,4],[5,6,7,8]];
const arr2 = arr1[0];
const arr3 = arr1[1];

console.log(item1,item2);

for (let i = 0; i < arr1.length; i += 1 ){
    for (let y = 0; y < arr2.length ; y += 1){
        console.log(outer + " " + inner);
    };
};
*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Please enter some text: ', (userInput) => {
    console.log(`You entered: ${userInput}`);
    readline.close();
  });