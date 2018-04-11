import React, { Component } from "react";
import { connect } from "react-redux";
import noimg from "../../Assets/Images/icon-no-image.svg";
import { getParks } from "../../ducks/reducer1";
import "./ParkCard.css";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
class ParkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    };
  }

  componentDidMount(props) {
    // this.props.getParks(this.props.latlng);
  }

  render() {
    console.log(this.props.parks, "&&&&&&&&&&&#####");
    return (
      <div className="parkcards">
        <p>Parks:</p>
        {this.props.parks.length > 0 &&
          this.props.parks.map((parks, i) => (
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title={
                      this.props.parks[i] != undefined
                        ? this.props.parks[i].name
                        : ""
                    }
                  />
                }
              >
                <img
                  src={noimg}
                  // src={
                  //   this.props.parks[i].photos != undefined
                  //     ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                  //         this.props.parks[i].photos[0].photo_reference
                  //       }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                  //     : noimg
                  // }
                  alt=""
                />
              </CardMedia>
              <CardTitle
                title={
                  this.props.parks[i] != undefined
                    ? this.props.parks[i].rating
                    : ""
                }
                subtitle=""
              />
              <CardText />
              <CardActions>
                <FlatButton label="Add to trip" />
                <FlatButton label="new" />
                {console.log(
                  this.props.parks[i],
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
    parks: state.reducer1.parks,
    latlng: state.reducer1.latlng
  };
}
export default connect(mapStateToProps, { getParks })(ParkCard);
