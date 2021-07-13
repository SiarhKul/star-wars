import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const initial = {
  people: [],
  planets: [],
  starships: [],
};

export const history = createBrowserHistory();

export const appReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_PEOPLE': {
      return {
        ...state,
        people: [...state.people, ...action.payload],
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
  router: connectRouter(history),
});

export default rootReducer;
