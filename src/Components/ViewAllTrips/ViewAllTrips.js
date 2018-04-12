import React, { Component } from "react";
import { createTrip, getAllTrips } from "../../ducks/reducer2";
import { connect } from "react-redux";
import CreateTripButton from "./CreateTripButton/CreateTripButton";
import IndividualTripCard from "../ViewAllTrips/IndividualTripCard/IndividualTripCard";
import { Link } from "react-router-dom";
import "./ViewAllTrips.css";
import FlatButton from "material-ui/FlatButton";

class ViewAllTrips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: [],
      tripName: "",
      destination: "",
      tripDates: "",
      id: 9,
      toggle: true
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.getAllTrips(this.state.id);
  }
toggle(){
    this.setState({
        toggle: !(this.state.toggle)
    })
}

  render() {
    const status = 'new';
    console.log(this.props.future, this.props.current, this.props.past);
    const futureTrips =
      this.props.future.length > 0 &&
      this.props.future.map((c, i) => <IndividualTripCard key={i} city={c} index={i} toggle={this.toggle}/>);

    const pastTrips =
      this.props.past.length > 0 &&
      this.props.past.map((c, i) => <IndividualTripCard key={i} city={c} index={i} toggle={this.toggle}/>);
    
    const currentTrips =
      this.props.current.length > 0 &&
      this.props.current.map((c, i) => <IndividualTripCard key={i} city={c} index={i} toggle={this.toggle}/>);
console.log('future', futureTrips, 'past', pastTrips, 'current', currentTrips, )
    return (
      <div className="trips-main">
        <main className="trips-body">
            <h1 className="trips-title">MY TRIPS</h1>

            {/* {currentTrips === false && futureTrips === false && pastTrips === false ? <div><h2>
                You have no trips. 
            </h2></div> : null} */}

            {currentTrips === false ? null : <div><h2>
                Current Trips
            </h2>
            {currentTrips}</div>}
            {futureTrips === false ? null : <div><h2>
                Future Trips
            </h2>
            {futureTrips}</div>}
            {pastTrips === false ? null : <div><h2>
                Past Trips
            </h2>
            {pastTrips}</div>}


<Link to={`/create-trip/${status}`}><button>+ Create Trip</button></Link>

          {/* <CreateTripButton /> */}
        </main>
      </div>
    );
  }
}



const mapStateToProps = state => ({
    current: state.reducer2.current,
    future: state.reducer2.future,
    past: state.reducer2.past
  });

export default connect(mapStateToProps, {
  getAllTrips
})(ViewAllTrips);
