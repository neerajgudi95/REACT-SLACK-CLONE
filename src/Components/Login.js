import { Button } from "@material-ui/core";
import React from "react";
import "../CSS/Login.css";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login__page">
      <div className="login">
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt="logo"
        />
        <div className="intro">
          <h1>SIGN INTO SLACK WORKSPACE</h1>
          <p>A place where you can dicuss any technologies of your choice</p>
        </div>
        <Button onClick={signIn}>SIGN IN WITH GOOGLE</Button>
      </div>
    </div>
  );
};

export default Login;
