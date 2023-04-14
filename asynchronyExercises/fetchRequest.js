const getCharacters = async () => {
    try{
        const rawData = await fetch('https://swapi.dev/api/people/');
        const peopleDataObject = await rawData.json();
        const peopleDataArray = await peopleDataObject.results;
        const selectedProperties = await peopleDataArray.map((person) => {
        return{
            name: person.name,
            height: person.height,
            mass: person.mass,
            gender: person.gender
        };
        });
        const tallestPeopleArray = await selectedProperties.filter((property) => property.height > 175);
        console.log(tallestPeopleArray);
    }catch{
        console.log("There was an Error getting characters data, please try again later")
    };
};
getCharacters();
const getFilms = async () => {
    try{
        const rawData = await fetch("https://swapi.dev/api/films/");
        const filmsObject = await rawData.json();
        const filmsInfo = await filmsObject.results;
        const filmsNames = await filmsInfo.map((film) => { 
        return{
            filmId: film.episode_id,
            filmTitle: film.title
        };
        });
        const organizedFilms = await filmsNames.sort((filmA, filmB) => filmA.filmId - filmB.filmId);
        console.log(organizedFilms);
    }catch{
        console.log("There was an Error getting films data, please try again later")
    };
};
getFilms()