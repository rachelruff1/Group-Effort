import React, { Component } from "react";
import { connect } from "react-redux";
import testimg from "../Components/Home/home-img.jpg";
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
                <img src={testimg} alt="" />
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
