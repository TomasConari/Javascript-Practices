const mispelled = function(word1, word2){
  if(word1.length < word2.length){
    let temp = word1;
    word1 = word2;
    word2 = temp;
  };
  let count = 0;
  for (let i = 0, j = 0; i < word1.length ; i += 1, j +=1){
    if(word1[i] !== word2[j]){
    count += 1;
    };
    if(word1.length>word2.length){
        i += 1;
    };
  };
  return count < 2;
};