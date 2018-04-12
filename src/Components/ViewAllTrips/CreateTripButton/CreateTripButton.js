import React, {Component} from "react";
import {Link} from 'react-router-dom';
import FlatButton from "material-ui/FlatButton";


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
                <Link to='create-trip'><FlatButton label="+ Create Trip" /></Link>
            </figure>
        </div>
    )
  }
}
export default AddToTrip;