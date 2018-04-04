import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import { connect } from "react-redux";
class LocationView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="LocationView">
        <h3>-----name of city----</h3>

        <div className="SearchbaronLocation">
          new search ???
          <SearchBox />
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

const mapStatetoProps = state => state;
export default connect(mapStatetoProps, {})(LocationView);
