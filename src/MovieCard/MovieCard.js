import React, { Component } from "react";
import { connect } from "react-redux";
import noimg from "../Assets/Images/icon-no-image.svg";
import { getMovie } from "../ducks/reducer1";
import "./MovieCard.css";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movie: []
    };
  }

  componentDidMount(props) {
    // this.props.getMovie(this.props.latlng);
  }

  render() {
    return (
      <div className="Moviecards">
        <p>movie theaters :</p>
        {this.props.movie.length > 0 &&
          this.props.movie.map((movie, i) => (
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title={
                      this.props.movie[i] != undefined
                        ? this.props.movie[i].name
                        : ""
                    }
                  />
                }
              >
                <img
                  src={noimg}
                  // src={
                  //   this.props.movie[i].photos != undefined
                  //     ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                  //         this.props.movie[i].photos[0].photo_reference
                  //       }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                  //     : noimg
                  // }
                  alt=""
                />
              </CardMedia>
              <CardTitle
                title={
                  this.props.movie[i] != undefined
                    ? this.props.movie[i].rating
                    : ""
                }
                subtitle=""
              />
              <CardText />
              <CardActions>
                <FlatButton label="Add to trip" />
                <FlatButton label="new" />
                {console.log(this.props.movie[i], "movie")}
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
    movie: state.reducer1.movie
  };
}
export default connect(mapStateToProps, { getMovie })(MovieCard);
