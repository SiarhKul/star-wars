import React from "react";
import { Planets } from "./Planets";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("Test <Planets/>", () => {
	let store;
	let component;

	const planets = () =>
		mount(
			<Provider store={store}>
				<Planets />
			</Provider>
		);

	const getMockInitialStore = showButton => {
		const mockInitialStore = {
			dataFromServer: {
				planets: [],
			},
			loading: {
				isLoadedPlanets: showButton,
			},
			router: {
				location: {
					pathname: "/planets",
				},
			},
		};
		return mockInitialStore;
	};

	beforeEach(() => {
		store = mockStore(getMockInitialStore(true));
		component = planets();
	});

	it("render snapshot <Planets/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should render alert message in <People/>", () => {
		expect(component.find("ToastContainer")).toHaveLength(1);
	});

	it("should render <People/>", () => {
		expect(component.find("Cards")).toHaveLength(1);
	});

	it("should render ButtonLoadMore in <People/> if  all data has been loaded", () => {
		expect(component.find("ButtonLoadMore").exists()).toBe(false);
	});
	it("should render ButtonLoadMore in <People/> if  all data has not been loaded", () => {
		store = mockStore(getMockInitialStore(false));
		component = planets();
		expect(component.find("ButtonLoadMore").exists()).toBe(true);
	});
});
