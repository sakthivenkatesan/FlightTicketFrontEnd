import React, { useState } from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("User1");
  const [pwd, setPwd] = useState("user123");

  function login() {
    let isLogged = checkIfUserIsValid();
    if (isLogged) {
      console.log("m here");
      <Link to= "/user_home"></Link>
      navigate("/");
    } else {
      console.log("something went wrong");
    }
  }

  function checkIfUserIsValid() {
    let requestBody = {
      username: username,
      password: password,
    };
    if (username === user && password === pwd) return true;
    else return false;
  }
  return (
    <div>
      <form class = "box">
      <h1>Login</h1>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="username"
            data-testid="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            data-testid="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button id="submit" type="submit" onClick={login} >Login</button>
        {/* <p>
        {" "}
        Not an existing user??{" "}
        <Link to="/sign_up">
          <span id = "su"> Signup </span>
        </Link>
      </p> */}
      </form>
    </div>
  );
};

export default Login;