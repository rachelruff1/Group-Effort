import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateSavedList,
  deleteFromSaved,
  spliceSaved
} from "../../ducks/reducer1";
import { sendAllData } from "../../ducks/reducer2";
import noimg from "../../Assets/Images/icon-no-image.svg";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./ApiCard.css";
// import "./FoodCard.css";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Popup from "../Popup/Popup";

class ApiCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      food: [],
      slectedcard: {},
      photoRef: "CoQBeQAAAAgOdveT3dRtzoJ42BTBZfCdZptWsqLN3bROkP4FVHNNX"
    };
    this.dostuff = this.dostuff.bind(this);
    this.onclock = this.onclock.bind(this);
  }

  onclock() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  dostuff() {
    this.onclock();
    this.props.updateSavedList(this.props.results);
  }

  render() {
    let styles = {
      maxWidth: 255,
      marginRight: "auto"
    };

    let rating;
    this.props.rating == undefined
      ? (rating = "")
      : (rating = this.props.rating);

    let button;

    if (this.props.location === "TripView") {
      button = (
        <button
          onClick={() => {
            this.props.sendAllData(
              this.props.tripId,
              this.props.results.name,
              rating,
              this.state.photoRef
            );
            swal("Added to trip!");
          }}>
          Add to saved</button>
      );
    } else if (this.props.location === "saved") {
      button = (
        <button
          onClick={() => {
            this.props.deleteFromSaved(this.props.results.saved_id);
            this.props.spliceSaved(this.props.index);
          }}>Remove</button>
      );
    } else if (this.props.auth === true) {
      button = (
        <button onClick={() => this.dostuff()}>Add to trip</button> 
      );
    } else {
      button = (
        <a href={process.env.REACT_APP_LOGIN}>
          <button>Log in to save" </button>
        </a>
      );
    }
    return (
      <div className="api-card-container">
       
          
            <img
              style={{ width: "175px" }}
              src={
                this.props.results.photos != undefined
                  ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                      this.props.results.photos[0].photo_reference
                    }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                  : noimg
              }
              alt=""
            />
          
          <h3>{this.props.results.name}</h3>
            <p>{
              this.props.results.rating != undefined
                ? this.props.results.rating
                : ""
            }
          </p>
    

          {button}
       
        {this.state.toggle === true ? (
          <Popup
            name={this.props.results.name}
            rating={this.props.results.rating}
            photoRef={this.state.photoRef}
            // {this.props.results.photos[0].photo_reference}
            toggle={this.onclock}

            // photoRef={this.props.results.photos[0].photo_reference}
          />
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    latlng: state.reducer1.latlng,
    food: state.reducer1.food
  };
}
export default connect(mapStateToProps, {
  updateSavedList,
  deleteFromSaved,
  sendAllData,
  spliceSaved
})(ApiCard);
