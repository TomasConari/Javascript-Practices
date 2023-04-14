const numbers = [50,220,10,1,203];

let i = 0;
do {
    i += 26;
    numbers.push(i);
} while (i < 200);

console.log(numbers);

while (numbers.length <= 15){
    numbers.push(500);
};

console.log(numbers);

for(let x = 0; x <= 5; x += 1 ){
    numbers.unshift(x);
};

console.log(numbers);