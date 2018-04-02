import React, { Component } from 'react';
import './AppHeader.css';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { getProfile } from "../../../ducks/reducer1";
import AppDrawer from "./Drawer.js";


class AppHeader extends Component {
constructor(props) {
    super(props);
}

componentDidMount() {
    this.props.getProfile();

    
}
    render() {
        return (
            <nav>
                <div className="nav-desktop">
                    <img class="logo" src={require("../../../Assets/Images/Logo.png")} alt=""/>
                    
                    
                    <div className="nav-links-desktop">
                        <NavLink to="/" class="nav-links-desktop">Home</NavLink>
                    </div>
                </div> 
                <NavLink to="/" class="nav-mobile">
                    <img class="logo"/>
                    <NavLink exact to="/" class="nav-link-mobile">Home</NavLink>
                </NavLink>
            </nav>
        )
    }

}
function mapStateToProps(state) {
    return {
      image: state.reducer1.image
    };
  }
  
  export default connect(mapStateToProps, {
    getProfile
  })(AppHeader);
