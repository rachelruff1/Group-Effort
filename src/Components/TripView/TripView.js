import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { getPlace } from "../../ducks/reducer2";
import { getTrip, getCities, getSaved, getFood, getThingsToDo, getMuseums, getWebcams, getFacts } from "../../ducks/reducer1";
import CitiesCard from "./CitiesCard/CitiesCard";

class TripView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      testId: "ChIJPZQJvBo8TIYRov7INbBx08o",
      tripId: 1
    };
  }

  componentDidMount() {
    this.props.getPlace(this.state.testId);
    this.props.getTrip(this.state.tripId);
    this.props.getCities(this.state.tripId);
  }

  render() {
    console.log(this.props);
    const {tripId} = this.state;
    const { trip, cities } = this.props;
    const citiesMap =
      cities.length > 0 &&
      cities.map((c, i) => <CitiesCard key={i} city={c} />);
    return (
      <body>
        <header>
          <h1>{trip.name} </h1>
          <h3>
            {trip.start_date} - {trip.start_date}
          </h3>
        </header>
        <div className="trip-view-selectors">
          <div className="saved-container" onClick={()=>this.props.getSaved(tripId)}>Saved</div>
          <div className="food-container" onClick={()=>this.props.getFood(tripId)}>Food</div>
          <div className="ttd-container" onClick={()=>this.props.getThingsToDo(tripId)}>Things To Do</div>
          <div className="museums-container" onClick={()=>this.props.getMuseums(tripId)}>Museums</div>
          <div className="webcams-container" onClick={()=>this.props.getWebcams(tripId)}>WebCams</div>
          <div className="geninfo-container" onClick={()=>this.props.getFacts(tripId)}>GeneralInfo</div>
        </div>
        <sidebar className="city-side-bar">{citiesMap}</sidebar>
      </body>
    );
  }
}

const mapStateToProps = state => ({
  placeDetail: state.reducer2.placeDetail,
  test: state.reducer2.test,
  trip: state.reducer1.trip,
  cities: state.reducer1.cities,
  placeId: state.reducer1.placeId
});

export default connect(mapStateToProps, { getPlace, getTrip, getCities, getSaved, getFood, getThingsToDo, getMuseums, getWebcams, getFacts })(
  TripView
);
