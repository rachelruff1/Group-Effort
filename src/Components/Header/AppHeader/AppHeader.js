import React, { Component } from "react";
import "./AppHeader.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Search  from "../../Search/SearchBox";
import { getProfile, verifyUser } from "../../../ducks/reducer1";
import { Link, withRouter } from "react-router-dom";
import test2 from "../../Logo/trippie_logo.png";
import Login from "../../Auth/Auth";
import ProfilePopOver from "../../ProfilePopOver/ProfilePopOver";
import Profile from "../../Profile/Profile";
import Auth2 from "../../Auth/Auth2";
import noUser from "../../../Assets/Images/defaultuser2.png";
import Home from "../../Home/Home";

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
    console.log(this.props.location.pathname);
    return (
      <header className="app-header">
        <div className="login-buttons">
              {this.props.location.pathname == "/" ? <div></div> :<div className="header-search"> <Search/>  </div>}
          <Link to="/">
            <img className="logo" src={test2} alt="logo" />
          </Link>
          <div className="navbar">
            <div className="responsive-nav">
              {/* <Search /> */}
            </div>
          </div>
        </div>
        <img className="user-photo"
            src={this.props.auth_status !== true ? noUser  : this.props.picture }
            onClick={() => this.toggleDropDown()} />
        {this.state.toggle == true ? <ProfilePopOver auth_status={this.props.auth_status}/> : null}
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
export default withRouter( connect(mapStateToProps, {
  getProfile, verifyUser
})(AppHeader));
