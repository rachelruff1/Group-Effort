import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import TripView from "./Components/TripView/TripView";
import CreateTrip from "./Components/CreateTrip/CreateTrip";
import LocationView from "./Components/LocationView/LocationView";
//Steven said he didn't want to see capital titles on the route path: ie "/Auth", just sayin'

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Auth} path="/auth" />
    <Route component={TripView} path="/location-details" />
    <Route component={CreateTrip} path="/createtrip" />
    <Route component={LocationView} path="/location" />
  </Switch>
);
