import React from "react";
import { connect } from "react-redux";
import { deleteTrip } from "../../../ducks/reducer2";
import {Link} from 'react-router-dom';
import FlatButton from "material-ui/FlatButton";

const IndividualTripCard = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.city.trip_name}</h3>
      <p>
        {props.city.start_date} - {props.city.end_date}
      </p>
      <Link to={`/edit-trip/${props.city.trip_id}`}><FlatButton label="+ Edit" labelStyle={{color: 'rgb(255, 255, 255)', fontSize: '75%'}} /></Link>
      <FlatButton label="+ Delete" labelStyle={{color: 'rgb(255, 255, 255)', fontSize: '75%'}} onClick={() => {props.deleteTrip(props.city.trip_id); 
    //   props.toggle();
        window.location.reload();
        }} />
      
    </div>
  );
};

let mapStateToProps = state => state;

export default connect(mapStateToProps, { deleteTrip })(
  IndividualTripCard
);
