import { expectSaga } from "redux-saga-test-plan";
import { getResources } from "../../API/getResources";
import { watchLoadDataFilms, workerGetFilms } from "./getFilms";
import { call, put, take, select } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import rootReducer from "../reducers";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";
import {
	iS_DATA_LOADED_FROM_SERVER,
	SET_FILMS_TO_STORE,
} from "../actions/actions";
import * as matchers from "redux-saga-test-plan/matchers";
import { URL_GET_FILMS } from "../../API/urls";
import { fetchReducer } from "../reducers/fetch";

describe("Test getFilms saga", () => {
	const initialFetchState = {
		dataFromServer: {
			people: [],
			planets: [],
			starships: [],
			films: [],
			vehicles: [],
			species: [],
		},
		loading: {
			isLoadedPeople: false,
			isLoadedPlanets: false,
			isLoadedStarships: false,
			isLoadedVehicles: false,
			isLoadedSpecies: false,
			isDataLoadedFromServer: true,
		},
		router: {
			location: {
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "cnc51l",
				query: {},
			},
			action: "POP",
		},
	};

	const mockedResponse = {
		count: 6,
		next: null,
		previous: null,
		results: [
			{
				title: "A New Hope",
				episode_id: 4,
				opening_crawl:
					"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
				director: "George Lucas",
				producer: "Gary Kurtz, Rick McCallum",
				release_date: "1977-05-25",
				characters: [
					"https://swapi.dev/api/people/1/",
					"https://swapi.dev/api/people/2/",
					"https://swapi.dev/api/people/3/",
					"https://swapi.dev/api/people/4/",
					"https://swapi.dev/api/people/5/",
					"https://swapi.dev/api/people/6/",
					"https://swapi.dev/api/people/7/",
					"https://swapi.dev/api/people/8/",
					"https://swapi.dev/api/people/9/",
					"https://swapi.dev/api/people/10/",
					"https://swapi.dev/api/people/12/",
					"https://swapi.dev/api/people/13/",
					"https://swapi.dev/api/people/14/",
					"https://swapi.dev/api/people/15/",
					"https://swapi.dev/api/people/16/",
					"https://swapi.dev/api/people/18/",
					"https://swapi.dev/api/people/19/",
					"https://swapi.dev/api/people/81/",
				],
				planets: [
					"https://swapi.dev/api/planets/1/",
					"https://swapi.dev/api/planets/2/",
					"https://swapi.dev/api/planets/3/",
				],
				starships: [
					"https://swapi.dev/api/starships/2/",
					"https://swapi.dev/api/starships/3/",
					"https://swapi.dev/api/starships/5/",
					"https://swapi.dev/api/starships/9/",
					"https://swapi.dev/api/starships/10/",
					"https://swapi.dev/api/starships/11/",
					"https://swapi.dev/api/starships/12/",
					"https://swapi.dev/api/starships/13/",
				],
				vehicles: [
					"https://swapi.dev/api/vehicles/4/",
					"https://swapi.dev/api/vehicles/6/",
					"https://swapi.dev/api/vehicles/7/",
					"https://swapi.dev/api/vehicles/8/",
				],
				species: [
					"https://swapi.dev/api/species/1/",
					"https://swapi.dev/api/species/2/",
					"https://swapi.dev/api/species/3/",
					"https://swapi.dev/api/species/4/",
					"https://swapi.dev/api/species/5/",
				],
				created: "2014-12-10T14:23:31.880000Z",
				edited: "2014-12-20T19:49:45.256000Z",
				url: "https://swapi.dev/api/films/1/",
			},
		],
	};

	const mockedBrowserLocation = {
		location: {
			pathname: "/films",
			search: "",
			hash: "",
			state: null,
			key: "-----chvpu6",
		},
		action: "POP",
	};
	// ------------------------
	it("should saga change reducer", async () => {
		return expectSaga(workerGetFilms)
			.provide([call(getResources), mockedResponse.results])
			.withReducer(fetchReducer)
			.put({ type: SET_FILMS_TO_STORE, payload: mockedResponse.results })
			.run();
		// .then(res => res)
	});
});
