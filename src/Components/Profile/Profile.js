import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { getUserInfo, updateProfile } from "../../ducks/reducer2";
import axios from "axios";
import TextField from "material-ui/TextField";
import noUser from "../../Assets/Images/defaultuser2.png";
import { getProfile, verifyUser } from "../../ducks/reducer1";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testE: "r@r.com",
      testU: "ruffy101",
      email: this.props.userinfo.email,
      username: this.props.userinfo.name,
      toggle: false
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(props) {
    this.props.getProfile();
    this.props.verifyUser();
    
    this.props.getUserInfo().then(resp =>
      this.setState({
        email: this.props.userinfo.email,
        username: this.props.userinfo.name
      })
    );
  }
  updateEmail(e) {
    this.setState({
      email: e
    });
  }
  updateUserName(e) {
    this.setState({
      username: e
    });
  }
  toggle() {
    this.setState({
      toggle: true
    });
  }
  render() {
    console.log(this.state.toggle, "userInfo:", this.props.userinfo);
    return (
      <div className="profile-shell">
        <div className="profile-info-container">
          <h3>Your Profile Information</h3>
          <div className="info-container">
          <img className="user-photo-main"
            src={this.props.auth_status !== true ? noUser  : this.props.picture }/>
            <TextField className="email-field"
              value={this.state.email}
              onClick={() => this.toggle()}
              onChange={e => this.updateEmail(e.target.value)}
              floatingLabelText="Email"
            />
            <br />
            <TextField className="username-field"
              value={this.state.username}
              onClick={() => this.toggle()}
              onChange={e => this.updateUserName(e.target.value)}
              floatingLabelText="Username"
            />
            <br />
            <br />
            <br />
            <br />
            <br />

            {this.state.toggle === false ? null : (
              <button
                onClick={() => {
                    console.log(this.state.email, this.state.username)
                  this.props.updateProfile(
                    this.state.email,
                    this.state.username
                  )}
                }
              >sumbit</button>
            )}
            
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userinfo: state.reducer2.userinfo,
    picture: state.reducer1.picture,
    auth_status: state.reducer1.auth_status
  };
}
export default connect(mapStateToProps, { getUserInfo, updateProfile, getProfile, verifyUser })(
  Profile
);
