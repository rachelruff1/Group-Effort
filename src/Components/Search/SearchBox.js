import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updatePlaceId,
  updateLatLng,
  updateLocationData,
  updatePlacephotoref
} from "../../ducks/reducer1";
import SearchBar from "./SearchBar";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeId: "",
      latlng: "",
      city: "",
      state: "",
      country: "",
      photoref: ""
    };

    this.updatePlaceId = this.updatePlaceId.bind(this);
    this.updateLatLng = this.updateLatLng.bind(this);
    this.updateLocationData = this.updateLocationData.bind(this);
    this.updatePlacephotoref = this.updatePlacephotoref.bind(this);
  }

  updatePlaceId(placeId) {
    this.setState({
      placeId
    });
  }

  updateLatLng(latlng) {
    this.setState({
      latlng
    });
  }

  updateLocationData(city, state, country) {
    this.setState({
      city,
      state,
      country
    });
  }

  updatePlacephotoref(photoref) {
    this.setState({
      photoref
    });
  }

  saveData() {
    this.props.updatePlaceId(this.state.placeId);
    this.props.updatePlaceId(this.state.latlng);
    this.props.updateLocationData(
      this.state.city,
      this.state.state,
      this.state.country
    );
    this.props.updatePlacephotoref(this.state.photoref);
  }

  render() {
    console.log(this.state);
    return (
      <div className="search-and-go-bar">
        <div className="searchbar-container">
          <SearchBar
            updatePlaceId={this.updatePlaceId}
            updateLatLng={this.updateLatLng}
            updateLocationData={this.updateLocationData}
            updatePlacephotoref={this.updatePlacephotoref}
          />
        </div>
        <div className="go-button-container">
          {this.state.latlng ? (
            <Link to={`/location/${this.state.latlng}`}>
              <button onClick={() => this.saveData()}>Go</button>
            </Link>
          ) : (
            <button>Go</button>
          )}

          {/* <Link to={`/location/${this.state.latlng}`}>
          <button onClick={() => this.saveData()}>Go</button>
        </Link> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  latlng: state.reducer1.latlng
});

export default connect(mapStateToProps, {
  updatePlaceId,
  updateLatLng,
  updateLocationData,
  updatePlacephotoref
})(SearchBox);
