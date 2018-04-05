import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { createNewTrip } from "../../../ducks/reducer2";
import CreateTripCard from "./CreateTripCard";
import SearchBox from "../../Search/SearchBox";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      cities: '',
      tripName: ''
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateTripName = this.updateTripName.bind(this);
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

componentDidMount(){
    this.updateTripName(this.props.city);
}


  updateTripName(city) {
      console.log('hit');
      this.setState({
          tripName: city
      })
  }

  render() {
      console.log(this.state);
    const style = {
      margin: 12
    };
    const createTripCardMap = {};

    return this.state.edit === false ? (
      
        // {this.state.edit === false ? null : (
        //     <div className="searchBox">
        //       <SearchBox />
        //       <button onClick={() => this.toggleEdit()}>back</button>
        //     </div>
        //   )}


      <div>
        <TextField
          id="text-field-default"
          floatingLabelText="Trip name"
          defaultValue={`Trip to ${this.state.tripName}`}
        />
        <CreateTripCard />
        {/* {createTripCardMap} */}
        <RaisedButton
          onClick={()=>this.toggleEdit()}
          label="+ ADD DESTINATION"
          style={style}
        />
        <RaisedButton
          onClick={this.props.createNewTrip}
          label="DONE"
          style={style}
        />
      </div>
    ) : (
      <div className='searchBox'>
      <SearchBox/><button onClick={()=>this.toggleEdit()}>back</button>
      </div> 
    );
  }
}
const mapStateToProps = state => ({
  city: state.reducer1.city
});

export default connect(mapStateToProps, { createNewTrip })(CreateTrip);
