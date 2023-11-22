import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../layouts/Navbar.jsx";
import "./auth.css";
import axios from 'axios';

export default function Register({ setData }) {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [isConfirm, setIsConfirm] = useState({
    repassword: "",
  });

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = 'Please enter the value in';

    const usernamePattern = /^[a-z0-9][a-z0-9_]*$/;

    if (!values.name || !values.password || !isConfirm.repassword) {
      isProceed = false;
      errorMessage += ' all fields.';
    } else if (
      !usernamePattern.test(values.name) ||
      values.name.trim().length !== values.name.length
    ) {
      isProceed = false;
      errorMessage = 'Incorrect username';
    } else if (values.password !== isConfirm.repassword) {
      isProceed = false;
      errorMessage = 'Passwords do not match.';
    }

    if (!isProceed) {
      toast.error(errorMessage);
    }

    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidate()) {
      axios.post('http://localhost:3500/users', values, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => {
          console.log(res);
          toast.success('Registered successfully.');
          navigate('/login');
        })
        .catch((err) => {
          toast.error('Failed: ' + err.message);
        });
    }


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
              onChange={(e) => setIsConfirm({ repassword: e.target.value })}
            ></input>
          </div>
          {/* <div className="authButton">
            <button>Upload Photo</button>
          </div> */}
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
