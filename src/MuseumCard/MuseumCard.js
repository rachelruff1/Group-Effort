import React, { Component } from "react";
import { connect } from "react-redux";
import testimg from "../Components/Home/home-img.jpg";
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
                <img src={testimg} alt="" />
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
