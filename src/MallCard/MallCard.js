import React, { Component } from "react";
import { connect } from "react-redux";
import noimg from "../Assets/Images/icon-no-image.svg";
import { getMall, updateMallCard } from "../ducks/reducer1";
import "./MallCard.css";
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
      mall: [],
      slectedcard: {}
    };
  }

  componentDidMount(props) {
    // this.props.getMall(this.props.latlng);
  }
  dostuff(props) {
    console.log(this.state.slectedcard, ">>>>>>>>>><<<<<<<<<");
    this.props.updateMallCard(this.state.slectedcard);
    this.props.toggle();
  }

  render() {
    return (
      <div className="Mallcards">
        <p>malls:</p>
        {this.props.mall.length > 0 &&
          this.props.mall.map((mall, i) => (
            <Card>
              <div className="mall-name">
                {this.props.mall[i] != undefined ? this.props.mall[i].name : ""}
              </div>
              <div>
                <img
                  src={noimg} className="mall-img"
                  // src={
                  //   this.props.mall[i].photos != undefined
                  //     ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                  //         this.props.mall[i].photos[0].photo_reference
                  //       }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                  //     : noimg
                  // }
                  alt=""
                />
              </div>
              <div className="mall-title">
                {this.props.mall[i] != undefined
                  ? this.props.mall[i].rating
                  : ""}
              </div>

              <div className="mall-buttons">
                <button
                  className="add-button"
                  onFocus={() => this.setState({ slectedcard: mall })}
                  onClick={() => this.dostuff()}
                >
                  Add to trip
                </button>
                {console.log(this.props.mall[i], "mall")}
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
    mall: state.reducer1.mall
  };
}
export default connect(mapStateToProps, { getMall, updateMallCard })(FoodCard);
