function disemvowel(str) {
    let newStr = "";
    for(let i = 0; i < str.length; i += 1){
        if(!(((str[i] === "a") || (str[i] === "e")) || ((str[i] === "i") || (str[i] === "o")) || ((str[i] === "u") || (str[i] === "A")) || ((str[i] === "E") || (str[i] === "I")) || ((str[i] === "O") || (str[i] === "U")))){
            newStr += str[i];
        };
    };
    return newStr;
};

console.log(disemvowel("hi how are you"));