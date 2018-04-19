import React, { Component } from "react";
import { connect } from 'react-redux';
import { getCityDetail } from "../../../ducks/reducer1";
import './CitiesCard2.css';

class CitiesCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div class-name='cities-card-overview'>
        <div onClick={() => this.props.updateCityByIndex(this.props.index, this.props.city.city_name)} className='cities-card-trip-view-container'>

          {this.props.city.city_name === this.props.homeCity ? <h3 className='hidden-underline' style={{ textDecoration: "underline rgb(46, 63, 136)" }}>

            {this.props.city.city_name}

          </h3> : <h3 className='hidden-underline'>

              {this.props.city.city_name}

            </h3>}


          <p>
            {this.props.city.start_date} - {this.props.city.end_date}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getCityDetail })(CitiesCard);
