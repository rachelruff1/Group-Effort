import React from "react";
import { connect } from "react-redux";
import { deleteTrip } from "../../../ducks/reducer2";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import "./IndividualTripCard.css";

const IndividualTripCard = props => {
  console.log(props);
  return (
    <div className="ind-trip-card-body">
      <div className="ind-trip-card-content">
        <Link
          to={`/location-details/${props.city.trip_id}`}
          style={{ textDecoration: "none" }}
        >
          <h3>{props.city.trip_name}</h3>
          <p>
            {props.city.start_date} - {props.city.end_date}
          </p>
        </Link>
        <div className='ind-trip-card-btns'>
        <Link
          to={`/edit-trip/${props.city.trip_id}`}
          style={{ textDecoration: "none" }}
        >
        
          <button className='long-button-edit'>+ Edit</button>
        </Link>
        <button className='long-button-delete'
          onClick={() => {
            props.deleteTrip(props.city.trip_id);
            window.location.reload();
          }}
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = state => state;

export default connect(mapStateToProps, { deleteTrip })(IndividualTripCard);
