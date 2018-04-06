import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { createNewTrip } from "../../../ducks/reducer2";
import CreateTripCard from "./CreateTripCard";
import SearchBox from "../../Search/SearchBox";
import CreateTripSearch from "./CreateTripSearch";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      cities: [],
      newCityDetail: {},
      tripName: this.props.city
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.setTripName = this.setTripName.bind(this);
    this.updateTripName = this.updateTripName.bind(this);
    this.searchNewPlace = this.searchNewPlace.bind(this);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  componentDidMount(props) {
    this.setTripName(this.props.city);
  }

  setTripName(city) {
    console.log("hit update");
    this.setState({
      tripName: city,
      cities: []
    });
    this.state.cities.push(city);
  }
  updateTripName(e) {
    this.setState({
      tripName: e.target.value
    });
  }
  searchNewPlace(cityName, state, country, latLng, placeId) {
    console.log(cityName, state, country, latLng, placeId);
    this.state.cities.push(cityName);
    this.setState({
      newCityDetail: { cityName, state, country, latLng, placeId },
      edit: !this.state.edit
    });

  }

  render() {
    console.log(this.state.cities);
    const style = {
      margin: 12
    };
    const createTripCardMap =
      this.state.cities.length > 0 &&
      this.state.cities.map((c, i) => {console.log(c); return <CreateTripCard key={i} city={c} />});

    return (
      // this.state.edit === false ? (

      <div>
        {this.state.edit === false ? null : (
          <div className="searchBox">
            <CreateTripSearch addDestination={this.searchNewPlace} />
            <button onClick={() => this.toggleEdit()}>back</button>
          </div>
        )}
        <TextField
          id="text-field-default"
          floatingLabelText="Trip name"
          defaultValue={`Trip to ${this.state.tripName}`}
          onChange={e => this.updateTripName(e)}
        />
        <CreateTripCard city={this.props.city}/>
        {createTripCardMap}
        <RaisedButton
          onClick={() => this.toggleEdit()}
          label="+ ADD DESTINATION"
          style={style}
        />
        <RaisedButton
          onClick={this.props.createNewTrip}
          label="DONE"
          style={style}
        />
      </div>
    );
    // : (
    //   <div className="searchBox">

    //     <CreateTripSearch addDestination={this.searchNewPlace} addName={this.addName}/>
    //     <button onClick={() => this.toggleEdit()}>back</button>
    //   </div>
    // );
  }
}
const mapStateToProps = state => ({
  city: state.reducer1.city
});

export default connect(mapStateToProps, { createNewTrip })(CreateTrip);
