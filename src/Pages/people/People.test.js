import React from "react";
import { People } from "./People";
import {
	selectIsLoaded,
	selectPeopleStore,
} from "../../redux/selectors/selectors";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => ({
			location: {
				pathname: "/people",
			},
		})),
	};
});

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useSelector: jest.fn(store => store()),
}));

jest.mock("../../redux/selectors/selectors");

describe("<People/>", () => {
	const people = () => shallow(<People />);
	let component;

	beforeEach(() => {
		selectPeopleStore.mockReturnValue([{}]);
		selectIsLoaded.mockReturnValue({ isLoadedPeople: true });
		//вызывает все реализации друг за другом
		// jest
		// 	.spyOn(redux, "useSelector")
		// 	.mockImplementation(() => ({
		// 		isLoadedPeople: true,
		// 	}))
		// 	.mockImplementation(() => [{}]);

		component = people();
	});

	it("render snapshot <People/> ", () => {
		expect(component).toMatchSnapshot();
	});

	it("should render <People/>", () => {
		expect(component.find("Loader")).toHaveLength(1);
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
		selectIsLoaded.mockReturnValue({ isLoadedPeople: false });
		component = people();
		expect(component.find("ButtonLoadMore").exists()).toBe(true);
	});
});
