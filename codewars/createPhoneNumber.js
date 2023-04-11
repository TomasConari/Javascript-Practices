function createPhoneNumber(numbers){
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