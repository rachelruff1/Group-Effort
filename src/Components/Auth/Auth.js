import React from "react";

const Auth = () => {
  return (
    <div className="auth">
      <div className="drawer-link-wrapper">
        <a href={process.env.REACT_APP_LOGIN} className="drawer-link">Login</a>
        </div>
    </div>
  );
};

export default Auth;
