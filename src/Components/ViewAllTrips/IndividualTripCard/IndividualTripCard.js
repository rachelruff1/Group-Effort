import React from "react";
import { connect } from "react-redux";
import { deleteTrip } from "../../../ducks/reducer2";
import {Link} from 'react-router-dom';

const IndividualTripCard = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.city.trip_name}</h3>
      <p>
        {props.city.start_date} - {props.city.end_date}
      </p>
      <Link to={`/edit-trip/${props.city.trip_id}`}><button>Edit</button></Link>
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

export default connect(mapStateToProps, { deleteTrip })(
  IndividualTripCard
);
