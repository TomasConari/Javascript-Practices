const findNoRepeat = (numbers) => { 
    let count = 0;
    let noRepeatNumber = 0;
    for(let i = 0; i < numbers.length; i += 1){
        count = 0;
        for(let j = 0; j < numbers.length; j += 1){
            if(numbers[i] === numbers[j]){
                count += 1;
            };
        };
        if(count === 1){
            noRepeatNumber = numbers[i];
        };
    };
    return noRepeatNumber;
};
console.log(findNoRepeat([1,1,1,2,3,3,3]))