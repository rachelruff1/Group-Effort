import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePlaceId } from "../../ducks/reducer1";
import CitiesCard from "./CitiesCard/CitiesCard";

class Test extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.updatePlaceId(props.id);
  }

  render() {
    console.log(props);
    return <body />;
  }
}

const mapStatetoProps = state => state;
export default connect(mapStatetoProps, { updatePlaceId })(Test);
