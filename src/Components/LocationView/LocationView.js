import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
class LocationView extends Component {
  render() {
    return (
      <div className="LocationView">
        <h3>-----name of city----</h3>

        <div className="SearchbaronLocation">
          new search ???
          <Search />
        </div>

        <div className="locationimg">
          <img href="" alt="img of location" />
        </div>
        <Link to={"/auth"}>
          <button> New </button>
        </Link>
        <button> Add </button>
      </div>
    );
  }
}

export default LocationView;
