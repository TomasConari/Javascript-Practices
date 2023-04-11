function positiveSum(arr){
    if(arr.length > 0){
        let sum = 0;
        for(let i = 0; i < arr.length; i += 1){
            if(arr[i] > 0){
                sum += arr[i];
            };
        };
        return sum;
    }else{
        return 0;
    };
};
console.log(positiveSum([20,30,15,35,-20,-30,-15,-35]));