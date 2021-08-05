import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import reducer, { history } from "./reducers";
import rootSaga from "./sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(routerMiddleware(history), sagaMiddleware)
	)
);

sagaMiddleware.run(rootSaga);

export default store;
