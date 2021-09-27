import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "../pages/Index";
import Home from "../pages/Home";

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Index></Index>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
