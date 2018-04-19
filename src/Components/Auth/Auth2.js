import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { logout } from "../../ducks/reducer1";

const Auth2 = (props) => {
  return (
    <div className="auth">
      <div className="drawer-link">
        <Link to='/' ><p onClick={()=>{props.logout(); window.location.reload();}}>Logout</p></Link>
        {/* <a href={process.env.REACT_APP_LOGOUT} style={{ textDecoration: 'none', color: 'rgb(255, 255, 255)'}}>Logout</a> */}
      </div>
    </div>
  );
};
let mapStateToProps = state => state;

export default connect(mapStateToProps, { logout })(Auth2);
