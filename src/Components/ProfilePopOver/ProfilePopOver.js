import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import "./ProfilePopOver.css";
import { Link } from "react-router-dom";
import Login from "../Auth/Auth";
import Auth2 from "../Auth/Auth2";

export default class ProfilePopOver extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClick = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        {this.props.auth_status !== true ? (
          <div>
            <Login />
          </div>
        ) : (
          <div>
            <Auth2 />
          </div>
        )}
        <Link to="/view-all-trips">
          <div className="drawer-link">>View Your Trips</div>
        </Link>
        <Link to="/profile">
          <div className="drawer-link">>Your Profile</div>
        </Link>
      </div>
    );
  }
}
