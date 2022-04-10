import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInWithGoogle}>Google Sign In</button>
      <br /> <br />
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
