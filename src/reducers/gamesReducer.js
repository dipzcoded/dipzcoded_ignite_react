import {
  FETCH_GAMES,
  GET_DETAIL,
  CLEAR_DETAIL,
  FILTERED_GAMES,
  CLEAR_FILTERED,
} from "../types";
const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  filtered: null,
  details: null,
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

    case FILTERED_GAMES:
      return {
        ...state,
        filtered: payload.filtered,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        details: null,
        gameScreenshot: null,
      };
    case CLEAR_FILTERED: {
      return {
        ...state,
        filtered: null,
      };
    }

    default:
      return state;
  }
};

export default gamesReducer;
