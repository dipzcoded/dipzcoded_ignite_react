import React, { memo } from "react";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// redux
import { useDispatch, useSelector } from "react-redux";
import { loadDetails } from "../actions/gamesAction";
const areEqual = (prevProps, nextProps) => true;

const Game = memo(({ name, id, released, image }) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const { details } = games;

  const loadDetailHandler = () => {
    dispatch(loadDetails(id, process.env.REACT_APP_API_KEY));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
}, areEqual);

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
