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
    return (
      <div className="parkcards">
        <p>Parks:</p>
        {this.props.parks.length > 0 &&
          this.props.parks.map((parks, i) => (
            <Card>              
                  <div className="park-name">{
                      this.props.parks[i] != undefined
                        ? this.props.parks[i].name
                        : ""
                    }
                  </div>                
              <div className="park-img">
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
              </div>
              <div className="park-title">{
                  this.props.parks[i] != undefined
                    ? this.props.parks[i].rating
                    : ""
                }
                </div>
              
              <div className="park-buttons">
                <button className="add-button">Add to trip</button>
                {console.log(
                  this.props.parks[i],
                  "44444adsfasdfasdfasdfsfghhgjfgjkghjkljh"
                )}
              </div>
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
