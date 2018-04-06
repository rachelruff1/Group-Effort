import React, { Component } from "react";
import { TextField } from "material-ui";
import DatePicker from "material-ui/DatePicker";
import { connect } from "react-redux";
import { updateCityInTrip } from "../../../ducks/reducer2";
import CardSearch from "./SearchBars/CardSearch";
import "./CreateTripCard.css";

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
      startDate: "",
      endDate: "",
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
      edit: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateTrip = this.updateTrip.bind(this);
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date
    });
  };

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  updateTrip(cityName, state, country, latLng, placeId) {
    console.log(cityName, state, country, latLng, placeId, this.props.index);
    this.props.updateCityInTrip(cityName, state, country, latLng, placeId, this.props.index);
  }

  render() {
    console.log(this);
    return (
      <div>
        {this.state.edit === false ? null : (
          <div>
            <CardSearch updateTrip={this.updateTrip} />
            <button onClick={() => this.toggleEdit()}>back</button>
          </div>
        )}
        <section className="create-trip-card-container">
          <TextField
            onClick={() => this.toggleEdit()}
            id="text-field-default"
            floatingLabelText="This will be city name"
            defaultValue={this.props.cityName}
          />
          <div style={optionsStyle}>
            <DatePicker
              onChange={this.handleChangeMinDate}
              autoOk={this.state.autoOk}
              floatingLabelText="Start Date"
              defaultDate={this.state.minDate}
              disableYearSelection={this.state.disableYearSelection}
            />
            <DatePicker
              onChange={this.handleChangeMaxDate}
              autoOk={this.state.autoOk}
              floatingLabelText="End Date"
              defaultDate={this.state.maxDate}
              disableYearSelection={this.state.disableYearSelection}
            />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { updateCityInTrip })(CreateTripCard);
