import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useLocation } from "react-router-dom";
import Game from "./Game";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetails from "./GameDetails";
import { fadeIn, popup } from "../animation";

const Home = () => {
  const dispatch = useDispatch();
  const [gameType, setGameType] = useState("");
  // get the current location
  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadGames(process.env.REACT_APP_API_KEY));
  }, [dispatch]);
  const games = useSelector((state) => state.games);
  const {
    upcoming,
    newGames,
    popular,
    details,
    gameScreenshot,
    filtered,
  } = games;

  const onChangeGameType = (type) => {
    setGameType(type);
  };
  const GamePathId = `${pathId}-${gameType}`;

  const upcomingGamesGrid = upcoming.map((game) => (
    <Game
      key={game.id}
      name={game.name}
      released={game.released}
      id={game.id}
      image={game.background_image}
      type="upcoming"
      onChangeGameType={onChangeGameType}
    />
  ));

  const popularGamesGrid = popular.map((game) => (
    <Game
      key={game.id}
      name={game.name}
      released={game.released}
      id={game.id}
      image={game.background_image}
      type="popular"
      onChangeGameType={onChangeGameType}
    />
  ));

  const newGamesGrid = newGames.map((game) => (
    <Game
      key={game.id}
      name={game.name}
      released={game.released}
      id={game.id}
      image={game.background_image}
      type="newGames"
      onChangeGameType={onChangeGameType}
    />
  ));

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && details !== null && gameScreenshot !== null && (
            <GameDetails pathId={GamePathId} />
          )}
        </AnimatePresence>
        {filtered !== null && filtered.length > 0 ? (
          <Fragment>
            <h2>Filtered Games</h2>
            <Games>
              {filtered.map((game) => (
                <Game
                  key={game.id}
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  type="filtered"
                  onChangeGameType={onChangeGameType}
                />
              ))}
            </Games>
          </Fragment>
        ) : (
          <Fragment>
            <h2>Upcoming Games</h2>

            <Games>
              {upcoming.length > 0 ? (
                upcomingGamesGrid
              ) : (
                <h1>fetching data....</h1>
              )}
            </Games>
            <h2>Popular Games</h2>
            <Games>
              {popular.length > 0 ? (
                popularGamesGrid
              ) : (
                <h1>fetching data....</h1>
              )}
            </Games>
            <h2>new Games</h2>
            <Games>
              {newGames.length > 0 ? newGamesGrid : <h1>fetching data....</h1>}
            </Games>
          </Fragment>
        )}
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
