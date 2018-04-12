import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import {getUserInfo} from '../../ducks/reducer2';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.userinfo.email,
      username: this.props.userinfo.name
    }
  }

  componentDidMount(props) {
    this.props.getUserInfo()
  }

  handleInputChange(event) {
    // set variable to name of input
    const n = event.target.name

    // set variable to value of input
    const v = event.target.value

    // set state to whatever is the name
    // (in this case, it's either "email" or "username"
    this.setState({
      [n]: v
    })
  }

  handleSubmit() {
    // here you can access the values of the inputs through this.state
    const username = this.state.username
    const email = this.state.email

    // Then update your DB with these values.
  }

  render() {
    return(
      <div className="profile-shell">
        <div className="main-content-wrapper">
          <div className="profile-info-container">
            <h3>Your Profile Information</h3>
            <div className="info-container">
              <form onSubmit={this.handleSubmit}>
                <input name="email" value={this.state.email} onChange={this.handleInputChange} />
                <input name="username" value={this.state.username} onChange={this.handleInputChange} />
              </form>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    userinfo: state.reducer2.userinfo
  };
}
export default connect(mapStateToProps, { getUserInfo })(Profile);