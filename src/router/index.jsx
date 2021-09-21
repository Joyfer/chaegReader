import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "../pages/Index";

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Index></Index>
          </Route>
          <Route exact path="/about">
            <h1>About</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
