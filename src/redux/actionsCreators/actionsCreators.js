import { iS_DATA_LOADED_FROM_SERVER } from "../actions/actions";

export const isDataLoadedFromServer = trueOrFalse => {
	return { type: iS_DATA_LOADED_FROM_SERVER, payload: trueOrFalse };
};
