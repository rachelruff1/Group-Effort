import React, { Component } from "react";
import { TextField } from "material-ui";
import DatePicker from "material-ui/DatePicker";
import { connect } from "react-redux";
import { updateCitiesInTrip, addDatesToCities, updateStartDate, updateEndDate } from "../../../ducks/reducer1";
import CreateTripSearch from "./SearchBars/CreateTripSearch";
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
      test: "2018-04-08T05:00:00.000Z",
      cityName: "",
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
      edit: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateTrip = this.updateTrip.bind(this);
    // this.setCityName = this.setCityName.bind(this);
  }

  componentDidMount(props) {
    // this.addDate(this.state.minDate);
    this.props.addDatesToCities(this.state.minDate, this.state.maxDate, this.props.index);
  }


  // componentWillReceiveProps(props) {
   
  //     this.toggleEdit()
  
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
    console.log(this.props);
    // this.props.cityName === this.state.cityName? null :
    // this.setCityName(this.props.cityName);
    return (
      <div>
        {this.state.edit === false ? null : (
          <div>
            
            <CreateTripSearch source='createTripCard' updateTrip={this.updateTrip} />
            <button onClick={() => this.toggleEdit()}>back</button>
          </div>
        )}
        <section className="create-trip-card-container">
          <TextField
            onClick={() => this.toggleEdit()}
            id="text-field-default"
            floatingLabelText="This will be city name"
            defaultValue={(this.props.cityDetail.cityName) ?(this.props.cityDetail.cityName) : null}
            // {(this.state.cityName) ? this.state.cityName : 'no state'}
            // {(this.state.cityName) ? this.state.cityName : this.props.cityName}
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
            <button onClick={()=>this.addDate()}>Add Dates</button>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { updateCitiesInTrip, addDatesToCities, updateStartDate, updateEndDate })(CreateTripCard);
