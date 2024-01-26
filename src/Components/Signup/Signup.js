import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Logo from "../../olx-logo.png";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // user.updateProfile({ displayName: username });
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img
          className="form-logo"
          width="100px"
          height="100px"
          src={Logo}
        ></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input"
            type="text"
            id="fname"
            name="username"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button type="submit" onClick={onSubmit}>
            Signup
          </button>
        </form>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
          Login
        </div>
      </div>
    </div>
  );
}
