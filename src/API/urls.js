// const swapiAPI = `https://swapi.dev/api/`;
// const swapiAPI = `http://localhost:5000/api`;
const swapiAPI =`http://3.122.40.64:4000/api`
const URL_GET_PEOPLE = `${swapiAPI}/people/`;
const URL_GET_PLANETS = `${swapiAPI}/planets`;
const URL_GET_STARSHIPS = `${swapiAPI}/starships/`;
const URL_GET_FILMS = `${swapiAPI}/films`;
const URL_GET_VEHICLE = `${swapiAPI}/vehicles`;
const URL_GET_SPECIES = `${swapiAPI}/species`;

const URL_GET_MORE_PEOPLE = `${swapiAPI}/people/?page`;
const URL_GET_MORE_PLANETS = `${swapiAPI}/planets/?page`;
const URL_GET_MORE_STARHIPS = `${swapiAPI}/starships/?page`;
const URL_GET_MORE_VEHICLE = `${swapiAPI}/vehicles/?page`;
const URL_GET_MORE_SPECIES = `${swapiAPI}/species/?page`;

export {
	URL_GET_PLANETS,
	URL_GET_PEOPLE,
	URL_GET_SPECIES,
	URL_GET_VEHICLE,
	URL_GET_FILMS,
	URL_GET_STARSHIPS,
	URL_GET_MORE_STARHIPS,
	URL_GET_MORE_PLANETS,
	URL_GET_MORE_SPECIES,
	URL_GET_MORE_PEOPLE,
	URL_GET_MORE_VEHICLE,
};
