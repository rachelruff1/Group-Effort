import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { createNewTrip } from "../../../ducks/reducer2";
import CreateTripCard from "./CreateTripCard";
import SearchBox from "../../Search/SearchBox";
import CreateTripSearch from "./SearchBars/CreateTripSearch";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      tripName: "",
      defaultCityDetail: {},
      newCityDetail: [],
      //   tripName: this.props.city
      index: "",
      newCityInTrip: {}
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.setTripName = this.setTripName.bind(this);
    this.updateTripName = this.updateTripName.bind(this);
    this.searchNewPlace = this.searchNewPlace.bind(this);
    this.updateNewCityDetailArray = this.updateNewCityDetailArray.bind(this);
  }

  componentDidMount(props) {
    console.log('HIT DIDMOUNT');
    this.setTripName(
      this.props.city,
      this.props.state,
      this.props.country,
      this.props.latlng,
      this.props.placeId
    );
  //  this.updateNewCityDetailArray(
  //         this.props.index,
  //         this.props.newCityInTrip);
       
  }

  //This runs on component did mount to set initial State w/ data from reducer

componentWillReceiveProps(props){
  console.log('HIT WILL RECEIVE', 'index', props.index, 'city', props.newCityInTrip);
  let newValue = this.state.newCityDetail.slice();
    newValue.splice(props.index, 1, props.newCityInTrip);
    this.setState({
      newCityDetail: newValue
    });
    // this.updateNewCityDetailArray();
}


  setTripName(cityName, state, country, latLng, placeId) {
    this.setState({
      tripName: cityName,
      newCityDetail: [{ cityName, state, country, latLng, placeId }]
    });
  }

  updateNewCityDetailArray() {
    console.log('hit!!!!!!:', this, 'index', this.props.index, 'city',this.props.newCityInTrip);
    let newValue = this.state.newCityDetail.slice();
    newValue.splice(this.props.index, 1, this.props.newCity);
    this.setState({
      newCityDetail: newValue
    });
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  updateTripName(e) {
    this.setState({
      tripName: e.target.value
    });
  }
  searchNewPlace(cityName, state, country, latLng, placeId) {
    // console.log(cityName, state, country, latLng, placeId);
    this.setState(
      {
        newCityDetail: [
          ...this.state.newCityDetail,
          { cityName, state, country, latLng, placeId }
        ],
        edit: !this.state.edit
      },
      () => console.log(this.state)
    );
  }

  render() {
    console.log('state', this.state.index, 'props', this.props.index);
    // this.state.index === this.props.index ? null : this.updateNewCityDetailArray(this.props.index,
    //   this.props.newCityInTrip);
    const style = {
      margin: 12
    };
    const createTripCardMap =
      this.state.newCityDetail.length > 0 &&
      this.state.newCityDetail.map((c, i) => {
        console.log(c.cityName);
        return <CreateTripCard key={i} cityName={c.cityName} index={i} />;
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
          defaultValue={`Trip to ${this.props.city}`}
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
  placeId: state.reducer1.placeId,
  newCityInTrip: state.reducer2.newCityInTrip,
  index: state.reducer2.index
});

export default connect(mapStateToProps, { createNewTrip })(CreateTrip);
