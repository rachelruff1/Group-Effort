import React, { Component } from "react";
import { TextField } from "material-ui";
import DatePicker from "material-ui/DatePicker";
import { connect } from "react-redux";
import {
  updateCitiesInTrip,
  addDatesToCities,
  updateStartDate,
  updateEndDate,
  deleteCity
} from "../../../ducks/reducer1";
import CreateTripSearch from "./SearchBars/CreateTripSearch";
import "./CreateTripCard.css";
import moment from "moment";

const optionsStyle = {
  maxWidth: 255,
  marginRight: "auto"
};

class CreateTripCard extends Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear());
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear());
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      cityName: "",
      minDate: minDate,
      maxDate: maxDate,
      edit: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateTrip = this.updateTrip.bind(this);
  }

  componentDidMount(props) {
    this.props.addDatesToCities(
      this.state.minDate,
      this.state.maxDate,
      this.props.index
    );
  }

  // componentWillReceiveProps(props) {

  // }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date
    });
    this.props.updateStartDate(date, this.props.index);
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date
    });
    // console.log(this.state.maxDate)
    this.props.updateEndDate(date, this.props.index);
  };

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  updateTrip(cityName, state, country, latLng, placeId) {
    console.log(cityName, state, country, latLng, placeId, this.props.index);
    this.props.updateCitiesInTrip(
      cityName,
      state,
      country,
      latLng,
      placeId,
      this.props.index
    );
    this.toggleEdit();
  }

  render() {
    console.log(this);

    return (
      <div>
        {this.state.edit === false ? null : (
          <div>
            <CreateTripSearch
              source="createTripCard"
              updateTrip={this.updateTrip}
            />
            <button onClick={() => this.toggleEdit()}>back</button>
          </div>
        )}
        <section className="create-trip-card-container">

        {/* check delete for cityId phrasing in the object */}
        
        <button onClick={()=>this.props.deleteCity(this.props.cityDetail.cityId)}>x</button>
          <TextField
            onClick={() => this.toggleEdit()}
            id="text-field-default"
            value={
              this.props.cityDetail.cityName
                
            }
            // {(this.state.cityName) ? this.state.cityName : 'no state'}
            // {(this.state.cityName) ? this.state.cityName : this.props.cityName}
          />
          <div style={optionsStyle}>
            <DatePicker
              value={this.state.minDate}
              onChange={this.handleChangeMinDate}
              formatDate={date => moment(date).format("ddd, MMM D")}
            />
            <DatePicker
              value={this.state.maxDate}
              onChange={this.handleChangeMaxDate}
              formatDate={date => moment(date).format("ddd, MMM D")}
            />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  updateCitiesInTrip,
  addDatesToCities,
  updateStartDate,
  updateEndDate,
  deleteCity
})(CreateTripCard);
