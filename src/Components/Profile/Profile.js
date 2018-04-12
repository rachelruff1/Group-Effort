import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import {getUserInfo} from '../../ducks/reducer2';
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";

class Profile extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(props) {
        this.props.getUserInfo()
    }


    render() {
        return(
        <div className="profile-shell">    
            <div className="main-content-wrapper">
                <div className="profile-info-container">
                    <h3>Your Profile Information</h3>
                    <div className="info-container">
                      <NameForm />
                      <p className="attributes">{this.props.userinfo.name}</p>
                      <EmailForm />
                      <p className="attributes">{this.props.userinfo.email}</p> 
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