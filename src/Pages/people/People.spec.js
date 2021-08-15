import React from "react";
import { People } from "./People";

it("should render People component", () => {
	const component = shallow(<People />);
	const wrapper = component.find(".main-people");
	expect(wrapper.length).toBe(1);
});
