import React, { useCallback, useContext, useState } from "react";
import "./SignIn.css";
import { NavLink } from "react-router-dom";
import { Home } from "../HomePage/home";
import { mediaContext } from "../../context/mediaContext";
mediaContext;

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Implement your authentication logic here
    console.log("Sign In:", { username, password });
  };

  return (
    <div className="signInContainer">
      <h2 className="signInHeader">Sign In</h2>
      <form>
        <label className="signInLabel">
          Username:
          <input
            className="signInInput"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className="signInLabel">
          Password:
          <input
            className="signInInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="signInButton" type="button" onClick={handleSignIn}>
          <NavLink to="/Home"> Sign In </NavLink>
        </button>
      </form>
    </div>
  );
};
