//you need to find the index of the first word that has X letters
const x = 4;
const strings = ["Tomas","Matheo","Jhin","Camilo","Andres","Sebastian"];
const correctWord = strings.findIndex(str => str.length === x);
console.log("The word with " + x + " letters is " + strings[correctWord] + " in position " + correctWord);