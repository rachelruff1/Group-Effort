import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../Search/SearchBox";
import { connect } from "react-redux";
import ParkCard from "../ParkCard/ParkCard";
import MuseumCard from "../../MuseumCard/MuseumCard";
import FoodCard from "../../FoodCard/FoodCard";
import MallCard from "../../MallCard/MallCard";
import MovieCard from "../../MovieCard/MovieCard";
import { getPlaceimg } from "../../ducks/reducer1";

class LocationView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    this.props.getPlaceimg(this.props.placephotoref);
  }

  render() {
    // let img = document.createElement("img");
    // img.src = "data:image/jpeg;base64," + btoa(this.props.placeimg);
    // document.body.appendChild(img);

    return (
      <div className="LocationView">
        <div className="SearchbaronLocation">
          <SearchBox />

          <h1>
            {/* add conditinal  */}
            {this.props.city},{this.props.state},{this.props.country}
          </h1>
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
              this.props.placephotoref
            }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`}
          />
        </div>

        <ParkCard />
        <div>
          <MuseumCard />
        </div>
        <div>
          <FoodCard />
        </div>
        <div>
          <MallCard />
        </div>
        <div>
          <MovieCard />
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
export default connect(mapStateToProps, { getPlaceimg })(LocationView);
