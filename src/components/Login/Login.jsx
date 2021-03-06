import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  // signIn function
  const SignIn = event => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/");
      })
      .catch(error => alert(error.message));
  };
  // Register function
  const Register = event => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // when user successful create so then method run.
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            onClick={SignIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={Register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
