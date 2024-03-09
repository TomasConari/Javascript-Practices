/* a zoo needs to know which animals to remove from exhibits due to their age, 
each animal has a status that is true and an age, if the animal is over 15 years old, 
change the status of the animal to false.*/

const animalsArray = [
    {
        animal: "lion",
        status: true,
        age: 10
    },
    {
        animal: "zebra",
        status: true,
        age: 16
    },
    {
        animal: "tiger",
        status: true,
        age: 4
    },
    {
        animal: "parrot",
        status: true,
        age: 22
    },
    {
        animal: "bear",
        status: true,
        age: 15
    }
];

const exhibitRemove = (animals) => {
    animals.map((animal) => {
        if(animal.age > 15){
            animal.status = false;
            return animal;
        }else{
            return animal;
        };
    })
    return animals;
};
console.log(exhibitRemove(animalsArray));