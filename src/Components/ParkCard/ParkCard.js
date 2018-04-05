import React from "react";
import testimg from "../../Components/Home/home-img.jpg";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const ParkCard = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="name.of.park" subtitle="park.rateing" />}
    >
      <img src={testimg} alt="" />
    </CardMedia>
    <CardTitle title="Park.location/address" subtitle="park.hours" />
    <CardText>park.discription</CardText>
    <CardActions>
      <FlatButton label="Add to trip" />
      <FlatButton label="new" />
    </CardActions>
  </Card>
);

export default ParkCard;
