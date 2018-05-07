import React, { Component } from "react";
import "./Header.css";
import { connect } from "react-redux";
import Search  from "../../Search/SearchBox";
import { getProfile, verifyUser } from "../../../ducks/reducer1";
import { Link, withRouter } from "react-router-dom";
import test2 from "../../Logo/trippie_logo.png";
import ProfilePopOver from "../../ProfilePopOver/ProfilePopOver";
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
    console.log(this.props.location.pathname);

    return (
      <header className="app-header">
       

        <div className="logo-div">
          <Link to="/">
            <img className="logo" src={test2} alt="logo" />
          </Link>
        </div>

      <div className="search-bar-user-photo">
          <div className="search-bar-div">
              {this.props.location.pathname == "/" ? <div></div> :<div className="header-search"> <Search/>  </div>}
          </div>

          <div className="user-div">
            <img className="user-photo"
                src={this.props.auth_status !== true ? noUser  : this.props.picture }
                onClick={() => this.toggleDropDown()} alt='no image' />
            {this.state.toggle == true ? <ProfilePopOver toggle={this.toggleDropDown} auth_status={this.props.auth_status}/> : null}
          </div>
       </div>


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
