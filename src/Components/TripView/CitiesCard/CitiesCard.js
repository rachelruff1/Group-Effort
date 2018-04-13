import React, { Component } from "react";
import {connect} from 'react-redux';
import { getCityDetail } from "../../../ducks/reducer1";
import './CitiesCard.css';

class CitiesCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div onClick={() => this.props.updateCityByIndex(this.props.index, this.props.city.city_name)} className='cities-card-trip-view-container'>
        <h3 >
          {this.props.city.city_name}
        </h3>
        <p>
          {this.props.city.start_date} - {this.props.city.end_date}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getCityDetail })(CitiesCard);
