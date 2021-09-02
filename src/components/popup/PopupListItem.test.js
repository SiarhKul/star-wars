import React from "react";
import { mount } from "enzyme";
import { PopupListItem } from "./PopupListItem";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";
import * as request from "../../API/getSpecificResours";

jest.mock("../../API/getSpecificResours");

describe("Test <PopupListItem/>", () => {
	const mockedResponse = [{ name: "Tatooine" }];
	const popupListItem = mockedProps =>
		mount(
			<Router>
				<PopupListItem {...mockedProps} />
			</Router>
		);
	const mockedProps = {
		urls: ["https://swapi.dev/api/planets/1/"],
		name: "name",
		path: "people",
	};
	request.getSpecificResoursAll = jest.fn().mockResolvedValue(mockedResponse);

	it("render snapshot <PopupListItem/> ", async () => {
		let component;

		await act(async () => {
			component = popupListItem(mockedProps);
		});
		component.update();

		expect(component).toMatchSnapshot();
		expect(component.find("Link").exists()).toBeTruthy();
	});

	it("should  <PopupListItem/> have 'N/A' if url have not been passed ", async () => {
		let component;
		const mockedProps = {
			urls: [],
			name: "name",
			path: "people",
		};

		await act(async () => {
			component = popupListItem(mockedProps);
		});
		
		component.update();

		expect(component.find("span").text("N/A")).toBeTruthy();
	});

	it("should  <PopupListItem/> have <Spinner/> if url have not been passed ", async () => {
		let component = popupListItem(mockedProps);

		await act(async () => {
			component = popupListItem(mockedProps);
		});

		expect(component.find(Spinner)).toBeTruthy();
	});
});
