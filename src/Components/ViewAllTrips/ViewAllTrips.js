import React, { Component } from "react";
import { createTrip, getAllTrips } from "../../ducks/reducer2";
import { connect } from "react-redux";
import CreateTripButton from "./CreateTripButton/CreateTripButton";
import IndividualTripCard from "../ViewAllTrips/IndividualTripCard/IndividualTripCard";

class ViewAllTrips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: [],
      tripName: "",
      destination: "",
      tripDates: "",
      current: [],
      future: [],
      past: [],
      id: 9
    };
  }

  componentDidMount() {
    this.props.getAllTrips(this.state.id).then(resp => {
      console.log(resp);
      this.setState({
        current: [resp.action.payload.current],
        future: [resp.action.payload.future],
        past: [resp.action.payload.past]
      });
    });
  }


  render() {
    console.log(this.state.future[0], this.state.current[0], this.state.past[0]);
    const futureTrips =
      this.state.future.length > 0 &&
      this.state.future[0].map((c, i) => <IndividualTripCard key={i} city={c} />);

    const pastTrips =
      this.state.past.length > 0 &&
      this.state.past[0].map((c, i) => <IndividualTripCard key={i} city={c} />);
    
    const currentTrips =
      this.state.current.length > 0 &&
      this.state.current[0].map((c, i) => <IndividualTripCard key={i} city={c} />);

    return (
      <div>
        <main>
            <h1>
                Current Trips
            </h1>
            {currentTrips}
            <h1>
                Future Trips
            </h1>
            {futureTrips}
            <h1>
                Past Trips
            </h1>
            {pastTrips}

          <CreateTripButton />
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getAllTrips
})(ViewAllTrips);
