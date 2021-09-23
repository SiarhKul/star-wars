export const selectPeopleStore = state => state.dataFromServer.people;
export const selectFilmsStore = state => state.dataFromServer.films;
export const selectPlanetsStore = state => state.dataFromServer.planets;
export const selectSpeciesStore = state => state.dataFromServer.species;
export const selectStarshipsStore = state => state.dataFromServer.starships;

export const selectIsLoaded = state => state.loading;

export const selectBrowserLocation = state => state.router.location;
