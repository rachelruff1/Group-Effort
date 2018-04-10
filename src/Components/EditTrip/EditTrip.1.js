import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {
    getCities
} from "../../ducks/reducer1";
import CreateTripCard from "../ViewAllTrips/CreateTrip/CreateTripCard";
import CreateTripSearch from "../ViewAllTrips/CreateTrip/SearchBars/CreateTripSearch";


class EditTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      index: ""
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addDestination = this.addDestination.bind(this);
  }

  componentDidMount() {
      console.log(this.match.params.id);
    //   this.props.getCities(this.match.params.id);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  addDestination(cityName, state, country, latLng, placeId) {
    this.props.addCityToTrip(cityName, state, country, latLng, placeId);
    this.toggleEdit();
  }

  render() {
    // console.log(this.props.cities);
    // const style = {
    //   margin: 12
    // };
    // const createTripCardMap =
    //   this.props.cities.length > 0 &&
    //   this.props.cities.map((c, i) => {
    //     console.log(c.cityName);
    //     return <CreateTripCard key={i} cityDetail={c} index={i} />;
    //   });

    return (
      <div>
          Hi
        {/* {this.state.edit === false ? null : (
          <div className="searchBox">
            <CreateTripSearch
              source="createTripContainer"
              addDestination={this.addDestination}
            />
            <button onClick={() => this.toggleEdit()}>back</button>
          </div>
        )}
        
        <TextField
          id="text-field-default"
          floatingLabelText="Trip name"
          defaultValue={`Trip to ${this.props.city}`}
          onChange={e => this.props.updateTripName(e.target.value)}
        />
        {createTripCardMap}

        <RaisedButton
          onClick={() => this.toggleEdit()}
          label="+ ADD CITY"
          style={style}
        />
        <RaisedButton
          onClick={() =>
            this.props
              .createNewTrip(this.props.tripName, this.props.citiesInTrip)
              .then(resp => {
                console.log(resp.action.payload[0].trip_id);
                this.props.citiesInTrip.map(x => {
                  console.log(x);
                  this.props.addCityToDatabase(
                    x,
                    resp.action.payload[0].trip_id
                  );
                });
              })
          }
          label="SAVE"
          style={style}
        /> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tripName: state.reducer1.tripName,
  cities: state.reducer1.cities,
  newCityInTrip: state.reducer2.newCityInTrip,
  index: state.reducer2.index
});

export default connect(mapStateToProps, {
    getCities
})(EditTrip);
