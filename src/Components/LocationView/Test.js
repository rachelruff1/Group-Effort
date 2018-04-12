import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import { connect } from "react-redux";
import "./LocationView.css";
import ParkCard from "../GooglePlacesAPI/ParkCard/ParkCard";
import MuseumCard from '../GooglePlacesAPI/MuseumCard/MuseumCard';
import FoodCard from "../GooglePlacesAPI/FoodCard/FoodCard";
import MallCard from "../GooglePlacesAPI/MallCard/MallCard";
import MovieCard from "../GooglePlacesAPI/MovieCard/MovieCard";
import { getPlaceimg, getUser } from "../../ducks/reducer1";
import Popup from "../Popup/Popup";

class LocationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.onclock = this.onclock.bind(this);
  }

  componentDidMount(props) {
    this.props.getPlaceimg(this.props.placephotoref);
    this.props.getUser();
  }
  onclock() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    // let img = document.createElement("img");
    // img.src = "data:image/jpeg;base64," + btoa(this.props.placeimg);
    // document.body.appendChild(img);

    return (
      <div className="location-body">
        <div className="location-title">
          <h1>
            {/* add conditinal  */}
            {this.props.city}, {this.props.state}, {this.props.country}
          </h1>
        </div>
        <div className="location-image">
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${
              this.props.placephotoref
            }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`}
          />
        </div>
        <div className="location-card-group">
          <ParkCard toggle={this.onclock} />
          <div>
            <MuseumCard toggle={this.onclock} />
          </div>

          <div>
            <FoodCard toggle={this.onclock} />
          </div>
          <div>
            <MallCard toggle={this.onclock} />
          </div>
          <div>
            <MovieCard toggle={this.onclock} />
          </div>
          {this.state.toggle === true ? <Popup toggle={this.onclock} /> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.reducer1.city,
    state: state.reducer1.state,
    country: state.reducer1.country,
    placephotoref: state.reducer1.placephotoref,
    placeimg: state.reducer1.placeimg
  };
}
export default connect(mapStateToProps, { getPlaceimg, getUser })(LocationView);
