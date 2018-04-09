import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SearchBox from "../Search/SearchBox";
import moment from 'moment';

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    const test = moment().format("MM/DD/YYYY");
    // .toString();
    return (
      <div className="Home">
        <div className="homesearch">
          <br />
          <Link to="/location-details">
            <button>TripView</button>
          </Link>
          <Link to="/view-all-trips">
            <button>ViewAllTrips</button>
          </Link>
          {test}
        </div>
        <figure className="search">
          <SearchBox />
        </figure>
        <div id="group-transition">
          <div className="transition-1">Plan</div>
          <div className="transition-2">Your</div>
          <div className="transition-3">Trip</div>
          <div className="transition-4">Today</div>
          <hr className="hr-1" />
        </div>
      </div>
    );
  }
}

export default Home;
