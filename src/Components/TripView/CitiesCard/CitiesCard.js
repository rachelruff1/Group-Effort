import React from 'react';

const CitiesCard = props => {
    // console.log(props);
    return (
        <div>
            <h3>{props.city.city_name}</h3>
            <p>{props.city.start_date} - {props.city.end_date}</p>
        </div>
    )
}

export default CitiesCard;