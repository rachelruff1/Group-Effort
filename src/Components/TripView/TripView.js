import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { getPlace } from "../../ducks/reducer2";
import {
  getTrip,
  getCities
} from "../../ducks/reducer1";
import CitiesCard from "./CitiesCard/CitiesCard";
import "./TripView.css";
import ApiCard from "../ApiCard/ApiCard";
import CategoryDisplay from "./CategoryDisplay/CategoryDisplay";
import CategoriesOverview from "./CategoriesOverview/CategoriesOverview";

class TripView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      testId: "ChIJPZQJvBo8TIYRov7INbBx08o",
      tripId: 16,
      latLng: "",
      index: "",
      container: "",
      source: "",
      overview: true
    };
    this.updateCityByIndex = this.updateCityByIndex.bind(this);
    this.updateContainer = this.updateContainer.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  componentDidMount() {
    this.props.getPlace(this.props.match.params.id);
    this.props.getTrip(this.props.match.params.id);
    this.props.getCities(this.props.match.params.id).then(resp => {
      this.setState({
        latLng: this.props.cities[0].lat_lng,
        selectedCity: this.props.cities[0].city_name
      });
    });
  }

  updateCityByIndex(index, cityName) {
    console.log(index, cityName);
    let newLat = this.props.cities[index].lat_lng;
    this.setState({
      latLng: newLat,
      selectedCity: cityName
    });
  }

  updateContainer(title) {
    console.log('hit:', title)
    this.setState({
      container: title,
      overview: false
    });
  }
  toggleView() {
    console.log('hit toggle')
    this.setState({
      overview: true
    });
  }

  render() {
    console.log("this", this);
    const { tripId, latLng, container } = this.state;
    const { trip, cities } = this.props;
    const citiesMap =
      cities.length > 0 &&
      cities.map((c, i) => (
        <CitiesCard
          key={i}
          city={c}
          updateLatLng={this.updateLatLng}
          index={i}
        />
      ));

    const savedMap = {};
    return (
      <body className="trip-view-container">
        <header className="trip-title">
          <div className="trip-box">
            <h1>{trip.trip_name} </h1>
            <h3>
              {trip.start_date} - {trip.end_date}
            </h3>
          </div>
        </header>
        <div className="side-bar">
          <sidebar className="city-side-bar">{citiesMap}</sidebar>
        </div>

        <div>
          {this.state.overview === true ? (
            <CategoriesOverview 
            updateContainer={this.updateContainer}
            latLng={this.state.latLng}
            />
          ) : (
            <CategoryDisplay
              toggleView={this.toggleView}
              container={container}
            />
          )}
        </div>
      </body>
    );
  }
}


const mapStateToProps = state => ({
  placeDetail: state.reducer2.placeDetail,
  test: state.reducer2.test,
  trip: state.reducer1.trip,
  cities: state.reducer1.cities,
  placeId: state.reducer1.placeId,
  latlng: state.reducer1.latlng
});

export default connect(mapStateToProps, {
  getPlace,
  getTrip,
  getCities
})(TripView);
