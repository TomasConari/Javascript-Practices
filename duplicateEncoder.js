function duplicateEncode(word){
    if(word.length <= 0){
        return "";
    }else{
        let count = 0;
        let encryptedWord = "";
        for(let i = 0; i < word.length; i += 1){
            count = 0;
            for(y = 0; y < word.length; y += 1){
                if(word[i] === word[y]){
                    count += 1;
                };
            };
            if(count === 1){
                encryptedWord += "(";
            }else{
                encryptedWord += ")";
            };
        };
        return encryptedWord;
    };
};
console.log(duplicateEncode("program"));