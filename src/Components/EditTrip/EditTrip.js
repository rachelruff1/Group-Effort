import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {
  getCities,
  updateTripName,
  addCityToEditTrip,
  deleteCityFromDatabase,
  updateTripOnEdit,
  addCitiesOnEdit,
  updateCitiesOnEdit
} from "../../ducks/reducer1";
import CreateTripCard from "../ViewAllTrips/CreateTrip/CreateTripCard";
import CreateTripSearch from "../ViewAllTrips/CreateTrip/SearchBars/CreateTripSearch";
import EditTripCard from "./EditTripCard/EditTripCard";

class EditTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      index: ""
    };
    this.addEditTrip = this.addEditTrip.bind(this);
    this.saveOnEdit = this.saveOnEdit.bind(this);
  }

  componentDidMount() {
    this.props.getCities(this.props.match.params.id);
  }
  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  addEditTrip(city_name, state, country, lat_lng, place_id) {
    this.props.addCityToEditTrip(city_name, state, country, lat_lng, place_id);
    this.toggleEdit();
  }

  //Needs to delete cities that aren't in the current array
  //update trip name and starting and end dates
  //add new cities to the exiting trip
  //edit existing trips
  saveOnEdit() {
    let notDeletedCityIds = [];
    let newCities = [];
    let existingCities = [];
    this.props.cities.map(
      x =>
        x.city_id
          ? notDeletedCityIds.push(x.city_id) && existingCities.push(x)
          : newCities.push(x)
    );

    let toDelete = this.props.cityIds.filter(
      x => notDeletedCityIds.indexOf(x) == -1
    );

    toDelete.map(x => {
      this.props.deleteCityFromDatabase(x);
    });
    this.props.updateTripOnEdit(
      this.props.tripId,
      this.props.tripName,
      this.props.cities
    );
    newCities.map(x => this.props.addCitiesOnEdit(x, this.props.tripId));
    existingCities.map(x => this.props.updateCitiesOnEdit(x));
    window.history.back();
  }

  render() {
    const { tripName, cities } = this.props;
    const style = {
      margin: 12
    };

    const editTripCardMap =
      cities.length > 0 &&
      cities.map((c, i) => {
        return <EditTripCard key={i} cityDetail={c} index={i} />;
      });

    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {this.state.edit === false ? null : (
          <div className="searchBox">
            <CreateTripSearch
              source="editTripContainer"
              addEditTrip={this.addEditTrip}
            />
            <button onClick={() => this.toggleEdit()}>back</button>
          </div>
        )}
        <TextField
          id="text-field-default"
          floatingLabelText="Trip name"
          value={tripName}
          //   {this.props.tripName === this.props.cities[0].trip_name ? null : this.props.tripName}
          onChange={e => this.props.updateTripName(e.target.value)}
        />
        {editTripCardMap}

        <RaisedButton
          onClick={() => this.toggleEdit()}
          label="+ ADD CITY"
          style={style}
        />
        <RaisedButton
          onClick={
            () => this.saveOnEdit()
            // this.props
            //   .createNewTrip(this.props.tripName, this.props.citiesInTrip)
            //   .then(resp => {
            //     console.log(resp.action.payload[0].trip_id);
            //     this.props.citiesInTrip.map(x => {
            //       console.log(x);
            //       this.props.addCityToDatabase(
            //         x,
            //         resp.action.payload[0].trip_id
            //       );
            //     });
            //   })
          }
          label="SAVE"
          style={style}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tripName: state.reducer1.tripName,
    tripId: state.reducer1.tripId,
    cities: state.reducer1.cities,
    cityIds: state.reducer1.cityIds
    //   newCityInTrip: state.reducer2.newCityInTrip,
    //   index: state.reducer2.index
  };
};

export default connect(mapStateToProps, {
  getCities,
  updateTripName,
  addCityToEditTrip,
  deleteCityFromDatabase,
  updateTripOnEdit,
  addCitiesOnEdit,
  updateCitiesOnEdit
})(EditTrip);
