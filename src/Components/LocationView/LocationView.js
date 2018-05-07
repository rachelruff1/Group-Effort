import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import "./LocationView2.css";
import {
  getPlaceimg,
  getUser,
  getFood,
  getParks,
  getMuseums,
  getMovie,
  getMall
} from "../../ducks/reducer1";
import ApiCard from "../ApiCard/ApiCard";

class LocationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth_status: true,
      test: "32.7766642,-96.79698789999998"
    };
  }

  componentDidMount(props) {
    this.props.getPlaceimg(this.props.placephotoref);
    this.props.getUser();
    this.props.getFood(this.props.latlng);
    this.props.getParks(this.props.latlng);
    this.props.getMuseums(this.props.latlng);
    this.props.getMovie(this.props.latlng);
     this.props.getMall(this.props.latlng);

    //replace this.state.test with this.props.match.params.id
  }

  render() {
    const parksMap =
      this.props.parks.length > 0 &&
      this.props.parks.map((c, i) => {
        return (
          <ApiCard
            key={i}
            results={c}
            index={i}
            auth={this.props.auth_status}
          />
        );
      });

    const foodMap =
      this.props.food.length > 0 &&
      this.props.food.map((c, i) => {
        return (
          <ApiCard
            key={i}
            results={c}
            index={i}
            auth={this.props.auth_status}
          />
        );
      });

    const museumsMap =
      this.props.museums.length > 0 &&
      this.props.museums.map((c, i) => {
        return (
          <ApiCard
            key={i}
            results={c}
            index={i}
            auth={this.props.auth_status}
          />
        );
      });

    const mallsMap =
      this.props.mall.length > 0 &&
      this.props.mall.map((c, i) => {
        return (
          <ApiCard
            key={i}
            results={c}
            index={i}
            auth={this.props.auth_status}
          />
        );
      });

    const moviesMap =
      this.props.movie.length > 0 &&
      this.props.movie.map((c, i) => {
        return (
          <ApiCard
            key={i}
            results={c}
            index={i}
            auth={this.props.auth_status}
          />
        );
      });
console.log('latlng', this.props.latlng, 'match', this.props, 'parks', this.props.parks)
    return (
      <div className="location-body">
        <div className="location-title">
          <h1>
            {/* add conditinal  */}
            {this.props.city}, {this.props.state}, {this.props.country}
          </h1>
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${
              this.props.placephotoref
            }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`}
            className="location-image" alt='no image'
          />
        </div>
        <div className="location-card-group" />
        <div className="location-view-ind-category">
          <h1>Parks</h1>
          <div className="location-cards">{parksMap}</div>
        </div>
        <div className="location-view-ind-category">
          <h1>Restaurants</h1>
          <div className="location-cards">{foodMap}</div>
        </div>
        <div className="location-view-ind-category">
          <h1>Museums</h1>
          <div className="location-cards">{museumsMap}</div>
        </div>
        <div className="location-view-ind-category">
          <h1>Malls</h1>
          <div className="location-cards">{mallsMap}</div>
        </div>
        <div className="location-view-ind-category">
          <h1>Movies</h1>
          <div className="location-cards">{moviesMap}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    parks: state.reducer1.parks,
    food: state.reducer1.food,
    movie: state.reducer1.movie,
    mall: state.reducer1.mall,
    museums: state.reducer1.museums,

    latlng: state.reducer1.latlng,
    city: state.reducer1.city,
    state: state.reducer1.state,
    country: state.reducer1.country,
    placephotoref: state.reducer1.placephotoref,
    placeimg: state.reducer1.placeimg,
    auth_status: state.reducer1.auth_status
  };
}
export default withRouter( connect(mapStateToProps, {
  getPlaceimg,
  getUser,
  getFood,
  getParks,
  getMuseums,
  getMovie,
  getMall
})(LocationView));
