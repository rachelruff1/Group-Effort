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
    // console.log(cityName, state, country, latLng, placeId, this.state.minDate, this.state.maxDate, this.props.index);
    this.props.updateCitiesInTrip(
      cityName,
      state,
      country,
      latLng,
      placeId,
      moment(this.state.minDate).format("MM/DD/YYYY"),
      moment(this.state.maxDate).format("MM/DD/YYYY"),
      this.props.index
    );
    this.toggleEdit();
  }

  render() {
    return (
      <div className="create-card-main">
        {this.state.edit === false ? null : (
          <div className="edit-trip-card-search">
            <div className="edit-trip-card-search-content">
              <CreateTripSearch
                source="createTripCard"
                updateTrip={this.updateTrip}
              />
              <div id="search-back-btn">
                <button onClick={() => this.toggleEdit()}>back</button>
              </div>
            </div>
          </div>
        )}
        <section className="create-trip-card-container">
          {/* check delete for cityId phrasing in the object */}

          <button
            id="create-trip-remove-btn"
            onClick={() => this.props.deleteCity(this.props.cityDetail.cityId)}
          >
            X
          </button>
          {this.props.cityDetail.cityName ? (
            <TextField
              onClick={() => this.toggleEdit()}
              id="text-field-default"
              value={this.props.cityDetail.cityName}
            />
          ) : (
            <TextField
              onClick={() => this.toggleEdit()}
              floatingLabelText="Pick a city"
              id="text-field-default"
              value={this.props.cityDetail.cityName}
            />
          )}

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
