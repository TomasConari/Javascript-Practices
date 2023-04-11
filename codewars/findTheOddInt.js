function findOdd(arr){
    let count = 0;
    let result;
    for (let i = 0; i < arr.length; i += 1){
        for (let j = 0; j < arr.length; j += 1){
            if (arr[i] === arr[j]){
            count += 1;
            };
        };
        if (count % 2 !== 0){
            result = arr[i];
            return result;
        }; 
    };
};
console.log(findOdd([1,1,1,1,1,2,1,4,4,5,5,6,6,8]))
