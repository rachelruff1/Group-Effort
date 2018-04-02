import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <nav>
                <div class="nav-desktop">
                    <img class="logo"/>
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
export default Header;
