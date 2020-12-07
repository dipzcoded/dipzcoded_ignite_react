import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "./Game";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames(process.env.REACT_APP_API_KEY));
  }, [dispatch]);
  const games = useSelector((state) => state.games);
  const { upcoming, newGames, popular } = games;
  console.log(upcoming, newGames, popular);

  const upcomingGamesGrid = upcoming.map((game) => (
    <Game
      key={game.id}
      name={game.name}
      released={game.released}
      id={game.id}
      image={game.background_image}
    />
  ));

  const popularGamesGrid = popular.map((game) => (
    <Game
      key={game.id}
      name={game.name}
      released={game.released}
      id={game.id}
      image={game.background_image}
    />
  ));

  const newGamesGrid = newGames.map((game) => (
    <Game
      key={game.id}
      name={game.name}
      released={game.released}
      id={game.id}
      image={game.background_image}
    />
  ));
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.length > 0 ? upcomingGamesGrid : <h1>fetching data....</h1>}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.length > 0 ? popularGamesGrid : <h1>fetching data....</h1>}
      </Games>
      <h2>new Games</h2>
      <Games>
        {newGames.length > 0 ? newGamesGrid : <h1>fetching data....</h1>}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
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
