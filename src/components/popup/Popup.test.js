import { shallow } from "enzyme";
import React from "react";
import { Popup } from "./Popup";

jest.mock("react-router", () => ({
	...jest.requireActual("react-router"),
	useParams: jest.fn().mockReturnValue({ id: 1 }),
}));

describe("Test <Popup/>", () => {
	const mockedProps = { FragmentPopup: jest.fn() };
	const component = shallow(<Popup {...mockedProps} />);

	it("render snapshot <Popup/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should hide <Popup/>  on click if event is no undefended ", () => {
		const e = { target: { dataset: { popup: "popup" } } };
		const isPopupVisibleOutSideClickMemo = component.prop("onClick");
		const mockFn = jest.fn(isPopupVisibleOutSideClickMemo);
		expect(mockFn.mock.calls.length).toBe(0);
		mockFn(e);
		expect(mockFn.mock.calls.length).toBe(1);
	});

	it("should hide <Popup/>  on click if event is undefended ", () => {
		const e = { target: { dataset: { popup: "" } } };
		const isPopupVisibleOutSideClickMemo = component.prop("onClick");
		const mockFn = jest.fn(isPopupVisibleOutSideClickMemo);
		expect(mockFn.mock.calls.length).toBe(0);
		mockFn(e);
		expect(mockFn.mock.calls.length).toBe(1);
	});

	it("should hide <Popup/> on click close button ", () => {
		const closeButton = component.find(".exit__btn");
		const returnToRootPath = closeButton.prop("onClick");
		const mockFn = jest.fn(returnToRootPath);
		expect(mockFn.mock.calls.length).toBe(0);
		mockFn();
		expect(mockFn.mock.calls.length).toBe(1);
	});
});
