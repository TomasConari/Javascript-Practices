/*
In one institution, a programming program was opened, in which only 25
places were approved. It is required to make a software where the students
who register are stored.
You need to request the name, the age and save it in a list to show which are
of legal age and which are not. You also need to know and how many of each.
*/
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