import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import './ProfilePopOver.css';
import { NavLink } from 'react-router-dom';
import Login from "../Auth/Auth";
import Auth2 from "../Auth/Auth2";

export default class ProfilePopOver extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    
    
  }
  

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton className="profile-menu"
          onClick={this.handleClick}
          label=" + "
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
          {this.props.auth_status !== true? (<div><Login /></div>) : (<div><Auth2 /></div>)}
            <span className="drawer-link-wrapper"><NavLink to="/view-all-trips" className="drawer-link">View Your Trips</NavLink></span>
            <span className="drawer-link-wrapper"><NavLink to="/profile" className="drawer-link">Your Profile</NavLink></span>

          </Menu>
        </Popover>
      </div>
    );
  }
}