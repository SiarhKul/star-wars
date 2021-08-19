import React from "react";
import { shallow } from "enzyme";
import * as redux from "react-redux";
import { ButtonLoadMore } from "..";
import { GET_MORE_PEOPLE } from "../../redux/actions/actions";

describe("Test 'ButtonLoadMore' component", function () {
	let spyOnUseDispatch;
	let mockDispatch;

	const action = {
		type: GET_MORE_PEOPLE,
	};

	beforeEach(() => {
		// Mock useDispatch hook
		spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
		// Mock dispatch function returned from useDispatch
		mockDispatch = jest.fn();
		spyOnUseDispatch.mockReturnValue(mockDispatch);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it("should render 'ButtonLoadMore' ", () => {
		const component = shallow(<ButtonLoadMore />);
		expect(component).toMatchSnapshot();
	});

	it(" dog 'ButtonLoadMore' have a className '.btn-load-more'", () => {
		const component = shallow(<ButtonLoadMore />);
		const wrapper = component.find(".btn-load-more");
		expect(wrapper).toHaveLength(1);
	});

	it("should click on button", () => {
		const component = shallow(<ButtonLoadMore action={action} />);
		const btn = component.find(".btn-load-more");
		// console.log(btn.invoke("onClick")());
		btn.simulate("click");
		expect(mockDispatch.mock.calls.length).toBe(1);
	});
});
