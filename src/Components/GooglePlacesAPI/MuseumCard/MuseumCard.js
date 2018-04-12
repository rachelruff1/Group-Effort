import React, { Component } from "react";
import { connect } from "react-redux";
import noimg from "../../../Assets/Images/icon-no-image.svg";
import { getMuseums, updateMuseumCard } from "../../../ducks/reducer1";
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
      museums: [],
      slectedcard: {}
    };
  }

  componentDidMount(props) {
    // this.props.getMuseums(this.props.latlng);
  }

  dostuff(props) {
    console.log(this.state.slectedcard, ">>>>>>>>>><<<<<<<<<");
    this.props.updateMuseumCard(this.state.slectedcard);
    this.props.toggle();
  }

  render() {
    return (
      <div className="Museumcards">
        <p>museums:</p>
        {this.props.museums.length > 0 &&
          this.props.museums.map((museums, i) => (
            <Card>
              <div className="museum-name">
                {this.props.museums[i] != undefined
                  ? this.props.museums[i].name
                  : ""}
              </div>

              <div>
                <img
                  src={noimg} className="museum-img"
                  // src={
                  //   this.props.museums[i].photos != undefined
                  //     ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
                  //         this.props.museums[i].photos[0].photo_reference
                  //       }&key=AIzaSyCPGaO_f0TOLoIghVFObSvX5Yl6SR8Uvko`
                  //     : noimg
                  // }
                  alt=""
                />
              </div>
              <div className="museum-title">
                {this.props.museums[i] != undefined
                  ? this.props.museums[i].rating
                  : ""}
              </div>

              <div className="museum-buttons">
                <button
                  className="add-button"
                  onFocus={() => this.setState({ slectedcard: museums })}
                  onClick={() => this.dostuff()}
                >
                  Add to trip
                </button>

                {console.log(
                  this.props.museums[i],
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
    museums: state.reducer1.museums,
    latlng: state.reducer1.latlng
  };
}
export default connect(mapStateToProps, { getMuseums, updateMuseumCard })(
  MuseumCard
);
