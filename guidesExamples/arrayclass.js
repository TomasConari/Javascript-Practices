const numbers = [50,220,10,1,203];
const stringsHello = ["Hi","How","Are","You"];
const booleans = [true,false,false,true];
const personsArray = [person1 = ["Tomás","Contreras","Arizabaleta"],person2 = ["Matheo","Luque","Orozco"],person3 = ["Andres","Triviño","Escobar"],]
const personsInfo = [
    {personO1 : "Camilo" , personO2 : "Sebastian",
    ageO1 : 23 , ageO2 : 19,
    favGameO1 : "Lol" , favGameO2 : "Pokemon"}
]

let i = 0;
do {
    i += 26;
    numbers.push(i);
} while (i < 200);


console.log(numbers.sort());
console.log(stringsHello.join(' '));
console.log(booleans.pop())
console.log(personsArray.reverse());
console.log(personsInfo.includes("Juan"))

