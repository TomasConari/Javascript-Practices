function removeDuplication(arr){
    return arr.filter(v=>arr.indexOf(v)!==arr.lastIndexOf(v));
};