import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageReaderProvider } from "../context/PageReaderContext";

import Index from "../pages/Index";
import Home from "../pages/Home";
import Reader from "../pages/Reader";

function Routes() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Index></Index>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/reader/:bookName">
            <PageReaderProvider>
              <Reader></Reader>
            </PageReaderProvider>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default Routes;
