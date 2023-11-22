import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status upon component mount or page refresh
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage upon logout
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    // Redirect to the desired page after logout, e.g., login page
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="navTitle">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>
            Community<span>Boost</span>
          </h2>
        </Link>
      </div>
      <div className="navLinks">
        {!isLoggedIn && (
          <>
            <Link to="/login" className="navLink" style={{ color: "white", textDecoration: "none" }}>
              Login
            </Link>
            <Link to="/register" className="navLink" style={{ color: "#FFD700", textDecoration: "none", marginInlineStart: "8px" }}>
              Signup
            </Link>
          </>
        )}
        {isLoggedIn && (
          <Link to="/" className="navLink" style={{ color: "white", textDecoration: "none" }} onClick={handleLogout}>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
