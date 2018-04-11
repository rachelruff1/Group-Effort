import React from "react";

const Auth2 = () => {
  return (
    <div className="auth">
      <div className="drawer-link-wrapper">
        <a href={process.env.REACT_APP_LOGOUT} className="drawer-link">Logout</a>
      </div>
    </div>
  );
};

export default Auth2;
