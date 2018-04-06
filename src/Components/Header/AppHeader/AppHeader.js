import React, { Component } from "react";
import "./AppHeader.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Search from "../../Search/Search";
import { getProfile } from "../../../ducks/reducer1";
import AppDrawer from "./Drawer.js";
import { Link } from "react-router-dom";
import test2 from '../../Logo/trippie_logo.png';
import Login from '../../Auth/Auth';
import MenuExampleSimple from './dropdown';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }
  componentDidMount() {
    this.props.getProfile();
  }

  toggleDropDown(){
    this.setState({
      toggle: !(this.state.toggle)
    })
  }
  render() {
    console.log(this.state.toggle);
    return (
      <header className="app-header">
<<<<<<< HEAD
      <img className="user-photo" src={this.props.picture} onClick={()=>this.toggleDropDown()} />
      
      
      {this.props.picture && <img className="user-photo" src={this.props.picture} onClick={()=>this.toggleDropDown()} />}
      
=======
      {this.props.picture && <img className="user-photo" src={this.props.picture} />}
      <div className="login-buttons">
>>>>>>> master
      <Login/>
      </div>
      <Link to='/'><img className="logo" src={test2} alt="logo" /></Link>
        <div className="navbar">
          <div className="responsive-nav">
            <AppDrawer />
            {this.state.toggle == true ?  <MenuExampleSimple /> : null}
            
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