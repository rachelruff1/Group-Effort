import React from 'react';
import './ProfilePopOver.css';
import { Link } from 'react-router-dom';
import Login from "../Auth/Auth";
import Auth2 from "../Auth/Auth2";
import FloatingActionButton from 'material-ui/FloatingActionButton';

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
      <div className="profile-menu">
        {this.props.auth_status !== true ? (
          <div>
            <Login />
          </div>
        ) : (
          <div>
            <Auth2 />
          </div>
        )}
        <Link to="/view-all-trips" style={{ textDecoration: 'none' }}>
          <div className="drawer-link">View Your Trips</div>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <div className="drawer-link">Your Profile</div>
        </Link>
      </div>
    );
  }
 }
