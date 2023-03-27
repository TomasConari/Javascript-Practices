function fakeBin(x){
    let numbersArray = x.split("").map(Number);
    const changedNumbers = [];
    for(let i = 0; i < numbersArray.length; i += 1){
        if(numbersArray[i] < 5){
            changedNumbers.push(0);
        }else{
            changedNumbers.push(1);
        };
    };
    return changedNumbers.join("")
};
console.log(fakeBin("11115555"));