import React, { Component } from "react";
import { connect } from "react-redux";
import parkimg from "../../Assets/Images/p.jpg";
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
    this.props.getParks(this.props.latlng).then(res => {
      this.setState({ parks: this.props.parks });
    });
  }

  render() {
    return (
      <div className="parkcards">
        <p>Parks:</p>
        {this.props.parks.length > 0 &&
          this.props.parks.map((parks, i) => (
            <Card>
              
                  <div className="card-name">{
                      this.props.parks[i] != undefined
                        ? this.props.parks[i].name
                        : ""
                    }
                  </div>
              
                <img src={parkimg} className="park-img" alt="" />
              
              <div className="card-title">{
                  this.props.parks[i] != undefined
                    ? this.props.parks[i].rating
                    : ""
                }
                </div>
              <CardText />
              <div>
                <button className="add-button">Add to trip</button>
                <button className="new-button">New</button>
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
