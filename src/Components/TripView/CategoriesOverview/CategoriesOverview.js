import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getTrip,
  getCities,
  getSaved,
  getFood,
  getParks,
  getMuseums,
  getMovie,
  getMall
} from "../../../ducks/reducer1";
import "../TripView.css";

class CategoriesOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this", this);
    const { latLng } = this.props;

    return (
      <div className="trip-view-selectors">
        <div
          className="saved-container"
          onClick={() => {
            console.log("clickd!");
            this.props.updateContainer("Saved");
            // this.props.getSaved(latLng);
          }}
        >
          Saved
        </div>

        <div
          className="restaurant-container"
          onClick={() => {
            console.log("clickd!");
            this.props.updateContainer("Restaurants");
            // this.props.getFood(latLng);
          }}
        >
          Restaurants
        </div>

        <div
          className="theater-container"
          onClick={() => {
            this.props.updateContainer("Theaters");
            // this.props.getMovie(latLng);
          }}
        >
          Theaters
        </div>

        <div
          className="museums-container"
          onClick={() => {
            this.props.updateContainer("Museums");
            // this.props.getMuseums(latLng);
          }}
        >
          Museums
        </div>

        <div
          className="parks-container"
          onClick={() => {
            this.props.updateContainer("Parks");
            // this.props.getParks(latLng);
          }}
        >
          Parks
        </div>

        <div
          className="shopping-container"
          onClick={() => {
            this.props.updateContainer("Shopping");
            // this.props.getMall(latLng);
          }}
        >
          Shopping
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getSaved,
  getFood,
  getParks,
  getMuseums,
  getMovie,
  getMall
})(CategoriesOverview);
