import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import { connect } from "react-redux";
import "./LocationView.css";
import ParkCard from "../GooglePlacesAPI/ParkCard/ParkCard";
import MuseumCard from "../GooglePlacesAPI/MuseumCard/MuseumCard";
import FoodCard from "../GooglePlacesAPI/FoodCard/FoodCard";
import MallCard from "../GooglePlacesAPI/MallCard/MallCard";
// import MovieCard from "../GooglePlacesAPI/MovieCard/MovieCard";
import {
  getPlaceimg,
  getUser,
  getFood,
  getParks,
  getMuseums,
  getMovie,
  getMall
} from "../../ducks/reducer1";
import Popup from "../Popup/Popup";
import ApiCard from "../ApiCard/ApiCard";
import FlatButton from "material-ui/FlatButton";

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
    // this.props.getFood(this.state.test);
    // this.props.getParks(this.state.test);
    // this.props.getMuseums(this.state.test);
    // this.props.getMovie(this.state.test);
    //  this.props.getMall(this.state.test);

    //replace this.state.test with this.props.match.params.id
  }

  render() {
    const parksMap =
      this.props.parks.length > 0 &&
      this.props.parks.map((c, i) => {
        console.log(c);
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
        console.log(c);
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
        console.log(c);
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
        console.log(c);
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
        console.log(c);
        return (
          <ApiCard
            key={i}
            results={c}
            index={i}
            auth={this.props.auth_status}
          />
        );
      });

    return (
      <div className="location-body">
        <div className="location-title">
          <h1>
            {/* add conditinal  */}
            {this.props.city}, {this.props.state}, {this.props.country}
          </h1>
        </div>
        <div>
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${
              this.props.placephotoref
            }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`}
            className="location-image"
          />
        </div>
        <div className="location-card-group">
          {/* <ParkCard  /> */}
<<<<<<< HEAD
          <h1>Parks</h1>
          <div className="park-cards">            
           {parksMap}
           </div>
           <h1>Restaurants</h1>
           <div className="food-cards">
           {foodMap}
           </div>
           <h1>Museums</h1>
           <div className="museum-cards">
           {museumsMap}
           </div>
           <h1>Malls</h1>
           <div className="mall-cards">           
           {mallsMap}
           </div>
           <h1>Movies</h1>
           <div className="movie-cards">           
           {moviesMap}
           </div>
           
          
=======
          <div>
            <h1>Parks</h1>
            {parksMap}
            <h1>Restaurants</h1>
            {foodMap}
            <h1>Museums</h1>
            {museumsMap}
            <h1>Malls</h1>
            {mallsMap}
            <h1>Movies</h1>
            {moviesMap}
          </div>
>>>>>>> master
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

    city: state.reducer1.city,
    state: state.reducer1.state,
    country: state.reducer1.country,
    placephotoref: state.reducer1.placephotoref,
    placeimg: state.reducer1.placeimg,
    auth_status: state.reducer1.auth_status
  };
}
export default connect(mapStateToProps, {
  getPlaceimg,
  getUser,
  getFood,
  getParks,
  getMuseums,
  getMovie,
  getMall
})(LocationView);
