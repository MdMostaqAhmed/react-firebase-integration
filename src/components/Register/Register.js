import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Plesae Register</h2>
      <form>
        <input type="text" placeholder="Name"></input>
        <br />
        <input type="email" placeholder="Email"></input>
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Register"></input>
      </form>
    </div>
  );
};

export default Register;
