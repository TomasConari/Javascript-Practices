const people = [  ['John', 25, 'Developer'],['Jane', 30, 'Designer'],['Mark', 35, 'Manager'],['Lisa', 40, 'Executive']];
const names = [];
for (let i = 0; i < people.length; i += 1){
  names.push(people[i][0]);
};
console.log(names);