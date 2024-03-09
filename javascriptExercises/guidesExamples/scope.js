let firstNumber = 20;
let secondNumber= 50;
//globally defined firstNumber and secondNumber

console.log(firstNumber,secondNumber);//logs firstNumber and secondNumber before changes

const ifMoreThan = (numberOne,numberTwo) => {
  if (numberOne > numberTwo){
    const message = "Succesful";
    //creates the "message" variable
    console.log(message + " " + numberOne + " is more than " + numberTwo);
    firstNumber = 1;
  }else if(numberOne < numberTwo){
    const message = "Succesfully";
    console.log(message + " " + numberOne + " is less than " + numberTwo);
    firstNumber = 2;
  }else{
    const message = "Achieved result";
    console.log(message + " " + numberOne + " is equal than " + numberTwo);
    firstNumber = 3;
  }
};

ifMoreThan(firstNumber,secondNumber);
console.log(firstNumber,secondNumber);

const switchMoreThan = (num1,num2) => {
    switch(true){
        case((num1) && (num1 > num2)):
            const message1 = "Succesful";
            console.log(message1 + " " + num1 + " is more than " + num2);
            firstNumber = 6;
            secondNumber = 7;
            break;
        case((num1) && (num1 < num2)):
            const message2 = "Succesfully";
            console.log(message2 + " " + num1 + " is less than " + num2);
            firstNumber = 8;
            secondNumber = 9;
            break;
        default:
            const message3 = "Achieved";
            console.log(message3 + " " + num1 + " is equal than " + num2);
            firstNumber = 10;
            secondNumber = 11;
    }
};

switchMoreThan(firstNumber,secondNumber);
console.log(firstNumber,secondNumber);