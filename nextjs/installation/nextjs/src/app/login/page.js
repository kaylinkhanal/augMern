// import React from "react";

const login = () => {
  return (
    <div className="login">
      <p>
        User Name: <input placeholder="Enter your name" />
      </p>
      <p>
        Password: <input placeholder="Enter your password" />
      </p>
      <p className="loginbtn">
        <button>Login</button>
      </p>
      <p>
        Don't have an account? <a href="/register">SignUp</a>
      </p>
    </div>
  );
};

export default login;
