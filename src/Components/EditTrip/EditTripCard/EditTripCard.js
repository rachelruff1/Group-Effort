import React, { Component } from "react";
import { TextField } from "material-ui";
import DatePicker from "material-ui/DatePicker";
import { connect } from "react-redux";
import {
  updateCitiesInTrip,
  addDatesToCities,
  updateStartDate,
  updateEndDate
} from "../../../ducks/reducer1";
import CreateTripSearch from "../../ViewAllTrips/CreateTrip/SearchBars/CreateTripSearch";
import "../../ViewAllTrips/CreateTrip/CreateTripCard.css";
import moment from "moment";
import EditTrip from "../EditTrip";

const optionsStyle = {
  maxWidth: 255,
  marginRight: "auto"
};

class EditTripCard extends Component {
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

//   componentDidMount(props) {
//     this.props.addDatesToCities(
//       this.state.minDate,
//       this.state.maxDate,
//       this.props.index
//     );
//   }

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
          <TextField
            onClick={() => this.toggleEdit()}
            id="text-field-default"
            value={
              this.props.cityDetail.city_name
                
            }
            // {(this.state.cityName) ? this.state.cityName : 'no state'}
            // {(this.state.cityName) ? this.state.cityName : this.props.cityName}
          />
          <div style={optionsStyle}>
            <DatePicker
              value={this.props.cityDetail.start_date}
              onChange={this.handleChangeMinDate}
              formatDate={date => moment(date).format("ddd, MMM D")}
            />
            <DatePicker
              value={this.props.cityDetail.start_date}
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
  updateEndDate
})(EditTripCard);
