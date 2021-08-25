import React from "react";
import { Films } from "./Films.jsx";
import * as redux from "react-redux";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => ({
			location: {
				pathname: "/films",
			},
		})),
	};
});

describe("Test <Films/>", () => {
	const films = () => shallow(<Films />);
	let component;
	let spyOnUseSelector;

	beforeEach(() => {
		spyOnUseSelector = jest.spyOn(redux, "useSelector").mockReturnValue([{}]);
		component = films();
	});

	it("render snapshot <Films/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should render <Films/>", () => {
		expect(component.find("Loader")).toHaveLength(1);
	});

	it("should render alert message in <Films/>", () => {
		expect(component.find("ToastContainer")).toHaveLength(1);
	});

	it("should render Cards component in <Films/>", () => {
		expect(component.find("Cards")).toHaveLength(1);
	});
});
