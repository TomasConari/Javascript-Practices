function squareDigits(num){
    const numberString = num.toString()
    const numberArray = [];
    const operationArray = [];
    for(let i = 0; i < numberString.length; i += 1){
        numberArray.push(parseInt(numberString[i]));
        operationArray.push(numberArray[i]**2);
    };
    const doneOperation = parseInt(operationArray.join(""));
    return doneOperation;
};

console.log(squareDigits(999));