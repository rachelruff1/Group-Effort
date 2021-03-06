import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import {
  getCitiesInTrip,
  addCityToTrip,
  updateTripName,
  addCityToDatabase,
  createNewTrip
} from "../../../ducks/reducer1";
import { sendAllData } from "../../../ducks/reducer2";
import CreateTripCard from "./CreateTripCard";
import CreateTripSearch from "./SearchBars/CreateTripSearch";
import "./CreateTrip.css";
import "../../EditTrip/EditTrip.css";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      index: ""
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addDestination = this.addDestination.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
  }

  componentDidMount(props) {
    // this.props.getCitiesInTrip();
    this.props.match.params.status !== "new"
      ? this.props.getCitiesInTrip() &&
        this.props.updateTripName(`Trip to ${this.props.city}`)
      : null;
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  addDestination(cityName, state, country, latLng, placeId) {
    this.props.addCityToTrip(cityName, state, country, latLng, placeId);
    this.toggleEdit();
  }
  saveEvent() {
    let rating;
    this.props.saved.rating == undefined
      ? (rating = "")
      : (rating = this.props.rating);
    this.props
      .createNewTrip(this.props.tripName, this.props.citiesInTrip)
      .then(resp => {
        this.props.citiesInTrip.map(x => {
          this.props.addCityToDatabase(x, resp.action.payload[0].trip_id);
        });
        this.props.history.push(
          `/location-details/${resp.action.payload[0].trip_id}`
        );
        //SWITCH out reference with photo reference -- it's a place holder right now, switch for run time
        this.props.match.params.status !== "new"
          ? this.props.sendAllData(
              resp.action.payload[0].trip_id,
              this.props.saved.name,
              rating,
              this.props.saved.photo_ref
            )
          : null;

        this.props.saved;
      });
  }

  render() {
    console.log('PHOTOREFFF:', this.props.saved) 
    // 'maybe?', this.props.saved.photos[0].photo_reference);
    const style = {
      margin: 12,
      fontSize: 20
    };
    const createTripCardMap =
      this.props.citiesInTrip.length > 0 &&
      this.props.citiesInTrip.map((c, i) => {
        return <CreateTripCard key={i} cityDetail={c} index={i} />;
      });

    return (
      <div className="create-trip-main">
        {this.state.edit === false ? (
          <div className="create-trip-group">
            <h1>Create New Trip</h1>

            {this.props.match.params.status === "new" ? (
              <TextField
                id="text-field-default"
                floatingLabelText="Name your trip"
                // value={`Trip to ${this.props.city}`}
                onChange={e => this.props.updateTripName(e.target.value)}
              />
            ) : (
              <TextField
                id="text-field-default"
                floatingLabelText="Name your trip"
                value={this.props.tripName}
                onChange={e => this.props.updateTripName(e.target.value)}
              />
            )}

            {createTripCardMap}

            <FlatButton
              onClick={() => this.toggleEdit()}
              label="+ ADD CITY"
              style={style}
            />

            <FlatButton
              onClick={() => this.saveEvent()}
              label="SAVE"
              style={style}
            />
          </div>
        ) : (
          <div className="create-trip-group">
            <h1>Create New Trip</h1>
            {this.props.match.params.status === "new" ? (
              <div className='trip-name-container-create'>
              <TextField
                id="text-field-default"
                floatingLabelText="Name your trip"
                // value={`Trip to ${this.props.city}`}
                onChange={e => this.props.updateTripName(e.target.value)}
              /></div>
            ) : (
              <TextField
                id="text-field-default"
                floatingLabelText="Name your trip"
                value={this.props.tripName}
                onChange={e => this.props.updateTripName(e.target.value)}
              />
            )}

            {createTripCardMap}

            <FlatButton
              onClick={() => this.toggleEdit()}
              label="+ ADD CITY"
              style={style}
            />

            <FlatButton
              onClick={() => this.saveEvent()}
              label="SAVE"
              style={style}
            />
            <div id="page-mask" />
            <div id="window">
            <div className='search-bar-edit-pop'>
              <CreateTripSearch
                source="createTripContainer"
                addDestination={this.addDestination}
              />
              <div className ='search-bar-edit-pop-btn'>
              <button onClick={() => this.toggleEdit()}>back</button>
            </div>
            </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tripName: state.reducer1.tripName,
  city: state.reducer1.city,
  state: state.reducer1.state,
  country: state.reducer1.country,
  latlng: state.reducer1.latlng,
  placeId: state.reducer1.placeId,
  newCityInTrip: state.reducer2.newCityInTrip,
  index: state.reducer2.index,
  citiesInTrip: state.reducer1.citiesInTrip,
  saved: state.reducer1.saved
});

export default connect(mapStateToProps, {
  createNewTrip,
  getCitiesInTrip,
  addCityToTrip,
  updateTripName,
  addCityToDatabase,
  sendAllData
})(CreateTrip);
