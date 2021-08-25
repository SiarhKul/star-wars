import React from "react";
import { Home } from "./Home";

describe("<Home/>", () => {
	const component = shallow(<Home />);

	it("render snapshot <Home/> ", () => {
		expect(component).toMatchSnapshot();
	});

	it("should <Home/> render", () => {
		expect(component).toHaveLength(1);
	});

	it("should <Home/> has image", () => {
		// const r = component.find("img");
		// console.log(r.debug());

		expect(component.find("img")).toHaveLength(1);
	});
});
