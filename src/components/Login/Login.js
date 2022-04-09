import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Please Login</h2>
      <form>
        <input type="text" placeholder="Name"></input>
        <br />
        <input type="email" placeholder="Email"></input>
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

export default Login;
