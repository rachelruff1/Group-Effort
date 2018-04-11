import React, { Component } from "react";
import { connect } from "react-redux";
import noimg from "../Assets/Images/icon-no-image.svg";
import { getMuseums } from "../ducks/reducer1";
import "./MuseumCard.css";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
class MuseumCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      museums: []
    };
  }

  componentDidMount(props) {
    this.props.getMuseums(this.props.latlng).then(res => {
      this.setState({ museums: this.props.museums });
    });
  }

  render() {
    return (
      <div className="Museumcards">
        <p>museums:</p>
        {this.props.museums.length > 0 &&
          this.props.museums.map((museums, i) => (
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title={
                      this.props.museums[i] != undefined
                        ? this.props.museums[i].name
                        : ""
                    }
                  />
                }
              >
                <img
                  src={
                    this.props.museums[i].photos != undefined
                      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                          this.props.museums[i].photos[0].photo_reference
                        }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                      : noimg
                  }
                  alt=""
                />
              </CardMedia>
              <CardTitle
                title={
                  this.props.museums[i] != undefined
                    ? this.props.museums[i].rating
                    : ""
                }
                subtitle=""
              />
              <CardText />
              <CardActions>
                <FlatButton label="Add to trip" />
                <FlatButton label="new" />
                {console.log(
                  this.props.museums[i],
                  "44444adsfasdfasdfasdfsfghhgjfgjkghjkljh"
                )}
              </CardActions>
            </Card>
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    museums: state.reducer1.museums,
    latlng: state.reducer1.latlng
  };
}
export default connect(mapStateToProps, { getMuseums })(MuseumCard);
