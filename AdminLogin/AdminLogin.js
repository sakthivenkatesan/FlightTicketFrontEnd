import React, { useState } from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css"
const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("Monika");
  const [pwd, setPwd] = useState("Monika123");

  function login() {
    let isLogged = checkIfUserIsValid();
    if (isLogged) {
      console.log("m here");
      navigate("/home");
    } else {
      console.log("something went wrong");
    }
  }

  function checkIfUserIsValid() {
    let requestBody = {
      username: username,
      password: password,
    };
    // axios.post('xsnnxksxx',requestBody).then((res) => {

    // })
    if (username === user && password === pwd) return true;
    else return false;
  }
  return (
    <div>
      <form class="box2">
      <h2>Admin Login</h2>
        <div>
          <label>Admin id</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="username"
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={login} id="submit2" class="btn" >Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;