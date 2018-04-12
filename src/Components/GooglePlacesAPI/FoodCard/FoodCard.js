import React, { Component } from "react";
import { connect } from "react-redux";
import noimg from "../../../Assets/Images/icon-no-image.svg";
import { getFood, updateFoodCard } from "../../../ducks/reducer1";
import "./FoodCard.css";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      slectedcard: {}
    };
  }

  componentDidMount(props) {
    // this.props.getFood(this.props.latlng);
  }

  dostuff(props) {
    console.log(this.state.slectedcard, ">>>>>>>>>><<<<<<<<<");
    this.props.updateFoodCard(this.state.slectedcard);
    this.props.toggle();
  }
  render() {
    return (
      <div className="Foodcards">
        <p>food:</p>
        {this.props.food.length > 0 &&
          this.props.food.map((food, i) => (
            <Card>
              <div className="food-name">
                {this.props.food[i] != undefined ? this.props.food[i].name : ""}
              </div>
              <div className="food-img">
                <img
                  src={noimg}
                  // src={
                  //   this.props.food[i].photos != undefined
                  //     ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                  //         this.props.food[i].photos[0].photo_reference
                  //       }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                  //     : noimg
                  // }
                  alt=""
                />
              </div>
              <div>
                {this.props.food[i] != undefined
                  ? this.props.food[i].rating
                  : ""}
              </div>

              <div className="food-buttons">
                <button
                  className="add-button"
                  onFocus={() => this.setState({ slectedcard: food })}
                  onClick={() => this.dostuff()}
                >
                  Add to trip
                </button>
                {console.log(this.props.food[i], "food")}
              </div>
            </Card>
          ))}
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
export default connect(mapStateToProps, { getFood, updateFoodCard })(FoodCard);
