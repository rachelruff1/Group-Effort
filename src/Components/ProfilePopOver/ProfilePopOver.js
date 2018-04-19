import React from "react";
import "./PopOver.css";
import { Link } from "react-router-dom";
import Login from "../Auth/Auth";
import Auth2 from "../Auth/Auth2";
import FloatingActionButton from "material-ui/FloatingActionButton";

export default class ProfilePopOver extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }


  toggleMenu(){
    this.setState({
      open: !(this.state.open)
    })
  }
  // handleClick = event => {
  //   // This prevents ghost click.
  //   event.preventDefault();

  //   this.setState({
  //     open: true,
  //     anchorEl: event.currentTarget
  //   });
  // };

  // handleRequestClose = () => {
  //   this.setState({
  //     open: false
  //   });
  // };

  render() {

    return (
      <div onClick={()=>this.toggleMenu()} className="profile-menu">
        {this.props.auth_status !== true ? (
          <div>
            <Login />
          </div>
        ) : (
          <div>
            <Auth2 />
            <div className="drawer-link">
              <Link to="/view-all-trips" style={{ textDecoration: "none" }}>
                <span onClick={()=>this.props.toggle()}>View Your Trips</span>
              </Link>
            </div>
            <br />
            <div className="drawer-link">
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <span onClick={()=>this.props.toggle()}>Your Profile</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
