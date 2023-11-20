import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar.jsx";
import "./auth.css";
export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="auth">
        <form className="authContainerL">
          <div className="authBox">
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div className="authBox">
            <label>Password</label>
            <input type="password"></input>
          </div>
          <div className="authButtons">
            <button type="submit">Login</button>
            <Link to="/register" className="authNext">
              <button>Signup</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
