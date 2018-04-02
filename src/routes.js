import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import TripView from "./Components/TripView/TripView";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Auth} path="/Auth" />
    <Route component={TripView} path="/location-details" />
  </Switch>
);
