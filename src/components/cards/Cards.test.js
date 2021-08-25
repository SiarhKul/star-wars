import { shallow } from "enzyme";
import React from "react";
import { Cards } from "./Cards";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => ({
			push: jest.fn(),
		})),
	};
});

describe("Test Cards component", () => {
	const props = {
		name: "name",
		path: "/planets",
		uniqueName: "namePerson",
		contenCards: [{}],
		BodyComponent: jest.fn(),
	};
	const cards = () => shallow(<Cards {...props} />);
	let component;

	beforeEach(() => {
		component = cards();
	});

	it("should render component ", () => {
		expect(component).toMatchSnapshot();
	});

	it("Does 'Test' have component Cards", () => {
		console.log(component.debug());
		expect(component.find("Card")).toHaveLength(1);
	});
});
