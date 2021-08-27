import React from "react";
import { Planets } from "./Planets";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

const mockStore = configureStore();

describe("Test <Planets/>", () => {
	let store;
	let component;

	beforeEach(() => {
		store = mockStore({
			dataFromServer: {
				planets: [],
			},
			loading: {
				isLoadedPlanets: true,
			},
			router: {
				location: {
					pathname: "/planets",
				},
			},
		});

		component = mount(
			<Provider store={store}>
				<Planets />
			</Provider>
		);
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
});
