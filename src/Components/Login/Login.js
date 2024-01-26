import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../olx-logo.png";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log("logged in");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="100px" height="100px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button type="submit" onClick={onLogin}>
            Login
          </button>
        </form>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>
          Signup
        </div>
      </div>
    </div>
  );
}

export default Login;
