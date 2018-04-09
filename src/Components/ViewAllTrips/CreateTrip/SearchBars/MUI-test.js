import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

/**
 * `DatePicker` can be implemented as a controlled input,
 * where `value` is handled by state in the parent component.
 */
export default class DatePickerExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear());
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear());
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      controlledDate: null,
      minDate: minDate,
      maxDate: maxDate
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

  render() {
    //   let momentDate = moment(this.state.controlledDate);
    let testing =new Date('10/10/1995');
      console.log(testing);
      console.log(this.state.controlledDate, 'newdate', new Date());
    return (
      <DatePicker
        hintText="Controlled Date Input"
        value={testing}
            // this.state.controlledDate === null ? this.state.minDate : this.state.controlledDate}
        onChange={this.handleChange}
        formatDate={(date) => moment(date).format('ddd, MMM D')}
      />
    );
  }
}