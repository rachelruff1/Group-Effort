import React, { Component } from "react";
import "./AppHeader.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Search from "../../Search/Search";
import { getProfile } from "../../../ducks/reducer1";
import AppDrawer from "./Drawer.js";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";


class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    console.log(this.props)
    return (
      <header className="app-header">  
      {this.props.picture && <img className="user-photo"  src={this.props.picture} /> }
      <Logo/>  
      <Link to="/Auth">
          <button className="authbutton">Login</button>
        </Link>
        <div className="navbar">
          <div className="responsive-nav">
            <AppDrawer />
          </div>
        </div>
      </header>
    );
  }
}
function mapStateToProps(state) {
  return {
    picture: state.reducer1.picture
  };
}

export default connect(mapStateToProps, {
    getProfile
})(AppHeader);
