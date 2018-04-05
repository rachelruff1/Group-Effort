import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import { connect } from "react-redux";
import ParkCard from "../ParkCard/ParkCard";
class LocationView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="LocationView">
        <div className="SearchbaronLocation">
          <SearchBox />
          {console.log(this.props, "adsfadfasdfafdafdsfads")}
          <h1>{this.props.city}</h1>
          <p>img.of.city</p>
        </div>
        <ParkCard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.reducer2.city
  };
}
export default connect(mapStateToProps)(LocationView);
