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
      defaultCityDetail: {},
      newCityDetail: [],
    //   tripName: this.props.city
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.setTripName = this.setTripName.bind(this);
    this.updateTripName = this.updateTripName.bind(this);
    this.searchNewPlace = this.searchNewPlace.bind(this);
  }

  componentDidMount(props) {
    this.setTripName(this.props.city, this.props.state, this.props.country, this.props.latlng, this.props.placeId);
  }

//This runs on component did mount to set initial State w/ data from reducer

  setTripName(cityName, state, country, latLng, placeId) {
    console.log("hit update");
    this.setState({
    //   tripName: city,
      newCityDetail: [{ cityName, state, country, latLng, placeId  }]
    });
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  updateTripName(e) {
    this.setState({
      defaultCityDetail: {city: e.target.value}
    });
  }
  searchNewPlace(cityName, state, country, latLng, placeId) {
    console.log(cityName, state, country, latLng, placeId);
    this.setState(
      {
        cities: [...this.state.cities, cityName],
        newCityDetail: [...this.state.newCityDetail, { cityName, state, country, latLng, placeId }],
        edit: !this.state.edit
      },
      () => console.log(this.state)
    );
  }

  render() {
    console.log(this.state);
    const style = {
      margin: 12
    };
    const createTripCardMap =
      this.state.newCityDetail.length > 0 &&
      this.state.newCityDetail.map((c, i) => {
        console.log(c.cityName);
        return <CreateTripCard key={i} city={c.cityName} index={i}/>;
      });

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
          defaultValue={`Trip to ${this.state.defaultCityDetail.city}`}
          onChange={e => this.updateTripName(e)}
        />
        {/* {this.state.newCityDetail === {} ? <CreateTripCard city={this.state.defaultCityDetail} /> : <div> <CreateTripCard city={this.state.defaultCityDetail} />  */}
        {createTripCardMap}
        {/* </div>} */}
        
       
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
  city: state.reducer1.city,
  state: state.reducer1.state,
  country: state.reducer1.country,
  latlng: state.reducer1.latlng,
  placeId: state.reducer1.placeId
});

export default connect(mapStateToProps, { createNewTrip })(CreateTrip);
