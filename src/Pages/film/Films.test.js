import React from "react";
import { shallow } from "enzyme";
import { Films } from "./Films.jsx";
import { createBrowserHistory } from "history";

import * as redux from "react-redux";

jest.mock("history", () => {
	const hist = {
		location: {
			pathname: "/films",
		},
	};

	return {
		createBrowserHistory: jest.fn(() => hist),
	};
});

describe("Test Films component", () => {
	let spyOnUseSelector = jest.spyOn(redux, "useSelector");
	spyOnUseSelector.mockReturnValue([{}]);

	it("should render Loader component", () => {
		const component = shallow(<Films />);
		expect(component).toMatchSnapshot();
	});
});
