import React from "react";
import { connect } from "react-redux";
import { editTrip, deleteTrip } from "../../../ducks/reducer2";

const IndividualTripCard = props => {
  console.log(props.index);
  return (
    <div>
      <h3>{props.city.trip_name}</h3>
      <p>
        {props.city.start_date} - {props.city.end_date}
      </p>
      <button onClick={() => props.editTrip(props.city.trip_id)}>Edit</button>
      <button onClick={() => {props.deleteTrip(props.city.trip_id); 
    //   props.toggle();
        window.location.reload();
        }}>
        Delete
      </button>
    </div>
  );
};

let mapStateToProps = state => state;

export default connect(mapStateToProps, { editTrip, deleteTrip })(
  IndividualTripCard
);
