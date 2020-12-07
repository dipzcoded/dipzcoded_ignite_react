import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames(process.env.REACT_APP_API_KEY));
  }, [dispatch]);

  return <div></div>;
};

export default App;
