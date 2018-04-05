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
          <h1>
            {/* add conditinal  */}
            {this.props.city},{this.props.state},{this.props.country}
          </h1>
          <p>img.of.city</p>
        </div>
        <ParkCard />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.reducer1.city,
    state: state.reducer1.state,
    country: state.reducer1.country
  };
}
export default connect(mapStateToProps)(LocationView);
