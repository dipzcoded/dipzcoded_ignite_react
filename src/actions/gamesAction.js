import axios from "axios";
import { FETCH_GAMES } from "../types";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

export const loadGames = (apikey) => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesUrl(apikey));
  const newGamesData = await axios.get(newGamesUrl(apikey));
  const upcomingGamesData = await axios.get(upcomingGamesUrl(apikey));
  dispatch({
    type: FETCH_GAMES,
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};
