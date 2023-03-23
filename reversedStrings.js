function solution(str){
    const long = str.length;
    if (long > 1){
        let reversedString = "";
        for (let i = long -1; i >= 0; i -= 1){
            reversedString += str[i]
        };
        return reversedString;
    }else if(long === 0){
        return "";
    }else{
        return str;
    };
};
console.log(solution("Tomas"));