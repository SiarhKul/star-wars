import { handlerError } from "../utils";

export const getMoreResources = async (url, page) => {
	try {
		const request = await fetch(`${url}=${page}`);
		const data = await request.json();
		return data;
	} catch (error) {
		handlerError(error.message);
	}
};
