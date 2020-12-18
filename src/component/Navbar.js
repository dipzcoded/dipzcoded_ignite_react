import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logoIcon from "../img/logo.svg";
import { filteredGames } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { CLEAR_FILTERED } from "../types";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const typeSearch = useRef(null);
  const onFilter = (e) => {
    setSearchData(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(filteredGames(searchData, process.env.REACT_APP_API_KEY));
    typeSearch.current.value = "";
    setSearchData("");
  };

  return (
    <StyledNav>
      <Logo onClick={() => dispatch({ type: CLEAR_FILTERED })}>
        <img src={logoIcon} alt="logo " />
        <h1>Ignite</h1>
      </Logo>
      <form onSubmit={onSubmit} className="search">
        <input
          ref={typeSearch}
          type="text"
          onChange={onFilter}
          value={searchData}
        />
        <button>Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: #fff;
    outline: none;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }
`;

export default Navbar;
