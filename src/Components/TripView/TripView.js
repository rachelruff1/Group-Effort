import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { getPlace } from "../../ducks/reducer2";
import {
  getTrip,
  getCities,
  getSaved,
  getFood,
  getThingsToDo,
  getMuseums,
  getWebcams,
  getFacts
} from "../../ducks/reducer1";
import CitiesCard from "./CitiesCard/CitiesCard";
import "./TripView.css";

class TripView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      testId: "ChIJPZQJvBo8TIYRov7INbBx08o",
      tripId: 16,
      latLng: "",
      index: ''
    };
    this.updateLatLng = this.updateLatLng.bind(this);
  }

  componentDidMount() {
    this.props.getPlace(this.props.match.params.id);
    this.props.getTrip(this.props.match.params.id);
    this.props
      .getCities(this.props.match.params.id)
      .then(resp => this.setState({ latLng: this.props.cities[0].lat_lng }));
  }

updateLatLng (index){
  this.setState({
    latLng: this.props.cities[index].lat_lng
  });
}

  render() {
    console.log('this', this);
    const { tripId } = this.state;
    const { trip, cities } = this.props;
    const citiesMap =
      cities.length > 0 &&
      cities.map((c, i) => <CitiesCard key={i} city={c} updateLatLng={this.updateLatLng} index={i}/>);
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
        <div>
        <div className="trip-view-selectors">
          <div
            className="saved-container"
            onClick={() => this.props.getSaved(tripId)}
          >
            Saved
          </div>
          <div
            className="restaurant-container"
            onClick={() => this.props.getFood(tripId)}
          >
            Restaurants
          </div>
          <div
            className="theater-container"
            onClick={() => this.props.getThingsToDo(tripId)}
          >
            Theaters
          </div>
          <div
            className="museums-container"
            onClick={() => this.props.getMuseums(this.state.latLng)}
          >
            Museums
          </div>
          <div
            className="parks-container"
            onClick={() => this.props.getWebcams()}
          >
            Parks
          </div>
          <div
            className="shopping-container"
            onClick={() => this.props.getFacts(tripId)}
          >
           Shopping
          </div>
        </div>
        <div className="side-bar">
        <sidebar className="city-side-bar">{citiesMap}</sidebar>
        </div>
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
  getCities,
  getSaved,
  getFood,
  getThingsToDo,
  getMuseums,
  getWebcams,
  getFacts
})(TripView);
