import React from "react";

const Auth2 = () => {
  return (
    <div className="auth">
      <div className="drawer-link">
        <a href={process.env.REACT_APP_LOGOUT} style={{ textDecoration: 'none', color: 'rgb(255, 255, 255)'}}>Logout</a>
      </div>
    </div>
  );
};

export default Auth2;
