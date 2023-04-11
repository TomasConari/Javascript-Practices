function getCount(str) {
    let vowelCount = 0;
    for(let i = 0; i < str.length; i += 1){
        if(((str[i] === "a") || (str[i] === "e")) || ((str[i] === "i") || (str[i] === "o")) || (str[i] === "u")){
            vowelCount += 1;
        };
    };
    return vowelCount;
};
console.log(getCount("iouzyx"));