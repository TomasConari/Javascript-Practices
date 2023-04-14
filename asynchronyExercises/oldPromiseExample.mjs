import {people} from "./data.mjs";
const people = []
const getPeople = () => {
    return new Promise((resolve,reject) => {
        if(people.length <= 0){
            reject(new Error("People array is empty"));
        }else{
            setTimeout(() => resolve(people), 3000);
        };
    });
};
getPeople()
    .then((answer) => console.log(answer))
    .catch((error) => console.log(error.message));