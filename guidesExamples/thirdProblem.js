const adultStudentsList = [];
const minorStudentsList = [];

for (i = 0; i < 25; i += 1){
    const name = "Tomás";//Introduced by user
    const age = 17;//Introduced by user
    if (age >= 18){
        adultStudentsList.push(name);
    }else{
        minorStudentsList.push(name);
    };
};
console.log("There are: " + adultStudentsList.length + " Adult Students:" + adultStudentsList);
console.log("There are: " + minorStudentsList.length + " Minor Students: " + minorStudentsList);