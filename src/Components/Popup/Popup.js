import React, { Component } from "react";
import "./Popup.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer1";
import { getAllTrips } from "../../ducks/reducer2";
class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ["dallas", "austin", "more", "more2", "more3"],
      name2: "this. place. name. 2",
      id: 9,
      allTrips: []
    };
  }

  componentDidMount(props) {
    this.props.getAllTrips(this.props.user);
  }

  getUsersTrips() {}

  render() {
    console.log(this.props.user, this.props.allTrips, "!!!!!!!");
    return (
      <div className="popup">
        <div className="box">
          <div className="stuffinbox">
            <button onClick={() => this.props.toggle()}> Close</button>
            <p id="tripto">Add to existing trip or create a new trip</p>{" "}
            <Link to="/create-trip">
              <button className="popupbtn">+ Create New</button>
              {/* save the card to reducser and create trip*/}
            </Link>
            {this.props.allTrips == false ? (
              <div />
            ) : (
              <div>
                <section class="container">
                  <p>Select Existing</p>
                  <div class="dropdown">
                    <select name="one" class="dropdown-select">
                      <option value="">Select…</option>
                      {this.props.allTrips.map((name, i) => (
                        <option value="1">{name.trip_name}</option>
                      ))}
                    </select>
                  </div>
                </section>

                <button
                  className="popupbtn"
                  onClick={name => console.log(this.props.name, "~~~~~~~~~~")}
                >
                  {/* take to trip view and add to database for that trip  */}
                  Go
                </button>
              </div>
            )}
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
export default connect(mapStateToProps, { getUser, getAllTrips })(Popup);
