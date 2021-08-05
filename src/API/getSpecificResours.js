import { handlerError } from "../utils/index";
import axios from "axios";

export const getSpecificResours = async url => {
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		handlerError(error.message);
	}
};
