import axios from "axios";
import { FETCH_GAMES, GET_DETAIL, CLEAR_DETAIL } from "../types";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  gameDetailsUrl,
  gameSceenshotUrl,
} from "../api";

const clearGameDetail = () => async (dispatch) => {
  dispatch({
    type: CLEAR_DETAIL,
  });
};

export const loadGames = (apikey) => async (dispatch) => {
  try {
    const popularGamesData = await axios.get(popularGamesUrl(apikey));
    console.log(popularGamesUrl(apikey));
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
  } catch (error) {
    console.log(error);
  }
};

export const loadDetails = (id, apikey) => async (dispatch) => {
  try {
    dispatch(clearGameDetail());
    const detailData = await axios.get(gameDetailsUrl(id, apikey));
    const screenShotData = await axios.get(gameSceenshotUrl(id, apikey));
    dispatch({
      type: GET_DETAIL,
      payload: {
        details: detailData.data,
        gameScreenshot: screenShotData.data.results,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
