import React from "react";
import { shallow } from "enzyme";
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

describe("Test Films component", () => {
	const films = () => shallow(<Films />);
	let component;
	let spyOnUseSelector;

	beforeEach(() => {
		spyOnUseSelector = jest.spyOn(redux, "useSelector").mockReturnValue([{}]);
		component = films();
	});

	it("should render Loader component", () => {
		expect(component.find("Loader")).toHaveLength(1);
	});

	it("should render alert message", () => {
		expect(component.find("ToastContainer")).toHaveLength(1);
	});

	it("should render Cards component", () => {
		expect(component.find("Cards")).toHaveLength(1);
	});
});
