import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      alert('User logged in successfully: ' + response.data.message);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error(error);
      alert('Error logging in: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex justify-center items-center py-5 bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md bg-custom-pink p-12 rounded-lg border-4 bg-secondary ">
        <label htmlFor="email" className="bg-secondary text-2xl font-bold text-center mb-8">Log in</label>
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="w-full h-10 mt-3 mb-2 text-black bg-secondary font-bold rounded cursor-pointer hover:bg-white transition-colors">Log in</button>
        <Link to="/auth/register" className="text-center text-black">
          <button type="button" className="w-full h-10 mt-3 mb-2 text-black bg-secondary font-bold rounded cursor-pointer hover:bg-white transition-colors">Register</button>
        </Link>
        <Link to="/auth/forgot-password" className="text-center text-black">
          <button type="button" className="w-full h-10 mt-3 mb-2 text-black bg-secondary font-bold rounded cursor-pointer hover:bg-white transition-colors">Forgot Password</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
