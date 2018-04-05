import React, { Component } from "react";
import { TextField } from "material-ui";
import DatePicker from "material-ui/DatePicker";
import { connect } from "react-redux";
import CreateTripSearch from "./CreateTripSearch";

const optionsStyle = {
  maxWidth: 255,
  marginRight: "auto"
};

class CreateTripCard extends Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      cityDetail: {cityName: this.props.city, state: '', country: '', latLng: '', startDate: '', endDate: '', place_id: ''},
      startDate: "",
      endDate: "",
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
      edit: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
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

  render() {
    console.log(this);
    return (
      <div>
        {this.state.edit === false ? null : (
          <div>
              
            <CreateTripSearch /><button onClick={() => this.toggleEdit()}>back</button>
          </div>
        )}
        <section>
          {/*Trip name: "Trip to ..."*/}
          {/* <h3>{this.props.city}</h3> */}
          <TextField
            onClick={() => this.toggleEdit()}
            id="text-field-default"
            floatingLabelText="This will be city name"
            defaultValue={this.props.city}
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
            {/* <p>Destination: `${this.props.destination}`</p>
                        <p>Travel Dates: `${this.props.dates}`</p>
                            */}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.reducer1.city
});

export default connect(mapStateToProps, {})(CreateTripCard);
