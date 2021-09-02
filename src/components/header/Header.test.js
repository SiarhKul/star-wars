import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

const header = () => shallow(<Header />);

describe("Test 'Header' component", () => {
	let component;

	beforeEach(() => {
		component = header();
	});

	it("should component render", () => {
		expect(component).toMatchSnapshot();
	});

	it("should component has 6 navlinks ", () => {
		const wrapper = component.find("NavLink");
		expect(wrapper).toHaveLength(7);
	});
});
