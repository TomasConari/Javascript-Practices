const schools = [
    {   
       name: "Gimnasio Los Angeles",
       city: "Chía",
       state: "Cundinamarca",
       students : 300 
    },
    {
        name: "Colsubsidio Norte",
        city: "Bogotá",
        state: "Cundinamarca",
        students : 800
    },
    {
        name: "Santiago Alberione",
        city: "Bogotá",
        state: "Cundinamarca",
        students : 500 
    },
    {
        name: "Liceo Santisima Trinidad",
        city: "Chía",
        state: "Cundinamarca",
        students : 50 
    },
    {
        name: "Instituto Andinoamericano",
        city: "Arjona",
        state: "Bolivar",
        students : 60 
    }
];

const bigSchools = schools.filter(school => school.students >= 300);
console.log("Big schools based on user quantity: ", bigSchools);

const smallSchools = schools.filter(school => school.students < 300);
console.log("Small schools by student quantity: ", smallSchools);

const chiaSchools = schools.filter(school => school.city === "Chía");
console.log("Schools located in Chía: ", chiaSchools);

const bogotaSchools = schools.filter(school => school.city === "Bogotá");
console.log("Schools located in Bogotá: ", bogotaSchools);

const cundinamarcaSchools = schools.filter(school => school.state === "Cundinamarca");
console.log("Schools located in Cundinamarca: ", cundinamarcaSchools);