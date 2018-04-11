import React, { Component } from "react";
import { connect } from "react-redux";
import noimg from "../Assets/Images/icon-no-image.svg";
import { getFood } from "../ducks/reducer1";
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
      food: []
    };
  }

  componentDidMount(props) {
    // this.props.getFood(this.props.latlng);
  }

  render() {
    return (
      <div className="Foodcards">
        <p>food:</p>
        {this.props.food.length > 0 &&
          this.props.food.map((food, i) => (
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title={
                      this.props.food[i] != undefined
                        ? this.props.food[i].name
                        : ""
                    }
                  />
                }
              >
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
              </CardMedia>
              <CardTitle
                title={
                  this.props.food[i] != undefined
                    ? this.props.food[i].rating
                    : ""
                }
                subtitle={"food price level " + this.props.food[i].price_level}
              />
              <CardText />
              <CardActions>
                <FlatButton label="Add to trip" />
                <FlatButton label="new" />
                {console.log(this.props.food[i], "food")}
              </CardActions>
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
export default connect(mapStateToProps, { getFood })(FoodCard);
