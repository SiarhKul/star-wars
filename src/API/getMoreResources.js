import axios from "axios";
import { handlerError } from "../utils";

export const getMoreResources = async (url, page) => {
	try {
		const { data } = await axios.get(`${url}=${page}`);
		return data;
	} catch (error) {
		handlerError(error.message);
	}
};
