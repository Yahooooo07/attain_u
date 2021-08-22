import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodListing from "../pages/FoodListing";
import UserLogin from "../pages/UserLogin";
import UserSignUp from "../pages/UserSignUp";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FoodListing />
        </Route>
        <Route exact path="/login">
          <UserLogin />
        </Route>
        <Route exact path="/signup">
          <UserSignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
