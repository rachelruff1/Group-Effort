import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import { connect } from "react-redux";
import "./LocationView.css";
import ParkCard from "../ParkCard/ParkCard";
import MuseumCard from "../../MuseumCard/MuseumCard";
import FoodCard from "../../FoodCard/FoodCard";
import MallCard from "../../MallCard/MallCard";
import MovieCard from "../../MovieCard/MovieCard";
class LocationView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="location-body">
        <div className="location-searchBox">
          <SearchBox />
        </div>
          {console.log(this.props, "adsfadfasdfafdafdsfads")}
        <div className="location-title">
          <h1>
            {/* add conditinal  */}
            {this.props.city},{this.props.state},{this.props.country}
          </h1>
        </div>
        <div className="location-image">
          <p>img.of.city</p>
        </div>
        <section className="location-card-group">
          <div className="park-card"><ParkCard /></div>
          <div className="museum-card"><MuseumCard /></div>
          <div className="food-card"><FoodCard /></div>
          <div className="mall-card"><MallCard /></div>
          <div className="movie-card"><MovieCard /></div>
        </section>
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
