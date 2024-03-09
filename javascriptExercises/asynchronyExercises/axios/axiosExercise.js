//In this exercise I fetched the information on the starwars planets from the Swapi 
//website using Axios instead of Fetch.
//And after that I displayed the planets info in differents filters
const axios = require('axios');
const getPlanets = async () =>{
    try{
        const planetsData = await axios.get("https://swapi.dev/api/planets/");
        const planetsResults = await planetsData.data.results;
        const planetsOriginalOrder = await planetsResults.map((planet) => { 
            return{
                Name: planet.name,
                Diameter: planet.diameter,
                Climate: planet.climate,
                Gravity: planet.gravity,
                Population: planet.population
            };
        });
        const planetsNamesOnly = await planetsResults.map((planet) => { 
            return{
                Name: planet.name,
            };
        });
        const planetsNameAndGravity = await planetsResults.map((planet) => { 
            return{
                Name: planet.name,
                Gravity: planet.gravity
            };
        });
        const planetsNameGravityAndPopulation = await planetsResults.map((planet) => { 
            return{
                Name: planet.name,
                Gravity: planet.gravity,
                Population: planet.population
            };
        });
        console.log("List of Planets: ", planetsNamesOnly.sort((planetA, planetB) => planetA.Name.localeCompare(planetB.Name)));
        console.log("List of Planets with their respective gravity: ", planetsNameAndGravity.sort((planetA, planetB) => planetA.Name.localeCompare(planetB.Name)));
        console.log("List of Planets with their respective gravity and population: ", planetsNameGravityAndPopulation.sort((planetA, planetB) => planetA.Name.localeCompare(planetB.Name)));
        console.log("Alphabetical orderer planets with all their caracteristics: ", planetsOriginalOrder.sort((planetA, planetB) => planetA.Name.localeCompare(planetB.Name)));
    }catch{
        console.log("There was an error fetching the data");
    };
};
getPlanets()