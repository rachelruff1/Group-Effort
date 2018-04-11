import React, { Component } from "react";
import { connect } from "react-redux";
import noimg from "../../Assets/Images/icon-no-image.svg";
import { getParks } from "../../ducks/reducer1";
import "./DummyCard.css";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
class DummyCard extends Component {
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
        
            <Card>
              
                  <div className="card-name">
                  PARK NAME
                  </div>
                }
              <div className="park-img">
                <img src='home-img.jpg' alt="" height="50"/>
              </div>
              <div className="card-title">5.9
                </div>
              <div>
                <button className="add-button">Add to trip</button>
                <button className="new-button">New</button>
                
              </div>
            </Card>
          
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
export default connect(mapStateToProps, { getParks })(DummyCard);