import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { getUserInfo } from "../../ducks/reducer2";
import axios from "axios";
import TextField from "material-ui/TextField";

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
    this.props.getUserInfo().then(resp=>this.setState({
    email:this.props.userinfo.email,
    username:this.props.userinfo.name
    }))
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
  toggle(){
      this.setState({
          toggle: true
      })
  }

  render() {
      console.log(this.state.toggle, 'userInfo:', this.props.userinfo);
    return (
      <div className="profile-shell">
        <div className="profile-info-container">
          <h3>Your Profile Information</h3>
          <div className="info-container">
            <TextField
              value={this.state.email}
              onClick={()=>this.toggle()}
              onChange={e => this.updateEmail(e.target.value)}
              floatingLabelText="Email"
            /><br />
            <TextField
              value={this.state.username}
              onClick={()=>this.toggle()}
              onChange={e => this.updateUserName(e.target.value)}
              floatingLabelText="Username"
            /><br/>
            
            {this.state.toggle === false? null : <input
              type="submit"
              value="Submit"
            //   onClick={() =>
            //     this.props.updateProfile(this.state.email, this.state.username)
              
            />}
            
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userinfo: state.reducer2.userinfo
  };
}
export default connect(mapStateToProps, { getUserInfo })(Profile);
