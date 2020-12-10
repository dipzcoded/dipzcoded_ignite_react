import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../component/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/game/:id", "/"]} component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
