import React from "react";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/gamesAction";
import { Link } from "react-router-dom";
import { smallImage } from "../utils";
import { popup } from "../animation";

const Game = ({ name, id, released, image, type, onChangeGameType }) => {
  const dispatch = useDispatch();
  const pathId = id.toString();

  const loadDetailHandler = () => {
    dispatch(loadDetails(id, process.env.REACT_APP_API_KEY));
    document.body.style.overflow = "hidden";
    onChangeGameType(type);
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={`${pathId}-${type}`}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${pathId}-${type}`}>{name}</motion.h3>
        <p>{released}</p>
        {image && (
          <motion.img
            layoutId={`image ${pathId}-${type}`}
            src={smallImage(image, 640)}
            alt={name}
          />
        )}
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
