import React, { Component } from "react";
import "./Popup1.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer1";
import { getAllTrips, sendAllData } from "../../ducks/reducer2";
import swal from "sweetalert";
import axios from "axios";
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["dallas", "austin", "more", "more2", "more3"],
      name2: "this. place. name. 2",
      id: 9,
      allTrips: [],
      tripId: ""
    };
    this.saveTrip = this.saveTrip.bind(this);
    this.sendAllData = this.saveTrip.bind(this);
  }
  componentDidMount(props) {
    this.props.getAllTrips(this.props.user);
  }
  saveTrip(tripId) {
    this.setState({
      tripId: tripId
    });
  }

  render() {
    let rating;
    this.props.rating == undefined
      ? (rating = "")
      : (rating = this.props.rating);

    const tripsMap =
      this.props.allTrips.length > 0 &&
      this.props.allTrips.map((c, i) => {
        return <option value={c.trip_id}>{c.trip_name}</option>;
      });
    return (
      <div className="popup">
        <div className="box">
          <div className="stuffinbox">
            <button className="close" onClick={() => this.props.toggle()}>
              {" "}
              Close
            </button>
            <div className='popup-content'>
            <h1 id="tripto">Create New Trip</h1>{" "}
            <Link to="/create-trip/location">
              <button className="popupbtn-new">+ Create New</button>
              {/* save the card to reducser and create trip*/}
            </Link>
            {this.props.allTrips == false ? (
              <div />
            ) : (
              <div className="select-existing">
                <section className="container">
                  <p>Or Select Existing</p>
                  <div className="dropdown">
                    <select
                      onChange={e => this.saveTrip(e.target.value)}
                      className="dropdown-select"
                    >
                      <option value="">Select…</option>
                      {tripsMap}
                    </select>
                  </div>
                </section>
                <Link to={`/location-details/${this.state.tripId}`}>
                  <button
                    className="popupbtn"
                    onClick={() => {
                      this.props.sendAllData(
                        this.state.tripId,
                        this.props.name,
                        rating,
                        this.props.photoRef
                      );
                      swal("Added to trip!");
                    }}
                  >
                    {/* 
                  this.props.name, this.props.rating, this.props.photos, this.props.results.photos[0].photo_reference
                  redirect to the TripView page
                  add to the database this.props.saved
                  
                  take to trip view and add to database for that trip  
                  
                  
                  */}
                    Go
                  </button>
                </Link>
                
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.reducer1.user,
    allTrips: state.reducer2.allTrips
  };
}
export default connect(mapStateToProps, { getUser, getAllTrips, sendAllData })(
  Popup
);
