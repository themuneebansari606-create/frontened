// src/components/Login.jsx
import axios from 'axios';
import React, { useState } from 'react';
const Login = ({ onSwitch }) => {
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert('Please fill all fields');
    }
    try {
      const res = await axios.post('https://backened-alpha.vercel.app/api/login-user', {
        email,
        password
      });
    
      localStorage.setItem('data', JSON.stringify(res.data));
      console.log('Login successful:', res.data);
      alert("Login Successful");
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.log('Login failed:', error.response?.data?.msg || error.message);
      alert(error.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-gray-500 hover:bg-blue-950 transition-all duration-1500 ease-in-out text-white py-2 rounded">
          Login
        </button>
      </form>
      
    </div>
  );
};

export default Login;
