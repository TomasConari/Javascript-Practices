function removeSmallest(arr) {
    if (arr.length === 0){
      return [];
    };
    let min = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i += 0){
      if (arr[i] < min){
        min = arr[i];
        minIndex = i;
      };
    };
    return arr.slice(0, minIndex).concat(arr.slice(minIndex + 1));
};