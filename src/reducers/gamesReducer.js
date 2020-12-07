import { FETCH_GAMES } from "../types";
const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  filtered: null,
};

const gamesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_GAMES:
      return {
        ...state,
        popular: payload.popular,
        newGames: payload.newGames,
        upcoming: payload.upcoming,
      };

    default:
      return state;
  }
};

export default gamesReducer;
