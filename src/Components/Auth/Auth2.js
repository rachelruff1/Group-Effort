import React from "react";

const Auth2 = () => {
  return (
    <div className="auth">
      <div className="authbox">
        <a href={process.env.REACT_APP_LOGOUT} className="auth-button">Logout</a>
      </div>
    </div>
  );
};

export default Auth2;
