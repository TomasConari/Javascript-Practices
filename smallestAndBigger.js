function minMax(arr) {
    if (arr.length <= 0){
        return [];
    } else if (arr.length === 1){
        return arr;
    } else {
        let smallestNum = arr[0];
        let biggestNum = arr[0];
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i] > biggestNum){
                biggestNum = arr[i];
            };
            if (arr[i] < smallestNum){
                smallestNum = arr[i];
            };
        };
        return [smallestNum, biggestNum];
    };
};
console.log(minMax([5, 3, 6, 1, 8, 4, 2, 7, 9, 0]));