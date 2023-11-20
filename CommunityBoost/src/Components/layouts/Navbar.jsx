import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navTitle">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>
            Community<span>Boost</span>
          </h2>
        </Link>
      </div>
      <div className="navProfile">
        <img
          src="https://images.unsplash.com/photo-1700344207586-7374ef84638a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile.pic"
        ></img>
      </div>
    </div>
  );
}
