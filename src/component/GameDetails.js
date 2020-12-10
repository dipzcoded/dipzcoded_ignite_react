import React, { Fragment } from "react";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// redux
import { useSelector } from "react-redux";
import { smallImage } from "../utils";
import { useHistory } from "react-router-dom";

const GameDetails = ({ pathId }) => {
  const { push } = useHistory();
  const { details, gameScreenshot } = useSelector((state) => state.games);
  const exitDetail = (e) => {
    if (e.target.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      push("/");
    }
  };
  return (
    <CardShadow className="shadow" onClick={exitDetail}>
      <Detail layoutId={pathId}>
        {/* stats */}
        <Stats>
          <div className="rating">
            {details !== null && details.name && (
              <motion.h3 layoutId={`title ${pathId}`}>{details.name}</motion.h3>
            )}
            {details !== null && details.rating > -1 && (
              <p>Rating : {details.rating}</p>
            )}
          </div>
          {/* info */}
          <Info>
            {details !== null && details.platforms && (
              <Fragment>
                <h3>Platforms</h3>
                <Platforms>
                  {details.platforms.map(({ platform }) => (
                    <h3 key={platform.id}>{platform.name}</h3>
                  ))}
                </Platforms>
              </Fragment>
            )}
          </Info>
        </Stats>
        {/* media */}
        <Media>
          {details !== null && details.background_image && (
            <motion.img
              layoutId={`image ${pathId}`}
              src={smallImage(details.background_image, 1280)}
              alt={details.background_image}
            />
          )}
        </Media>
        {/* description */}
        <Description>
          {details !== null && details.description_raw && (
            <p>{details.description_raw}</p>
          )}
        </Description>
        {/* Gallery */}
        <Screenshots>
          {gameScreenshot !== null &&
            gameScreenshot.map(({ image, id }) => (
              <img
                key={id}
                src={smallImage(image, 1280)}
                alt={`${image}-${id}`}
              />
            ))}
        </Screenshots>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: overlay;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Screenshots = styled(motion.div)`
  img {
    margin-top: -0.4rem;
  }
`;

export default GameDetails;
