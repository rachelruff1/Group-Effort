import React, { Component } from "react";
import ApiCard from "../../ApiCard/ApiCard";
import { connect } from "react-redux";
import "./CategoryDisplay.css";

class CategoryDisplay extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      cards: {}
    };
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
            auth="true"
            location="TripView"
            tripId={this.props.tripId}
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
            auth="true"
            location="TripView"
            tripId={this.props.tripId}
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
            auth="true"
            location="TripView"
            tripId={this.props.tripId}
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
            auth="true"
            location="TripView"
            tripId={this.props.tripId}
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
            auth="true"
            location="TripView"
            tripId={this.props.tripId}
          />
        );
      });
    const savedMap = 
    this.props.savedFromDatabase.length > 0 &&
      this.props.savedFromDatabase.map((c, i) => {
        console.log(c);
        return (
          <ApiCard
            key={i}
            results={c}
            index={i}
            auth="true"
            location="saved"
            update={this.props.update}
          />
        );
      });

    let cards;
    if (this.props.container === "Saved") {
      cards = savedMap;
    } else if (this.props.container === "Restaurants") {
      cards = foodMap;
    } else if (this.props.container === "Parks") {
      cards = parksMap;
    } else if (this.props.container === "Theaters") {
      cards = moviesMap;
    } else if (this.props.container === "Museums") {
      cards = museumsMap;
    } else if (this.props.container === "Shopping") {
      cards = mallsMap;
    } else null;

    return (
      <div className='category-main'>
        <div className="test-category-display">
          <h1 onClick={() => this.props.toggleView()}>{this.props.city}</h1>{" "}
          -> {this.props.container}
        </div>
        {cards}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  placeDetail: state.reducer2.placeDetail,
  test: state.reducer2.test,
  trip: state.reducer1.trip,
  cities: state.reducer1.cities,
  placeId: state.reducer1.placeId,
  latlng: state.reducer1.latlng,
  savedFromDatabase: state.reducer1.savedFromDatabase,

  parks: state.reducer1.parks,
  food: state.reducer1.food,
  movie: state.reducer1.movie,
  mall: state.reducer1.mall,
  museums: state.reducer1.museums,
  update: state.reducer1.update
});

export default connect(mapStateToProps)(CategoryDisplay);
