import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { loading } from "./loading";
import { fetch } from "./fetch";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
	dataFromServer: fetch,
	loading: loading,
	router: connectRouter(history),
});

export default rootReducer;
