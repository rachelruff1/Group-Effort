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
    console.log("hit apicard", this.props.results);
    this.onclock();
    this.props.updateSavedList(this.props.results);
  }

  render() {
    let styles = {
      maxWidth: 255,
      marginRight: "auto"
    };

    console.log(this.props.results);

    let rating;
    this.props.rating == undefined
      ? (rating = "")
      : (rating = this.props.rating);

    let button;

    if (this.props.location === "TripView") {
      button = (
        <FlatButton
          onClick={() => {
            this.props.sendAllData(
              this.props.tripId,
              this.props.results.name,
              rating,
              this.state.photoRef
            );
            swal("Added to trip!");
          }}
          label="Add to saved"
        />
      );
    } else if (this.props.location === "saved") {
      button = (
        <FlatButton
          onClick={() => {
            this.props.deleteFromSaved(this.props.results.saved_id);
            this.props.spliceSaved(this.props.index);
          }}
          label="Remove"
        />
      );
    } else if (this.props.auth === true) {
      button = (
        <FlatButton onClick={() => this.dostuff()} label="Add to trip" />
      );
    } else {
      button = (
        <a href={process.env.REACT_APP_LOGIN}>
          <FlatButton label="Log in to save" />
        </a>
      );
    }
    return (
      <div className="api-card-container">
        <Card style={{ width: "200px", margin: "20px" }}>
          <CardMedia>
            <img
              style={{ width: "200px" }}
              src={
                this.props.results.photos != undefined
                  ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                      this.props.results.photos[0].photo_reference
                    }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                  : noimg
              }
              alt=""
            />
          </CardMedia>
          <CardTitle
            title={this.props.results.name}
            subtitle={
              this.props.results.rating != undefined
                ? this.props.results.rating
                : ""
            }
          />
          <CardTitle />

          <CardActions>{button}</CardActions>
        </Card>
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
