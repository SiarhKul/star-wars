const initial = {
  people: [],
  planets: [],
  starships: [],
};

export default function reducer(state = initial, action) {
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
}
