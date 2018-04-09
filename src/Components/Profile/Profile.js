import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import {getUserInfo} from '../../ducks/reducer2';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(props) {
        this.props.getUserInfo()
    }


    render() {
        return(
            
            <div className="profile-info-container">Profile Page
                <div className="info-container">
                <p className="attributes">{this.props.userinfo.name}</p>
                </div>
                <div className="info-container">
                <p className="attributes">{this.props.userinfo.email}</p>
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