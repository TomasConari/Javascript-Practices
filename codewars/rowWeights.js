function rowWeights(array) {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (i % 2 === 0) {
        team1 += array[i];
      }else{
        team2 += array[i];
      };
    };
    return [team1, team2];
};
const people = [5,5,10,10];
console.log(rowWeights(people));