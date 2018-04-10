import React, { Component } from "react";
import "./AppHeader.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Search from "../../Search/SearchBox";
import { getProfile, verifyUser } from "../../../ducks/reducer1";
import AppDrawer from "./Drawer.js";
import { Link } from "react-router-dom";
import test2 from "../../Logo/trippie_logo.png";
import Login from "../../Auth/Auth";
import ProfilePopOver from "../../ProfilePopOver/ProfilePopOver";
import Profile from "../../Profile/Profile";
import Auth2 from "../../Auth/Auth2";
import noUser from "../../../Assets/Images/defaultuser2.png";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }
  componentDidMount() {
    this.props.getProfile();
    this.props.verifyUser();
  }

  toggleDropDown() {
    //console.log(this.state.toggle);
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    console.log(this.props);
    return (
      <header className="app-header">
      {this.props.auth_status !== true? (
      <div><Login /></div>) : <div><Auth2 /></div>}
        <div className="login-buttons">
          <Link to="/">
            <img className="logo" src={test2} alt="logo" />
          </Link>
          <div className="navbar">
            <div className="responsive-nav">
              <AppDrawer />
            </div>
          </div>
        </div>
        
          <img
            className="user-photo"
            src={this.props.auth_status !== true ? noUser  : this.props.picture }
            onClick={() => this.toggleDropDown()}
          />
        
        {this.state.toggle == true ? <ProfilePopOver /> : null}
      </header>
    );
  }
}
function mapStateToProps(state) {
  return {
    picture: state.reducer1.picture,
    auth_status: state.reducer1.auth_status
  };
}
export default connect(mapStateToProps, {
  getProfile, verifyUser
})(AppHeader);
