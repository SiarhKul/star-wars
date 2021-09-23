import React from "react";
import { Species } from "./Species";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();

describe("Test <Species/>", () => {
	let component;
	let store;

	const getMockInitialStore = showButton => {
		return {
			dataFromServer: {
				species: [],
			},
			loading: {
				isLoadedSpecies: showButton,
			},
			router: {
				location: {
					pathname: "/species",
				},
			},
		};
	};

	const species = () =>
		mount(
			<Provider store={store}>
				<Species />
			</Provider>
		);

	beforeEach(() => {
		store = mockStore(getMockInitialStore(true));
		component = species();
	});

	it("render snapshot <Species/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should render ButtonLoadMore in <People/> if  all data has been loaded", () => {
		expect(component.find("ButtonLoadMore").exists()).toBe(false);
	});

	it("should render ButtonLoadMore in <People/> if  all data has not been loaded", () => {
		store = mockStore(getMockInitialStore(false));
		component = species();
		expect(component.find("ButtonLoadMore").exists()).toBe(true);
	});

	it("should render alert message in <People/>", () => {
		expect(component.find("ToastContainer")).toHaveLength(1);
	});

	it("should render <People/>", () => {
		expect(component.find("Cards")).toHaveLength(1);
	});
});
