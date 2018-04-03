import React, {Component} from "react";
import {createTrip} from "../../ducks/reducer2";
import {connect} from 'react-redux'

import MyTripCard from "../MyTripCard/MyTripCard";
import AddToTrip from "../AddToTrip/AddToTrip";


class CreateTrip extends Component{
    constructor(props){
        super(props);

        this.state = {
            tripName = "",
            destination = "",
            tripDates = ""
        }

        //bindings
        this.updateTripName = this.updateTripName.bind(this);
        this.updateDestinaton = this.updateDestinaton.bind(this);
        this.updateTripDates = this.updateTripDates.bind(this);  
    }

    //componentDidMount?

    //handlers
    updateTripName(e){
        return this.setState({
            tripName: e
        });
    }

    updateDestinaton(e){
        return this.setState({
            destination: e
        });
    }

    updateTripDates(e){
        return this.setState({
            tripDates: e
        });
    }

render(){
    return(
        <div>
            <main>
                <h2>You have no trips planned... you should do something about that...</h2>
                <AddToTrip/>
            </main>
        </div>
    )
  }
}
export default CreateTrip;