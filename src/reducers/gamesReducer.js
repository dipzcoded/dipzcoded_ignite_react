import { FETCH_GAMES, GET_DETAIL } from "../types";
const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  filtered: null,
  details: {},
  gameScreenshot: null,
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

    case GET_DETAIL:
      return {
        ...state,
        details: payload.details,
        gameScreenshot: payload.gameScreenshot,
      };

    default:
      return state;
  }
};

export default gamesReducer;
