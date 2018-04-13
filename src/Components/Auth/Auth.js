import React from "react";
import "../ProfilePopOver/ProfilePopOver.css"

const Auth = () => {
  return (
    <div className="auth">
      <div className="drawer-link">
        <a href={process.env.REACT_APP_LOGIN} style={{ textDecoration: 'none', color: 'rgb(255, 255, 255)'}}>Login</a>
        </div>
    </div>
  );
};

export default Auth;
