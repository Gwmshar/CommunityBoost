import React, { useState } from "react";
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
        toast.success('Logged in successfully.');
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
