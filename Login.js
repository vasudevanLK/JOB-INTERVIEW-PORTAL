import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  axios.defaults.withCredentials = true;

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5500/login', { email, password })
      .then(res => {
        if (res.data.status === "success") {
          if (res.data.role === "admin") {
            nav('/admin');
          } else if (res.data.role === "user") {
            nav('/user');
          } else {
            nav('/');
          }
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-box bg-white p-4 rounded shadow">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-0 mt-3">Submit</button>
        </form>
        <p className="text-center mt-3">Don't have an account?</p>
        <Link to='/register' className='btn btn-light border w-100 rounded-0'>Register</Link>
      </div>
    </div>
  );
}

export default Login;
