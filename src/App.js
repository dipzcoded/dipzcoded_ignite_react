import React, { Fragment } from "react";
import Routes from "./component/Routes";
import Navbar from "./component/Navbar";
import GlobalStyles from "./component/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Routes />
    </Fragment>
  );
};

export default App;
