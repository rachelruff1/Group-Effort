import React, { Component } from "react";
import { connect } from "react-redux";
import { getCities } from "../../../ducks/reducer1";
import CitiesCard from "./CitiesCard";

class CitySideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripId: 1
    };
  }

  componentDidMount() {
    this.props.getCities(this.state.tripId);
  }
  render() {
    console.log(this.props.reducer1.cities);
        const citiesMap =
      this.props.reducer1.cities.length > 0 &&
      this.props.reducer1.cities.map((c, i) =>
        <CitiesCard key={i} city={c}/>
      );
    return(
        <div>{citiesMap}</div>
    )
   
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getCities })(CitySideBar);
