import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Auth from "../Auth/Auth";
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
          <Auth/>
          < br/>
          <Link to='/location-details'><button>TripView</button></Link>
        </div>
        <div className="title-card">
          <h1>TRIPPIE</h1>
          </div>
        <div className="group-transition">
          <div className="transition-1">
            Where
          </div>
          <div className="transition-2">
            You
          </div>
          {/* <div className="transition-3">
            Go?
          </div> */}
        </div> 
        <figure className="search">
        <SearchBox/>
        </figure>
      </div>
    );
  }
}

export default Home;
