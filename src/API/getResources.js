import { handlerError } from "../utils";

export const getResources = async url => {
	try {
		const request = await fetch(url);
		const data = await request.json();
		return data;
	} catch (error) {
		handlerError(error.message);
	}
};
