import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../layouts/Navbar.jsx";
import "./auth.css";
import axios from "axios";
export default function Register({ setData }) {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [isConfirm, setIsConfirm] = useState({
    repassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => <Navigate to="/" />)
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <div className="auth">
        <form className="authContainerR" onSubmit={handleSubmit}>
          <div className="authBox">
            <label>Username</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            ></input>
          </div>
          <div className="authBox">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            ></input>
          </div>
          <div className="authBox">
            <label>Re-enter Password</label>
            <input
              type="password"
              name="repassword"
              onChange={(e) => setIsConfirm(e.target.value)}
            ></input>
          </div>
          <div className="authButton">
            <button>Upload Photo</button>
          </div>
          <div className="authButtons">
            <Link to="/login" className="authNext">
              <button>Login</button>
            </Link>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}
