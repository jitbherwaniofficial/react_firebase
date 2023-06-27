import React, { useState } from "react";
import {app} from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };
  return (
    <div className="signup-page">
        <h1>SIGNUP PAGE</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default Signup;
