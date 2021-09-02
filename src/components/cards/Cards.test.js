import { shallow } from "enzyme";
import React from "react";
import { Card } from "../card/Card";
import { Cards } from "./Cards";

describe("Test <Cards/>", () => {
	const mockedProps = {
		name: "name",
		path: "/planets",
		contenCards: [{ name: "Luke Skywalker" }],
		BodyComponent: jest.fn(),
	};
	const component = shallow(<Cards {...mockedProps} />);

	it("render snapshot<Cards/> ", () => {
		expect(component).toMatchSnapshot();
	});

	it("Does <Cards/> have component Cards", () => {
		expect(component.find(Card)).toHaveLength(1);
	});

	it("Does function setUniqueQueryParam invoke", () => {
		const card = { name: "Sand Crawler" };
		const component = shallow(<Cards {...mockedProps} />);
		const onUniqueQueryParam = component.find(Card).prop("onUniqueQueryParam");
		const mockFn = jest.fn(onUniqueQueryParam);

		expect(mockFn.mock.calls.length).toBe(0);

		mockFn(card);

		expect(mockFn.mock.calls.length).toBe(1);
	});
});
