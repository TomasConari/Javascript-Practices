function removeChar(str){
    if(str.length > 2){
        return str.slice(1,-1);
    }else{
        return "";
    };
};
console.log(removeChar("Hello"));
