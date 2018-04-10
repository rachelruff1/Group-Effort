import React, { Component } from "react";

const IndividualTripCard = props => {
    console.log(props)
    return(
        <div>
            <h2>{props.city.trip_name}</h2>
            <p>{props.city.start_date} - {props.city.end_date}</p>
        </div>
    )
}

export default IndividualTripCard;