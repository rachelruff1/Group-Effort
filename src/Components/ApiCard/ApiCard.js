import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSavedList } from "../../ducks/reducer1";
import noimg from "../../Assets/Images/icon-no-image.svg";
import { Link } from "react-router-dom";
// import "./FoodCard.css";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Popup from "../Popup/Popup";

class ApiCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      food: [],
      slectedcard: {}
    };
    this.dostuff = this.dostuff.bind(this);
    this.onclock = this.onclock.bind(this);
  }

  onclock() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  dostuff() {
    console.log("hit apicard", this.props.results);
    this.onclock();
    this.props.updateSavedList(this.props.results);
  }

  render() {
<<<<<<< HEAD
      let styles = {
        maxWidth: 255,
        marginRight: 'auto',
        
      };
      console.log(this.props.results);
=======
    let styles = {
      maxWidth: 255,
      marginRight: "auto"
    };
    console.log(this.props.results);
>>>>>>> master
    return (
      <div className="Foodcards">
        <Card styles={styles}>
          <CardHeader title={this.props.results.name} />
          <CardMedia>
            <img
              src={
                this.props.results.photos != undefined
                  ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                      this.props.results.photos[0].photo_reference
                    }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                  : noimg
              }
              alt=""
            />
          </CardMedia>
          <CardTitle
            title={
              this.props.results.rating != undefined
                ? this.props.results.rating
                : ""
            }
          />
          <CardActions>
            {this.props.auth === true ? (
              <FlatButton onClick={() => this.dostuff()} label="Add to trip" />
            ) : (
              <Link to="/auth">
                <FlatButton label="Log in to save" />
              </Link>
            )}
          </CardActions>
        </Card>
        {this.state.toggle === true ? (
          <Popup
            name={this.props.results.name}
            rating={this.props.results.rating}
            photos={this.props.results.photos}
            toggle={this.onclock}
            // photoRef={this.props.results.photos[0].photo_reference}
          />
        ) : null}
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
export default connect(mapStateToProps, { updateSavedList })(ApiCard);
