import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { getProfile } from "../../ducks/reducer1";


class Header extends Component {
constructor(props) {
    super(props);
}

componentDidMount() {
    this.props.Getprofile();

    
}

    render() {
        return (
            <nav>
                <div class="nav-desktop">
                    <img class="logo" src={require("../../Assets/Images/Logo.png")} alt=""/>
                    <img src={this.state.image}/>
                    {/* <img class="profile-photo" href="profile.picture" /> */}
                    <div class="nav-links-desktop">
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
  })(Header);
