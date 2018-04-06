import React, {Component} from "react";
import {Link} from 'react-router-dom';



class AddToTrip extends Component{
    constructor(props){
        super(props);


        //bindings
    }

    //componentDidMount?

    //handlers

render(){
    return(
        <div>
            <figure>
                <Link to='create-trip'><button>+ CREATE TRIP</button></Link>
            </figure>
        </div>
    )
  }
}
export default AddToTrip;