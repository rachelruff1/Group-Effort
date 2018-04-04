import React, {Component} from 'react';
import { TextField } from 'material-ui';


class MyTripCard extends Component{
    render(){
        return(
           
            <div>
                <section>
                    {/*Trip name: "Trip to ..."*/}
                    <h2>Trip to `${this.props.city}` </h2>
                 
                    <div>
                        <p>Destination: `${this.props.destination}`</p>
                        <p>Travel Dates: `${this.props.dates}`</p>
                           
                    </div>
                </section>
            </div>
        )
    }
}
export default MyTripCard;