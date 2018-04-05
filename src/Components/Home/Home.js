import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import  SearchBox from "../Search/SearchBox";

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Home">
        <div className="homesearch">
          < br/>
          <Link to='/location-details'><button>TripView</button></Link>
          <Link to='/view-all-trips'><button>ViewAllTrips</button></Link>
        </div>
          <div className="title-card">
          <h1>TRIPPIE</h1>
          </div>
        <figure className="search">
        <SearchBox/>
        </figure>
      </div>
    );
  }
}

export default Home;
