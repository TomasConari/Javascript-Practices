for (let i = 0; i <= 5; i++) { /*Created "i" and assigned 0 to it, 
    the For will loop while "i" is less or equal to 5*/
    console.log(i);
}

let countNumber = 0;//created "countNumber" and assigned 0 to it

while (countNumber < 5) { //The While will loop while countNumber is less tan 5
  console.log(countNumber);
  countNumber++;//will add 1 to "countNumber's" value
}

let doWhileNumber = 0;//created "doWhileNumber" and assigned 0 to it

do {
  //here goes the code to be executed before checking the condition
  console.log(doWhileNumber);
  doWhileNumber++;//will add 1 to "doWhileNumber's" value
} while (doWhileNumber < 5);
