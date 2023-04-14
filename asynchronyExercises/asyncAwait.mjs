//unsolved
import {people} from "./data.mjs";
const getPeopleData = (peopleList) => {
    setTimeout(() => {return peopleList},1000)
};
const getNames = ((eachPerson) => eachPerson.name);
const names = async (person) => {
    let promises = await .allpromises()
    const peopleNames = person.map(getNames);
    return peopleNames;
};
console.log(names(getPeopleData(people)));