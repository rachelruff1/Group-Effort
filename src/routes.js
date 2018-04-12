import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import TripView from "./Components/TripView/TripView";
import LocationView from "./Components/LocationView/LocationView";
import ViewAllTrips from "./Components/ViewAllTrips/ViewAllTrips";
import CreateTrip from "./Components/ViewAllTrips/CreateTrip/CreateTrip";
import Profile from "./Components/Profile/Profile";
import EditTrip from "./Components/EditTrip/EditTrip";
import Search from "./Components/Search/SearchBox";
//Steven said he didn't want to see capital titles on the route path: ie "/Auth", just sayin'

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Auth} path="/auth" />
    <Route component={TripView} path="/location-details/:id" />
    <Route component={ViewAllTrips} path="/view-all-trips" />
    <Route component={LocationView} path="/location" />
    <Route component={CreateTrip} path="/create-trip/:status"/>
    <Route component={Profile} path="/profile"/>
    <Route component={EditTrip} path='/edit-trip/:id' />
    <Route component={Search} path='/never-go-to-this-page' />
  </Switch>
);
