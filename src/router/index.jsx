import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { PageReaderProvider } from "../context/PageReaderContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Index from "../pages/Index";
import Home from "../pages/Home";
import Reader from "../pages/Reader";

const Routes = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
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
      </CSSTransition>
    </TransitionGroup>
  );
});

export default Routes;
