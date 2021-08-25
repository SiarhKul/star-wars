import { shallow } from "enzyme";
import React from "react";
import { Card } from "../card/Card";
import { Cards } from "./Cards";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => ({
			push: jest.fn(),
		})),
	};
});

describe("Test Cards component", () => {
	const cards = () => shallow(<Cards {...props} />);
	const props = {
		name: "name",
		path: "/planets",
		contenCards: [{ name: "Luke Skywalker" }],
		BodyComponent: jest.fn(),
	};
	let component;

	beforeEach(() => {
		component = cards();
	});

	it("should render component ", () => {
		expect(component).toMatchSnapshot();
	});

	it("Does 'Test' have component Cards", () => {
		expect(component.find(Card)).toHaveLength(1);
	});
});
