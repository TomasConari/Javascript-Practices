function explode(x){
    if (typeof x[1] === 'number' && typeof x[0] === 'number'){
        const sum = x[0] + x[1];
        return Array.from({length:sum}).fill(x);
    };
    if (typeof x[0] === 'number'|| typeof x[1] === 'number'){
        let sum = 0;
        typeof x[0] === 'number'?sum = x[0]: sum = x[1];
    return Array.from({length:sum}).fill(x);
    };
    if (typeof x[1] !== 'number' && typeof x[0] !=='number'){
        return 'Void!';
    };
};
const numbers = ["a",5];
console.log(explode(numbers));