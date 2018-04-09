import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {
  getCitiesInTrip,
  addCityToTrip,
  updateTripName, addCityToDatabase, createNewTrip
} from "../../../ducks/reducer1";
import CreateTripCard from "./CreateTripCard";
import SearchBox from "../../Search/SearchBox";
import CreateTripSearch from "./SearchBars/CreateTripSearch";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      index: ""
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addDestination = this.addDestination.bind(this);
  }

  componentDidMount(props) {
    // console.log("HIT DIDMOUNT", this.props.city, this.props.state, this.props.country, this.props.latlng, this.props.placeId);

    this.props.getCitiesInTrip();
      // this.props.city, this.props.state, this.props.country, this.props.latlng, this.props.placeId );
  }

  //This runs on component did mount to set initial State w/ data from reducer

  // componentWillReceiveProps(nextProps) {
  //   console.log(
  //     "HIT WILL RECEIVE",
  //     "index",
  //     this.props.citiesInTrip
  //   );
  //   this.toggleEdit();
  // }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  addDestination(cityName, state, country, latLng, placeId){
    this.props.addCityToTrip(cityName, state, country, latLng, placeId);
    this.toggleEdit();
  }

  render() {
    console.log(this.props.citiesInTrip);
    const style = {
      margin: 12
    };
    const createTripCardMap =
      this.props.citiesInTrip.length > 0 &&
      this.props.citiesInTrip.map((c, i) => {
        console.log(c.cityName);
        return <CreateTripCard key={i} cityDetail={c} index={i} />;
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
          defaultValue={`Trip to ${this.props.city}`}
          onChange={e => this.props.updateTripName(e.target.value)}
        />
        {createTripCardMap}

        <RaisedButton
          onClick={() => this.toggleEdit()}
          label="+ ADD DESTINATION"
          style={style}
        />
        <RaisedButton
          onClick={()=>this.props.createNewTrip(this.props.tripName, '1/2/18', '2/3/18').then(resp=> {console.log(resp.action.payload[0].trip_id);this.props.citiesInTrip.map(x=>{console.log(x);this.props.addCityToDatabase(x, resp.action.payload[0].trip_id)})})}
          label="DONE"
          style={style}
        />
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
  citiesInTrip: state.reducer1.citiesInTrip
});

export default connect(mapStateToProps, {
  createNewTrip,
  getCitiesInTrip,
  addCityToTrip,
  updateTripName,
  addCityToDatabase
})(CreateTrip);
