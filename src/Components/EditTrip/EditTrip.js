import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { getCities, updateTripName } from "../../ducks/reducer1";
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
  }

  componentDidMount() {
    this.props.getCities(this.props.match.params.id);
  }
  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    console.log(this.props.cities);
    console.log(this.props.tripName);
    const {tripName, cities} = this.props
    const style = {
      margin: 12
    };

    const editTripCardMap =
    cities.length > 0 &&
    cities.map((c, i) => {
      console.log(c.cityName);
      return <EditTripCard key={i} cityDetail={c} index={i} />;
    });
    
    return (
      <div>
        {this.state.edit === false ? null : (
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
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
  tripName: state.reducer1.tripName,
  cities: state.reducer1.cities,
//   newCityInTrip: state.reducer2.newCityInTrip,
//   index: state.reducer2.index
    }};

export default connect(mapStateToProps, {
  getCities, updateTripName
})(EditTrip);
