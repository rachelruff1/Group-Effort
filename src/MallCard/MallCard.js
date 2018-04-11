import React, { Component } from "react";
import { connect } from "react-redux";
import noimg from "../Assets/Images/icon-no-image.svg";
import { getMall } from "../ducks/reducer1";
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
      mall: []
    };
  }

  componentDidMount(props) {
    this.props.getMall(this.props.latlng).then(res => {
      this.setState({ mall: this.props.mall });
    });
  }

  render() {
    return (
      <div className="Mallcards">
        <p>malls:</p>
        {this.props.mall.length > 0 &&
          this.props.mall.map((mall, i) => (
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title={
                      this.props.mall[i] != undefined
                        ? this.props.mall[i].name
                        : ""
                    }
                  />
                }
              >
                <img
                  src={
                    this.props.mall[i].photos != undefined
                      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                          this.props.mall[i].photos[0].photo_reference
                        }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                      : noimg
                  }
                  alt=""
                />
              </CardMedia>
              <CardTitle
                title={
                  this.props.mall[i] != undefined
                    ? this.props.mall[i].rating
                    : ""
                }
                subtitle=""
              />
              <CardText />
              <CardActions>
                <FlatButton label="Add to trip" />
                <FlatButton label="new" />
                {console.log(this.props.mall[i], "mall")}
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
    mall: state.reducer1.mall
  };
}
export default connect(mapStateToProps, { getMall })(FoodCard);
