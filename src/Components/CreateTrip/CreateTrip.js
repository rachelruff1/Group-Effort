import React, {Component} from "react";
import {createTrip} from "../../ducks/reducer2";
import {connect} from 'react-redux'

import MyTripCard from "../MyTripCard/MyTripCard";
import AddToTrip from "../AddToTrip/AddToTrip";



class CreateTrip extends Component{
    constructor(props){
        super(props);

        this.state = {
            trip: [],
            tripName: "",
            destination: "",
            tripDates: ""
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

    checkForTrip(){
        this.state.tripName !== "" &&
        this.state.destination !== "" &&
        this.state.tripDates !== ""
        ? this.props
            .createTrip(
                this.props.match.params.id,
                this.state.tripName,
                this.state.destination,
                this.state.tripDates
            )
            .then(alert("Trip Added!"))
            .then(response =>
              this.props.history.push(`/tripView/${this.props.match.params.id}`)
            )
            :alert("Create a trip!");
    }

render(){
    console.log(this)

    // const {
    //     updateTripName,
    //     updateDestinaton,
    //     updateTripDates
    // } = this;

    // const tripId = this.props.match.params.id;

    let newTrip = this.state.trip.length > 0 && this.state.trip.map((val, i)=>{
        return <MyTripCard
                plannedTrip={val}
                updateTripName={this.updateTripName}
                />

    })
    
    return(
        <div>
            <main>
                <h2>You have no trips planned... you should do something about that...</h2>
                {this.state.trip.length > 0 && <h1>test</h1>}
                {newTrip}
                <AddToTrip/>
                
            </main>
        </div>
    )
  }
}
export default CreateTrip;