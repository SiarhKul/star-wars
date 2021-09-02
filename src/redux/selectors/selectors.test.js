import {
	selectBrowserLocation,
	selectFilmsStore,
	selectIsLoaded,
	selectPeopleStore,
	selectPlanetsStore,
	selectSpeciesStore,
	selectStarshipsStore,
} from "./selectors";

describe("Test redux selectors", () => {
	const store = {
		dataFromServer: {
			people: [],
			planets: [],
			starships: [],
			films: [],
			vehicles: [],
			species: [],
		},
		loading: {},
		router: {
			location: {},
		},
	};

	it("should selectPeopleStore return people from store", () => {
		const people = selectPeopleStore(store);
		expect(people).toEqual([]);
	});

	it("should selectFilmsStore return people from store", () => {
		const films = selectFilmsStore(store);
		expect(films).toEqual([]);
	});

	it("should selectPlantetStore return people from store", () => {
		const planets = selectPlanetsStore(store);
		expect(planets).toEqual([]);
	});

	it("should selectSpeciesStore return people from store", () => {
		const spaciest = selectSpeciesStore(store);
		expect(spaciest).toEqual([]);
	});

	it("should selectStarshipsStore return people from store", () => {
		const starships = selectStarshipsStore(store);
		expect(starships).toEqual([]);
	});

	it("should selectStarshipsStore return people from store", () => {
		const isLoaded = selectIsLoaded(store);
		expect(isLoaded).toEqual({});
	});

	it("should selectBrowserLocation return people from store", () => {
		const location = selectBrowserLocation(store);
		expect(location).toEqual({});
	});
});
