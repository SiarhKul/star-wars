export const selectPeopleStore = state => state.dataFromServer.people;
export const selectFilmsStore = state => state.dataFromServer.films;
export const selectPlanetsStore = state => state.dataFromServer.planets;

export const selectIsLoaded = state => state.loading;

export const selectBrowserLocation = state => state.router.location;
