function divCon(x){
    let sum = 0;
    for(let i = 0; i < x.length; i += 1){
        if(typeof(x[i]) === "number"){
            sum += x[i];
        };
    };
    let count = 0;
    for(let i = 0; i < x.length; i += 1){
        if(typeof(x[i]) === "number"){
            count += 1;
        };
    };
    sum -= count;
    return sum;
};