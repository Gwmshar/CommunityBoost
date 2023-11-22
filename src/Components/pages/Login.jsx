import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../layouts/Navbar.jsx";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  // Check localStorage for logged-in user data on initial load
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      navigate('/'); // Redirect to home if a user is logged in
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3500/users', {
        params: {
          name: values.name,
          password: values.password,
        },
      });

      const users = response.data; // Assuming the server returns an array of users

      const foundUser = users.find(user => user.name === values.name && user.password === values.password);

      if (foundUser) {
        // Save user data in localStorage upon successful login
        localStorage.setItem('user', JSON.stringify({name: foundUser.name, id: foundUser.id}));
        toast.success('Logged in as ' + foundUser.name);
        navigate('/');
      } else {
        toast.error('Login failed: Invalid credentials');
      }
    } catch (error) {
      toast.error('Login failed: ' + error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="auth">
        <form className="authContainerR" onSubmit={handleLogin}>
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
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            ></input>
          </div>
          <div className="authButtons">
            <Link to="/register" className="authNext">
              <button>Register</button>
            </Link>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
