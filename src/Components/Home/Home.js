import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Home.css";
import Auth from "../Auth/Auth";
import { SearchBox } from "../Search/SearchBox";
import { PlacesWithStandaloneSearchBox } from "../Search/PlacesWithStandaloneSearchBox";

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Home">
        <div className="homesearch">
        
          {/* <Search /> */}
          <Auth/>
          < br/>
          <Link to='/location-details'><button>TripView.js</button></Link>
        </div>
        {/* <SearchBox/> */}
        <PlacesWithStandaloneSearchBox/>
      </div>
    );
  }
}

export default Home;
