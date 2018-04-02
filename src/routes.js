import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import CreateTrip from "./Components/CreateTrip/CreateTrip";

//Steven said he didn't want to see capital titles on the route path: ie "/Auth", just sayin'

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Auth} path="/Auth" />
    <Route component={CreateTrip} path="/createtrip" />
  </Switch>
);
